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
        
        subtitle: "Cal Poly San Luis Obispo",
        details: ["Thesis: Dynamic Maze Puzzle Navigation using Deep Reinforcement Learning",
            "GPA: 3.82"],
        tags: [
            "Autonomous Mobile Robotics",
            "Advanced Deep Learning",
            "Computer Vision",
            "System Dynamics",
            "Mechanical Control System Design",
            "Computational Intelligence"
        ],
        duration: "January 2022 - June 2024",
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
    penPlotter: [
        {
            projectName: "Dual-Axis Pen Plotter",
            links: "Links:",
            image: "images/pen_plotter.jpg",
            summary:
                "TO-DO: Insert info here", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["Python", "3D Printing", "SolidWorks", "Actuators", "Tolerancing"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/Dual-AxisPenPlotter",
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
                "For this mechatronics project, my lab partner and I developed software for a STM32 microcontroller to interact with motors, \
                an IMU, and a resistive touch panel to balance a ball on a platform. We simulated closed-loop control of \
                DC motor speeds using MATLAB and Simulink to assist with finding suitable proportional gain values before applying \
                it to the real-life model. Additionally, we designed and developed a task diagram and finite state machine to \
                organize the cooperative multitasking structure of the program.",
            preview: "https://luisaschiu.github.io/",
            techStack: ["Python", "MATLAB", "Simulink"],
            links: "Links:",
            data: [
                {
                    text: "Github Repo",
                    link: "https://github.com/luisaschiu/BallBalancingPlatform",
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
                "TO-DO: Insert info here", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["Project Management", "Sensors"], // TODO: UPDATE WHEN YOU HAVE TIME
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
                "TO-DO: Insert info here", // TODO: UPDATE WHEN YOU HAVE TIME
            techStack: ["Sensors"], // TODO: UPDATE WHEN YOU HAVE TIME
            data: [
                {
                    text: "Report",
                    link: "files/PDR_Report.pdf",
                },
            ],
        },
    ],

};

export const experience = [
    {
        title: "Yaskawa America, Inc. - Drives and Motion Division",
        duration: "June 2023 - September 2023",
        subtitle: "Applications Engineering Intern",
        details: [`Developed function blocks for interpolation based on path percentage using SLERP and linear interpolation`,
                  `Developed function blocks for conversion between Euler Angles and Quaternions to prevent gimbal lock and singularities for future robotic applications`,
                  `Tested function blocks by creating test cases using MATLAB and MotionWorksIEC and running a demonstration on Yaskawa's GP8 6-DOF robot arm`,
                  `Familiarized myself with the GP8 robot through training material and interacted with Yaskawa's YRC1000 controller and robot pendant`,
                  `Developed a path calculation function for a pick and place robot application and created a Sequential Function Chart(SFC) program \
                  to showcase and visually test the usage of the interpolation function block`,
                  `Manufactured an end effector attachment for the GP8 robot to visually inspect developed function block application`,
                  `Wrote functional requirements and documented the developed function blocks for future use`,
                  `Audited code by diving into existing function block code and testing for expected results`,
                  `Documented differences in function blocks between remote and local groups, indicating whether some function block inputs or features \
                  were supported or not`],
        tags: ["PLCs", "MATLAB", "Interpolation", "Robotics", "Manufacturing", "Code Audit"],
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