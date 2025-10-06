export const bio = [
    `Hello, welcome to my portfolio! My name is Luisa Chiu. I recently completed a Master's Degree in Mechanical Engineering at Cal Poly San Luis Obispo. In my undergraduate studies, I
    majored in Mechanical Engineering with a concentration in Mechatronics and completed a minor in Computer Science. Currently, I am looking for a full-time job. As I continue my job 
    search, I am taking this time to develop and learn new skills such as ROS2 and Linux.` ,
    `During my time at Cal Poly, I gained experience in designing, manufacturing, and testing mechanical systems by developing software 
    for microcontrollers to interact with actuators, sensors, and more. Through my school and work experiences, I developed knowledge and skills in:
    robotics kinematics and dynamics, open and closed-loop control systems, 3D CAD design, 3D printing, and PCB design.` , 
    `Outside of school, I like to be active by playing volleyball and flag football. I also enjoy baking sweets and cooking delicious food
    for my friends and family. I love crafting, trying new food places, and learning new sports. To conclude, as a student who focused on mechatronics-related
    courses in my graduate studies, I am passionate and fascinated about the intersection between mechanical engineering, electronics, and computer science.
    I love all things robotics, and I am always looking for opportunities to learn more about it!`,
];

export const education = [
    {
        title: "M.S. in Mechanical Engineering",
        
        subtitle: "Cal Poly San Luis Obispo",
        details: ["Thesis: Dynamic Maze Puzzle Navigation using Deep Reinforcement Learning",
            "GPA: 3.86"],
        tags: [
            "Autonomous Mobile Robotics",
            "Advanced Deep Learning",
            "Computer Vision",
            "System Dynamics",
            "Mechanical Control System Design",
            "Computational Intelligence",
            "Control Systems Theory"
        ],
        duration: "January 2023 - September 2024",
        icon: "university",
    },
    {
        title: "B.S. in Mechanical Engineering",
        duration: "September 2018 - December 2022",
        subtitle: "Cal Poly San Luis Obispo",
        details: ["Concentration in Mechatronics",
            "Minor in Computer Science",
            "GPA: 3.48"],
        tags: [
            "Mechatronics",
            "Robotics: Fundamentals and Applications",
            "Mechanical Control Systems",
            "Data Structures",
            "Artificial Intelligence",
            "MATLAB",
            "SolidWorks"
        ],
        icon: "graduation-cap",
    },
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, C, C++, C#, JavaScript, CSS, HTML, Lua",
        color: "1",
        percentage: "80",
    },
    {
        title: "Software/Frameworks",
        skillName: "ROS, OpenCV, Linux, SolidWorks, MATLAB, Simulink, TensorFlow, Godot, Gazebo, Rviz, Git, ANSYS, COMSOL, LabVIEW, Perl, VxWorks, REST, Angular",
        color: "6",
        percentage: "70",
    },
    {
        title: "Fabrication and Rapid Prototyping",
        skillName: "3D printing, power/hand tools, welding, soldering, water jet, machining, drill press",
        color: "4",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "SolidWorks, AutoCAD, PSpice, LTSpice, KiCad, Blender",
        color: "7",
        percentage: "70",
    },
    {
        title: "Hardware and Robots",
        skillName: "PLCs, HMIs, Arduino, Raspberry Pi, ESP32, DC motors, servos, linear actuators, sonar, radar, LiDAR, cameras, IMUs, Kinect cameras, Phantom Haptic Device, Baxter Robot, Sphero-mini, iRobot Create, Cobots",
        color: "3",
        percentage: "80",
    },
];

export const projects = {
    mastersThesis: [
        {
            projectName: "Master's Thesis: Dynamic Maze Puzzle Navigation using Deep Reinforcement Learning",
            links: "Links:",
            image: "images/masters_thesis.jpg", 
            summary:
                "For my master's thesis, I designed and created a simulation of an agent (autonomous wheeled mobile) that perceives its \
                environment through vision and utilizes deep reinforcement learning to learn the optimal path \
                within a maze environment and navigate it. The robot will be able to modify its path if the \
                environment suddenly changes, also known as a dynamic environment. Additionally, the robot will \
                be able to handle stochastic outcomes such as slip. This thesis explored the performance of Deep \
                Q-Networks (DQN), using images as an input, for \
                mobile robot navigation in dynamic maze puzzles and aims to contribute to advancements in deep \
                reinforcement learning applications for simulated and real-life robotic systems. This project \
                was a step towards implementation in a hardware-based system. The proposed approach uses a DQN \
                algorithm with experience replay and an epsilon-greedy annealing schedule. Experiments were conducted \
                to train DQN agents in static and dynamic maze environments, and various reward functions and training \
                strategies were explored to optimize learning outcomes. In this context, the dynamic aspect involves \
                training the agent on fixed mazes and then testing its performance on modified mazes, where obstacles \
                like walls alter previously optimal paths to the goal. The results indicated that \
                adequate exploration, well-designed reward functions, and diverse training data significantly \
                impacted both training performance and game play outcomes. The findings suggest that DQN \
                approaches are plausible solutions to stochastic outcomes, but expanding upon the proposed \
                method and more research is needed to improve this methodology. ", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["Python", "Simulation", "Neural Networks"],
            data: [
                {
                    text: "Defense Slides",
                    link: "https://cpslo-my.sharepoint.com/:p:/g/personal/mhasan04_calpoly_edu/ERGDq85LcUhLv6MM401-6KwBvJsLcaMrprY9NvmLGnXoQQ?e=ByBHTI", //TO-DO: Insert Links
                },
                {
                    text: "Thesis Paper",
                    link: "https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=4575&context=theses", //TO-DO: Insert Links
                },
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/AutonomousRobotDRL", //TO-DO: Insert Links
                },
            ],
        },
    ],
    autoRobot: [
        {
            projectName: "Algorithm Development for an Autonomous Mobile Robot",
            links: "Links:",
            image: "images/auto_robot.jpg", // TODO: UPDATE WHEN YOU HAVE TIME
            summary:
                "In Cal Poly's autonomous mobile robotics course, my lab partner and I designed and developed algorithms \
                for a robot to perform the following tasks: following a line on different courses using a proportional \
                controller method and a convolutional neural network (CNN) method, detecting and knocking over \
                a target tower using Monte Carlo localization, and sensing and pushing cans off of a course. \
                We developed software in C to interact with hardware and electronic components such as servo motors, \
                IR sensors, and range sensors. Additionally, I designed and CAD modeled sensor brackets and 3-D \
                printed them to mount on the robot.", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["C (Programming Language)", "Line-Following", "Localization", "Neural Networks", "3-D Printing", "Sensors", "Tolerancing(Press/Clearance Fits)"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                { // Insert videos of the car moving
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/CPE_416", //TO-DO: Insert Links
                },
                {
                    text: "Video: Line-Following using P-Control",
                    link: "https://youtu.be/lyRhuEIH2L0",
                },
                {
                    text: "Video: Pushing Can Operation",
                    link: "https://youtu.be/aiwHPDRi1S4",
                },
            ],
        },
    ],
    compVision: [
        {
            projectName: "Robot Pose Estimation using Computer Vision",
            links: "Links:",
            image: "images/comp_vision.jpg",
            summary:
                "This project was completed to assist my thesis in a robot navigating a maze using deep reinforcement learning. \
                For this project, I used an existing robot manufactured by DFRobot, named Maqueen, that used a micro-bit controller \
                to control its motors and other sensors. I designed, CAD modeled, and 3-D printed a part to obscure the robot and provide \
                a flat platform to stick a tracker (AruCo marker) on it. Using a camera, AruCo markers, and OpenCV, I found the orientation \
                and position of the robot. Additionally, I developed some test cases to test the functionality of the program.", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["Python", "AruCo", "Computer Vision", "OpenCV", "SolidWorks", "3-D Printing"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [ 
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/CPE-EE428/tree/main/RobotPoseEstimation", //TO-DO: Insert Links
                },
                {
                    text: "Final Report",
                    link: "files/Comp_Vision_FinalProj_Report.pdf",
                },
            ],
        },
    ],
    produceSlicer: [
        {
            projectName: "Automated Produce Slicer",
            links: "Links:",
            image: "images/auto_slicer.jpg",
            summary:
                "This project was completed in collaboration with two other mechanical engineers, designed for users to have a machine slice their produce for them. \
                Our team created a user interface so we can connect to our ESP32 microcontroller via Wifi, where we guide the user through the setup process such as \
                choosing slice thicknesses, start or stopping the slicer machine, and more. The hardware implemented was using a lead screw and nut for a 3-D printed \
                pusher to guide produce to the blade, as a triangular blade oscillates back and forth. A DC motor coupled with a two-link linkage mechanism provided \
                the torque to move the blade back and forth, and the blade was connected to a 3-D printed T-slot sliding mechanism to ensure translational motion \
                For this project, I developed C++ code for the ESP32 to interact with motors, sensors, and limit switches and ensured accurate timing execution \
                through implementation of a real-time operating system using FreeRTOS and PlatformIO. I also collaborated on a PCB (printed circuit board) designed for \
                our project application using Autodesk Eagle. Additionally, I manufactured project components using a plasma cutter, angle grinder, and other woodworking tools. \
                Lastly, I designed 3D printed parts through CAD modeling with emphasis in tolerancing for clearance and press fits.",
            techStack: ["C++", "SolidWorks", "Wifi", "3-D Printing", "PlatformIO", "Mechanical Design", "Manufacturing"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/TeamSlicers/tree/main/main/src", //TO-DO: Insert Links
                },
            ],
        },
    ],
    seniorDesign: [
        {
            projectName: "Senior Design Project: Bike to the Future",
            links: "Links:",
            image: "images/senior_proj.png",
            summary:
                "For my senior project, I worked with a multidisciplinary team of student engineers to design a sensor feedback system with a focus \
                on usability and functionality for a visually impaired biker. We designed the system such that LiDAR and ultrasonic sensors detected \
                objects in front of the bike path, while tactile signals from Lilypad Vibe Boards and audio signals from Piezo speakers warned the \
                biker of any obstacles detected. In addition to these components, we designed a dashboard assembly mounted on top of an extra set \
                of handlebars to organize and house several electronic components in a waterproof enclosure. The extra set of handlebars addressed \
                the customer's ergonomic issues with his original bike's handlebars being too low. Additionally, we included an external power \
                switch and charging port to make it convenient for the user to charge the battery and turn the sensor feedback system on and off. My \
                role in this team was mainly focused in hardware design, figuring out the best way to organize components and assemble the dashboard. \
                I focused on creating and 3D CAD models of the project assembly that contained over 20 parts using SolidWorks. I also produced a \
                comprehensive instructional and informative video to guide the customer in assembling the product and features provided.",
            techStack: ["SolidWorks", "Mechanical Design", "Human Centered Design"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Digital Commons Publication",
                    link: "https://digitalcommons.calpoly.edu/mesp/677/", //TO-DO: Insert Links
                },
            ],
        },
    ],
    penPlotter: [
        {
            projectName: "Dual-Axis Pen Plotter",
            links: "Links:",
            image: "images/pen_plotter.jpg",
            summary:
                "This project was completed in collaboration with another classmate to design, manufacture, and \
                develop code for a pen plotter system that automatically plots an image using a hpgl file input.\
                The multitasking program was developed for a STM32 microcontroller to interact with the following components: DC motors \
                with encoders, limit switches, and a solenoid. We designed the entire mechanism to use a cylindrical axis, such that \
                drive shaft rotates in the theta direction using motor torque and a drive wheel a lead screw translationally \
                moves the pen in the radial direction using the torque from a second motor. Parts of the assembly were designed, \
                modeled on SolidWorks, and 3-D printed. Ball bearings were press-fit into 3-D printed parts to ensure smooth \
                rotation of the lead screw and drive shaft as they rotated with the assembly.",
            techStack: ["Python", "3D Printing", "SolidWorks", "Mechanisms", "Kinematics", "Mechanical Design", "Actuators", "Tolerancing (Press/Clearance Fits)"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/ME405/tree/main/Dual-AxisPenPlotter",
                },
            ],
        },
    ],
    ballBalancing: [
        {
            projectName: "Ball Balancing Platform",
            // timeline: "3 months (September 2021 - December 2021)",
            image: "images/ball_balancing.jpg",
            summary:
                "For this mechatronics project, my lab partner and I developed software for a STM32 microcontroller to interact with \
                a mechanism assembly consisting of motors, an IMU(Inertial Measurement Unit), and a resistive touch panel \
                to balance a ball on a platform. Kinematic and dynamic analysis of the platform assembly was conducted \
                to find equations for motion control of the simulated and real-life models. We simulated closed-loop control of \
                DC motor speeds using MATLAB and Simulink to assist with finding suitable proportional gain values before implementing the control system \
                in the physical model. Additionally, we designed and developed a task diagram and finite state machine to \
                organize the cooperative multitasking structure of the program.",
            preview: "https://luisaschiu.github.io/",
            techStack: ["Python", "MATLAB", "Simulink"],
            links: "Links:",
            data: [
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/ME305/tree/main/BallBalancingPlatform",
                },
                {
                    text: "Powerpoint Slides",
                    link: "https://docs.google.com/presentation/d/1zU3avEw_QoErOw8UOeQKcBMYGLnliPxZZhomeFnZxes/edit#slide=id.p1",
                },
                {
                    text: "Documentation and Lab Reports",
                    link: "ME305_Portfolio/index.html",
                }
            ],
        },
    ],
    projCoNNet: [
        {
            projectName: "At-Home Multiplayer Arcade BasketBall Game (Project CoNNet)",
            links: "Links:",
            image: "images/proj_connet.jpg",
            summary:
                "In 2021, I participated in a hackathon named SLO Hacks Lite and created Project CoNNet, designed to keep people \
                connected and entertained during the COVID-19 pandemic lockdown. The idea was to create an arcade basketball \
                minigame using at-home resources and electronic components so that anyone could build their own and \
                play against other players in their own homes and in real time. This project was completed in under 24 hours \
                through virtual collaboration with a multidisciplinary engineering team, earning 2nd place. I designed and built \
                a minigame prototype using Arduino UNO, circuit components, and at-home resources. In addition to being an engineer \
                on this team, I took on the project manager role and led and facilitated meetings by communicating goals and \
                delegating tasks to optimize members' skills and ensure timely completion of our project.",
            techStack: ["Time Management", "Project Management", "Sensors", "Arduino"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Hackathon Video",
                    link: "https://www.youtube.com/watch?v=0-KH5vjydwA",
                },
            ],
        },
    ],
    bedDesk: [
        {
            projectName: "Bed Desk for Ergonomics Improvement",
            links: "Links:",
            image: "images/bed_desk.jpg",
            summary:
                "This project was designed to improve the ergonomics of working in a bed through implementation of height adjustable and \
                angle-adjustable features. I conducted research on ergonomic risk factors and bed workspaces, developed and finalized \
                design concepts through ideation and modeling, and prepared Scope of Work and Preliminary Design Review documents. Lastly, \
                I designed and built a working concept prototype with height adjustable and angle elevation mechanisms out of foam core, \
                cardboard, and pencils. This bed desk was created with an emphasis in human-centered design, taking \
                usability, functionality, and accessibility into account.",
            techStack: ["Mechanical Design", "Manufacturing", "Human-Centered Design"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [ //Maybe include the Youtube video?
                {
                    text: "PDR Report",
                    link: "files/PDR_Report.pdf",
                },
            ],
        },
    ],

};

export const experience = [
    {
        title: "Johnson and Johnson Medtech",
        duration: "April 2025 - present",
        subtitle: "Associate Robotics Solutions Engineer",
        details: [`Led system-level debugging to restore robotic functionality critical to meeting program deadlines`,
                  `Diagnose and resolve system issues through real-time log analysis to ensure uptime in clinical labs`,
                  `Conduct field operations, including system installation, de-installation, and functional testing`,
                  `Collaborate with cross-functional engineers to troubleshoot and optimize system performance`],
        tags: ["Bash", "Robotics"],
        icon: "heartbeat",
    },
    {
        title: "Yaskawa America, Inc. - Drives and Motion Division",
        duration: "June 2023 - September 2023",
        subtitle: "Applications Engineering Intern",
        details: [`Developed function blocks for interpolation based on path percentage using SLERP and linear interpolation`,
                  `Developed function blocks for conversions between Euler Angles and Quaternions to prevent gimbal lock and singularities for future robotic applications`,
                   `Developed test cases for function blocks using MATLAB and MotionWorksIEC`,
                  `Ran a pick and place demonstration on Yaskawa's GP8 6-DOF robot arm by creating a path calculation function and a Sequential Function Chart(SFC) program \
                  to showcase and visually test the usage of the interpolation function block`,
                  `Manufactured an end effector attachment for the GP8 robot to visually inspect developed function block application`,
                  `Wrote functional requirements and documented the new function blocks for future use`,
                  `Audited code by diving into existing function block code and testing for expected results`,
                  `Documented differences in function blocks between remote and local groups`],
        tags: ["PLCs", "MATLAB", "Interpolation", "Robotics", "Manufacturing", "Code Auditing"],
        icon: "microchip",
    },
    {
        title: "Yaskawa America, Inc. - Drives and Motion Division",
        duration: "June 2022 - December 2022",
        subtitle: "Applications Engineering Intern",
        details: [`Programmed PLC's (Programmable Logic Controllers) using MotionWorksIEC to \
                   develop over 200 test cases for multiple existing function blocks in preparation for a new controller release`,
                   `Ran test cases for each function block to find and document inconsistencies against expected values`,
                   `Assembled a test stand and circuitry for a controller prototype using motors, servo drivers, and other electronic components`],
        tags: ["PLCs", "Manufacturing"],
        icon: "code",
    },
    {
        title: "Cal Poly SLO Mechanical Engineering Department",
        duration: "September 2020 - December 2022",
        subtitle: "Instructional Student Assistant",
        details: [`Evaluated homework assignments for over 100 students for ME 236: Measurement and Data Analysis`,
                   `Coordinated with instructor to improve teaching and incorporate feedback on student performance`],
        tags: ["Grading"],
        icon: "university",
    },
    {
        title: "San Francisco Public Utilities Commission",
        duration: "Summer 2018, 2019, 2021",
        subtitle: "Asset Management Intern, Project Management Intern, Civil Engineering Intern",
        details: [`Assisted with Project Management Plans and Closeout Packages for Sewer System Improvement Program Projects`,
                  `Assembled diagrams and vicinity maps indicating project locations and staging areas`,
                  `Analyzed and inspected drafted layouts and as-builts of the SFPUC Calaveras Dam Replacement Project`],
        tags: ["Project Management"],
        icon: "gears",
    },
    {
        title: "San Francisco Department of Public Works",
        duration: "Summer 2017",
        subtitle: "Mechanical Engineering Intern",
        details: [`Drafted a detailed AutoCAD layout of the San Francisco Mariposa pump station`,
                  `Organized and filed official city papers`],
        tags: ["AutoCAD"],
        icon: "gears",
    },
];


export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/luisaschiu",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Light/Dark Mode",
                func: "enableDarkMode()",
            },
            // {
            //     text: "Resume",
            //     link: "https://drive.google.com/file/d/1s1YKa4OGqJSBwDMW4SxOdVAGMJN9Hroj/view?usp=sharing"
            // },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/luisa-chiu",
            },
        ],
    },
];