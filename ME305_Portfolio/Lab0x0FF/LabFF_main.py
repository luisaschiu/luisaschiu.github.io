''' @file        LabFF_main.py
    @brief       Main script for Lab FF.
    @details     Implements cooperative multitasking using tasks implemented by
                 finite state machines.
    @author      Faith Chau
    @author      Luisa Chiu
    @date        November 15, 2021    
    \image html  LabFF_TaskDiagram.png "Lab FF Task Diagram"
    \image html  LabFF_TaskMotor.png "Lab FF Task Motor FSM"
    \image html  LabFF_TaskUser.png "Lab FF Task User FSM"
    \image html  LabFF_TaskIMU.png "Lab FF Task IMU FSM"
    \image html  LabFF_TaskPanel.png "Lab FF Task Panel FSM"
    
    @page        page4 Lab 0x0FF Report
    @brief       Report for Lab 0x0FF
    @details     Provides further information on the tasks used to create the closedloop control system for ball balancing.
    @author      Faith Chau
    @author      Luisa Chiu
    @date        December 9, 2021  
    
    Here is the link to our video depicting system performance: https://youtu.be/YJK6PTQRC2M
    
    Here is the link to our source code: https://bitbucket.org/lschiu/lschiu.bitbucket.io/src/master/Lab0x0FF/

    
    Our ball-balancing program is composed of four tasks. The task diagram is pictured below:
    \image html  LabFF_TaskDiagram.png "Lab FF Task Diagram"
    
    <b> 1.	User interface task: </b> 
        
    \image html  LabFF_TaskUser.png "Lab FF Task User FSM"
    
    This task interacts between the user and program. 
    Our user task allows the user to calibrate the IMU and resistive touch panel, perform 
    platform and/or ball balancing, disable the motors, and collect and print state vector data. 
    Within our user task, there are seven states that correspond to these commands. 
    
    IMU and touch panel calibration can be manually accomplished by the user through 
    this task. If a text file with the proper calibration coefficients is present in the 
    file directory, the user will be informed that the device has already been calibrated 
    automatically. 
        
        
    <b> 2.	Motor driving task: </b> 
        
    \image html  LabFF_TaskMotor.png "Lab FF Task Motor FSM"
    
    This task interfaces with the motors, motor driver, and 
    controller driver to set PWM signals to the motors to perform the balancing function. 
    To perform closed-loop control to enable proper balancing, controller objects are created 
    from the controller driver and passed into the motor task to calculate duty applied to the 
    motors from calculated torque. The torque is calculated using gains applied to the state vector
    for the x and y directions. We used the following equations and constants found in the DRV8847
    motor manual to calculate torque and duty:
    \image html  LabFF_TorqueCalc.png "Lab FF Duty Calculation"
        
    Below is a screenshot of the Matlab code in an attempt to find appropriate gain values
    for the control loop. We ended up adjusting and scaling the gain values to balance the platform 
    and ball.
    \image html  LabFF_MatlabCode.png "Finding Gain Values for Control Loop"    
        
    <b> 3.	Inertial Measurement Unit (IMU) Task: </b> 
        
    \image html  LabFF_TaskIMU.png "Lab FF Task IMU FSM"
    
    This task interfaces with the BNO055 IMU device
    to communicate Euler angle and angular velocity readings to the system. These values are used 
    to create the state vectors used to implement the closed-loop control. This task also works 
    with the IMU driver to calibrate the IMU device.
    
    
    <b> 4.	Touch Panel Task: </b> 
        
    \image html  LabFF_TaskPanel.png "Lab FF Task Panel FSM"
    
    This task interfaces with the resistive touch panel to communicate
    x, y, and z-positions readings to the system. These values are used to create the state 
    vectors used to implement the closed-loop control. This task also works with the touch panel 
    driver to calibrate the touch panel. 


    <b> Data Collection: </b> 
        
    Provided are two plots produced by the ball being balanced on the platform. 
    The first plot shows the x-position of the ball read by the panel vs time and 
    the second plot shows the y-position of the ball vs time. Evidently, the system is not perfect.
    Future adjustments to the gain values would improve the ball and platform balancing
    \image html  LabFF_Plot_xpos.png "Plot of x-position of ball vs. time"
    \image html  LabFF_Plot_ypos.png "Plot of y-position of ball vs. time"
'''


import shares
import task_userinterface
from pyb import Pin
import task_motor
import DRV8847
import touch_pan
import pyb
import BNO055
import task_panel
import task_IMU
import closedloop
from ulab import numpy as np

        
def main():
    ''' @brief The main program
    '''
    
    ## @brief     The period (in us) of the task
    #  @details   Specifies the largest number that can be stored in the timer, also known as the "Auto Reload" value
    period = 50000 # Number of microseconds between each desired interval
    period_pan = 500
    period_motor = 80
    period_IMU = 80
    gain_1 = np.array([-0.026, -0.026, -0.005, 0.006])   #X-GAINS
    gain_2 = np.array(([0.0099, 0.027, -0.001, -0.005])) #Y-GAINS
    L_1 = shares.Share(0)
    L_2 = shares.Share(0)
    balance_flag = shares.Share(0)
    calib_pan_flag = shares.Share(0)
    calib_IMU_flag = shares.Share(0)
    disable_flag = shares.Share(0)
    state_vect_x = [shares.Share(0), shares.Share(0), shares.Share(0), shares.Share(0)] #[x, th_y, xd, th_yd]
    state_vect_y = [shares.Share(0), shares.Share(0), shares.Share(0), shares.Share(0)]  #[y, th_x, yd, th_xd]
    
    ## @brief     The motor driver object that calls the DRV8847 Dual H-Bridge Motor Driver 
    #  @details   This motor driver object was created in the DRV8847.py file
    motor_drv = DRV8847.DRV8847(Pin.cpu.A15, Pin.cpu.B2, 3)
    ## @brief     The motor object that calls motor 1
    #  @details   This motor object was defined in main.py    
    motor_1 = motor_drv.motor(Pin.cpu.B4, Pin.cpu.B5, 1, 2)
    ## @brief     The motor object that calls motor 2
    #  @details   This motor object was defined in main.py
    motor_2 = motor_drv.motor(Pin.cpu.B0, Pin.cpu.B1, 3, 4) 
    ## @brief     The controller object that calls controller for motor 1
    #  @details   This motor object was defined in main.py
    closedloop_1 = closedloop.ClosedLoop(80, -80, L_1, state_vect_x, gain_1)
    ## @brief     The controller object that calls controller for motor 2
    #  @details   This motor object was defined in main.py    
    closedloop_2 = closedloop.ClosedLoop(80, -80, L_2, state_vect_y, gain_2)
    ## @brief      This is a placeholder for the motor driver object for task 5
    #  @details    This is used so we call the motor driver once in all of our tasks
    motor_none = None   
    ## @brief     Touch panel object
    #  @details   Used to interface with touch panel task
    panel_obj = touch_pan.Touch_Pan(Pin.cpu.A7, Pin.cpu.A1, Pin.cpu.A6, Pin.cpu.A0)
    ## @brief     IMU object
    #  @details   Used to interface with IMU task
    IMU_obj = BNO055.BNO055(pyb.I2C(1, pyb.I2C.MASTER), calib_IMU_flag)

    
    ## @brief        Creates a parameterized task constructor for task_userinterface.py
    #  @details      The constructor takes input arguments and objects and passes them into user task
    task1 = task_userinterface.Task_User(period, L_1, L_2, balance_flag, calib_pan_flag, calib_IMU_flag, disable_flag, state_vect_x, state_vect_y)
    ## @brief        Creates a parameterized task constructor for task_panel.py
    #  @details      The constructor takes input arguments and objects and passes them into touch panel task   
    task2 = task_panel.Task_Panel(period_pan, panel_obj, state_vect_x, state_vect_y, calib_pan_flag)
    ## @brief        Creates a parameterized task constructor for task_IMU.py
    #  @details      The constructor takes input arguments and objects and passes them into IMU task
    task3 = task_IMU.Task_IMU(period_IMU, IMU_obj, state_vect_x, calib_IMU_flag, state_vect_y)    
    ## @brief        Creates a parameterized task constructor for task_motor.py corresponding to motor 1
    #  @details      The constructor takes input arguments and objects and passes them into user task
    task4 = task_motor.Task_Motor(period_motor, motor_1, motor_drv, L_1, balance_flag, state_vect_x, state_vect_y, disable_flag, closedloop_1)
    ## @brief        Creates a parameterized task constructor for task_motor.py corresponding to motor 2
    #  @details      The constructor takes input arguments and objects and passes them into user task
    task5 = task_motor.Task_Motor(period_motor, motor_2, motor_none, L_2, balance_flag, state_vect_x, state_vect_y, disable_flag, closedloop_2)
                                  
    task_list = [task1, task2, task3, task4, task5]
    

    
    
    while(True):
        try:
            
            for task in task_list:
                task.run()
                
        except KeyboardInterrupt:
            break
        
    print('Program Terminating')
    
    
if __name__ == '__main__':
    main()
