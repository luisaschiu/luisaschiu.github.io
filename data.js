export const bio = [
    `Hello, welcome to my portfolio! My name is Luisa Chiu. I am currently pursuing a Master's Degree in Mechanical Engineering at Cal Poly San Luis Obispo. In my undergraduate studies, I
    majored in Mechanical Engineering with a concentration in Mechatronics and completed a minor in Computer Science.` ,
    `During my time at Cal Poly, I gained experience in designing, manufacturing, and testing mechanical systems by developing software 
    for microcontrollers to interact with actuators, sensors, and more. Through my school and work experiences, I developed knowledge and skills in:
    robotics kinematics and dynamics, open and closed-loop control systems, 3D CAD design, 3D printing, and PCB design.`,
    `Outside of school, I like to be active by playing volleyball and flag football. I also enjoy baking sweets and cooking delicious food
    for my friends and family. I love crafting, trying new food places, and learning new sports. To conclude, as a student focusing on mechatronics-related
    courses in my graduate studies, I am passionate and fascinated about the intersection between mechanical engineering, electronics, and computer science.
    I love all things robotics, and I am always looking for opportunities to learn more about it!`,
];

export const education = [
    {
        title: "M.S. in Mechanical Engineering",
        duration: "Jan 2022 - June 2024",
        subtitle: "Cal Poly San Luis Obispo",
        details: ["Thesis: Dynamic Maze Puzzle Navigation using Deep Reinforcement Learning",
            "GPA: 3.75"],
        tags: [
            "Autonomous Mobile Robotics",
            "Advanced Deep Learning",
            "Computer Vision",
            "System Dynamics",
            "Mechanical Control System Design",
            "Computational Intelligence"
        ],
        icon: "university",
    },
    {
        title: "B.S. in Mechanical Engineering",
        duration: "September 2018 - December 2022",
        subtitle: "Cal Poly San Luis Obispo",
        details: ["Concentration in Mechatronics",
            "Minor in Computer Science",
            "GPA: 3.45"],
        tags: [
            "Mechatronics",
            "Robotics: Fundamentals and Applications",
            "Mechanical Control Systems",
            "Data Structures",
            "Artificial Intelligence"
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
    ballBalancing: [
        {
            projectName: "Ball Balancing Platform",
            image: "images/ball_balancing.png",
            summary:
                "For this mechatronics project, my lab partner and I developed software for a STM32 microcontroller to interact with motors, \
                an IMU, and a resistive touch panel to balance a ball on a platform. We simulated closed-loop control of \
                motor speeds using MATLAB and Simulink to assist with finding suitable proportional gain values before applying \
                it to the real-life model. Additionally, we designed and developed a task diagram and finite state machine to \
                organize the cooperative multitasking structure of the program.",
            preview: "https://luisaschiu.github.io/",
            techStack: ["Python", "MATLAB", "Simulink"],
        },
    ],
    penPlotter: [
        {
            projectName: "Dual-Axis Pen Plotter",
            // image: "images/ATTS.png",
            summary:
                "Insert info here",
            preview: "https://luisaschiu.github.io/", // link video or presentation
            techStack: ["Python", "3D Printing", "SolidWorks", "Actuation"], // TO-DO: UPDATE WHEN YOU HAVE TIME
        },
    ],
};

export const experience = [
    {
        title: "Northern Illinois Univeresity | ARM and Omron Lab",
        duration: "October 2021 - Present",
        subtitle: "Research and Teaching Assistant",
        details: [`Worked on control and estimation problems for navigation and manipulation of autonomous robotic systems`,
            `Led lab sessions for introductory engineering courses including Computer Engineering, Engineering Dynamics, Dynamic Systems and Control, and Mechanical Vibrations`],
        tags: ["Teaching", "Robot Development", "State Estimation and Control", "Computer Vision", "Reinforcement Learning"],
        icon: "university",
    },
    {
        title: "Yaskawa America Inc. - Motion and Drives",
        duration: "May 2023 - August 2023",
        subtitle: "Embedded Systems Engineering Intern",
        details: [`Participated in full stack development of encryption and decryption methods for Yaskawa's MPi controllers`,
            `Created automated test cases for major firmware and hardware releases`,
            `Developed motion planning functions for manipulators`],
        tags: ["Cyber Security", "Full-Stack Development", "Automated Testing", "Manual Testing", "Motion Planning"],
        icon: "microchip",
    },
    {
        title: "Argonne National Laboratory",
        duration: "May 2022 - January 2023",
        subtitle: "Robotics Research Assistant",
        details: ["Developed a haptic telerobotic system using a Baxter Robot, Phantom Omni stylus, and multiple different sensors and actuators to provide users an intuitive platform to manipulate objects in a virtual environment"],
        tags: ["Haptics", "Teleoperation", "Manipulation", "Human Robot Interaction", "Virtual Reality"],
        icon: "code",
    },
    {
        title: "PBC Linear: Applied Cobotics",
        duration: "May 2021 - August 2022",
        subtitle: "Robotics Engineering Intern",
        details: ["Increased productivity by participating in the R&D of automated robotic workcells, along with new automated quality assurance systems, a mechatronic Smart Cart, and an autonomous mobile manipulator for pick and place applications."],
        tags: ["Automation", "Control Systems", "Design and Fabrication"],
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
                text: "Dark Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Resume",
                link: "https://drive.google.com/file/d/1s1YKa4OGqJSBwDMW4SxOdVAGMJN9Hroj/view?usp=sharing"
            },
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