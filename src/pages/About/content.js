import ualberta from "./images/ualberta.png";
import rldhs from "./images/rldhs.png";
import town from "./images/town.png";
import iga from "./images/iga.png";
import latandao from "./images/latandao.png";

export const education = [
    {
        title: "University of Alberta",
        location: "Edmonton, AB",
        dates: ["September 2018", "June 2022"],
        description: "Graduated with a BSc Honours in Computing Science",
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
        title: "Backend Programmer",
        location: "CMPUT 401 - LaTandao App",
        dates: ["January 2022", "April 2022"],
        description: "Worked with a team of four others to build an app for local Edmonton community group 'La Connexional'. " + 
                     "While CMPUT 401 is a credited university course, The client was real and so is the final product.",
        list: ["Database setup", "REST API in Django", "User Authentication", "Team scrum master"],
        image: latandao
    },
    {
        title: "Seasonal Labourer",
        location: "Municipality of Red Lake",
        dates: ["May", "August 2019", "June", "August 2020", "May", "August 2021"],
        list:   [
                    "Using power equipment to maintain municipal greenspace in a safe and efficient manner",
                    "Planning the daily schedule and making sure the crew has all the required equipment",
                    "Helping with community events",
                    "Training new employees on safe operation of the equipment"
                ],
        image: town
    },
    {
        title: "Grocery Worker",
        location: "Red Lake IGA",
        dates: ["November 2015", "August 2018"],
        list: ["Filling and facing shelves", "Packing groceries", "Assisting customers", "Training new employees"],
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