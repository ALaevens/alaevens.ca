import ualberta from "./images/ualberta.png";
import rldhs from "./images/rldhs.png";
import town from "./images/town.png";
import iga from "./images/iga.png";
import latandao from "./images/latandao.png";
import evolution from "./images/evolution.png";

export const education = [
    {
        title: "University of Alberta",
        location: "Edmonton, AB",
        dates: ["September 2018", "June 2022"],
        description: "Graduated with a BSc Honours in Computing Science. Additional focus on Math, Economics, and Earth Sciences",
        image: ualberta,
        hiddenList: {
            title: "Key Courses",
            content: [
                {heading: "CMPUT 401", details: "Software Process and Product Management"},
                {heading: "CMPUT 412", details: "Experimental Mobile Robotics"},
                {heading: "CMPUT 481", details: "Parallel and Distributed Systems"},
                {heading: "CMPUT 379", details: "Operating Systems Concepts"},
                {heading: "CMPUT 391", details: "Database Management Systems"},
                {heading: "CMPUT 301", details: "Introduction to Software Engineering"}
            ]
        }
    },
    {
        title: "Red Lake District High School",
        location: "Red Lake, ON",
        dates: ["September 2014", "June 2018"],
        description: "Graduated with an OSSD + Honours",
        image: rldhs
    }
];

export const work = [
    {
        title: "Vacation Student - IT",
        location: "Evolution Mining Red Lake Operations",
        dates: ["May 2023", "August 2023"],
        list: [
            "Hardware:",
            [
                "Refurbished Lenovo, Microsoft Surface, and HP Desktop and Laptop computers",
                "Troubleshooted issues with various peripherals and laptop docks"
            ],
            "Software:",
            [
                "Used SCCM for Windows deployment and software management",
                "Microsoft Account Management through Active Directory, Entra (Formerly Azure AD), and Exchange Server",
                "Installed and provided basic support for software in use on site (Deswik, Leapfrog, Foxit PDF, etc)",
            ],
            "Networking:",
            [
                "Managed Cisco IP phones with Cisco Unified Connection Manager and Cisco Unity",
                "Configured Cisco switches of various models",
                "Diagnosed Cat6 and fiber optic cable connection issues"
            ],
            "Special Projects Completed:",
            [
                "An IT inventory management solution with Microsoft PowerApps and SQL Server",
                "PowerShell and WinForms GUI to copy Active Directory group memberships which greatly simplified the account creation process",
                "PowerShell with WinForms GUI application to clear obsolete computer profiles off of network computers remotely",
                "Python with Tkinter GUI application to generate ready to use Cisco Network switch configuration files"
            ]
        ],
        image: evolution
    },
    {
        title: "Backend Programmer",
        location: "CMPUT 401 - LaTandao App",
        dates: ["January 2022", "April 2022"],
        description: "Worked with a team of four others to build an app for local Edmonton community group 'La Connexional'.",
        list: [
            "Built a REST API with Django and MySQL", 
            "Implemented user authentication with tokens and OAuth2", 
            "Coordinated team meetings as the group's scrum master", 
            "Used docker and docker-compose to create a modular system the client would be able to easily deploy",
            "Deployed working builds to CyberaRAC an Alberta based cloud computing service"
        ],
        image: latandao
    },
    {
        title: "Seasonal Labourer",
        location: "Municipality of Red Lake",
        dates: ["May", "August 2019", "June", "August 2020", "May", "August 2021"],
        list:   [
                    "Used power equipment to maintain municipal greenspace in a safe and efficient manner",
                    "Planned the daily schedule and made sure the crew has all the required equipment after being told our daily goals",
                    "Assisted with community events such as Norseman Days",
                    "Trained new employees on safe operating procedures"
                ],
        image: town
    },
    {
        title: "Grocery Worker",
        location: "Red Lake IGA",
        dates: ["November 2015", "August 2018"],
        list: ["Maintained and organized stock on the shelves and in the warehouse", "Packed large grocery orders", "Assisted customers", "Trained new employees"],
        image: iga
    },
]

export const skills = [
    {
        subject: "Programming/Scripting Languages",
        content: [
            "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL"
        ]
    },
    {
        subject: "Backend Technologies",
        content: [
            "Django", "REST APIs", "Docker", "Docker-Compose", "Nginx", "Linux", "MySQL", "SQLite"
        ]
    },
    {
        subject: "Frontend Technologies",
        content: [
            "React", "Flutter", "Redux"
        ]
    },
    {
        subject: "Tools",
        content: [
            "Git", "Swagger API Documentation", "Postman", "ReadTheDocs", "Pytest", "JUnit", "GDB + Valgrind",
            "Jetbrains Software", "Android Studio", "Visual Studio + VS Code"
        ]
    }
]