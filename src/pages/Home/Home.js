import "./Home.css";
import nobg from "./nobgclear.png";
import ContentBox from "../../components/ContentBox/ContentBox";
import MediaLink from "../../components/MediaLink/MediaLink";
import AccordionDiv from "../../components/AccordionDiv/AccordionDiv";
import { skills } from "../About/content";

const mediaIcons = {
    github: ["GitHub", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiBoZWlnaHQ9IjU2LjY5M3B4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMTM0LjY1OTgsMTY2Mi45MTYzYy0xMy42MDEsMC0yNC42MywxMS4wMjY3LTI0LjYzLDI0LjYyOTkgICBjMCwxMC44ODIxLDcuMDU3MywyMC4xMTQ0LDE2Ljg0MzUsMjMuMzcxM2MxLjIzMDgsMC4yMjc5LDEuNjgyOS0wLjUzNDUsMS42ODI5LTEuMTg0OWMwLTAuNTg3LTAuMDIyNy0yLjUyNzYtMC4wMzM0LTQuNTg1NyAgIGMtNi44NTIxLDEuNDkwMS04LjI5NzktMi45MDYtOC4yOTc5LTIuOTA2Yy0xLjEyMDUtMi44NDY3LTIuNzM0Ny0zLjYwMzktMi43MzQ3LTMuNjAzOSAgIGMtMi4yMzQ5LTEuNTI4NywwLjE2ODUtMS40OTcyLDAuMTY4NS0xLjQ5NzJjMi40NzMsMC4xNzM3LDMuNzc1NSwyLjUzODUsMy43NzU1LDIuNTM4NWMyLjE5NjcsMy43NjUxLDUuNzYxOCwyLjY3NjUsNy4xNjc1LDIuMDQ3MiAgIGMwLjIyMTEtMS41OTE3LDAuODU5MS0yLjY3ODYsMS41NjM3LTMuMjkzNmMtNS40NzA3LTAuNjIyNi0xMS4yMjE4LTIuNzM0Ny0xMS4yMjE4LTEyLjE3MjJjMC0yLjY4ODgsMC45NjIzLTQuODg2MSwyLjUzOC02LjYxMSAgIGMtMC4yNTU3LTAuNjIwNi0xLjA5ODktMy4xMjU1LDAuMjM4Ni02LjUxODNjMCwwLDIuMDY4NC0wLjY2MTYsNi43NzQ3LDIuNTI1YzEuOTY0OC0wLjU0NTgsNC4wNzE5LTAuODE5NSw2LjE2NS0wLjgyOSAgIGMyLjA5MywwLjAwOTUsNC4yMDE3LDAuMjgzMiw2LjE3LDAuODI5YzQuNzAxMi0zLjE4NjYsNi43NjY1LTIuNTI1LDYuNzY2NS0yLjUyNWMxLjM0MDYsMy4zOTI4LDAuNDk3NCw1Ljg5NzcsMC4yNDE3LDYuNTE4MyAgIGMxLjU3OTMsMS43MjQ5LDIuNTM0OCwzLjkyMjEsMi41MzQ4LDYuNjExYzAsOS40NjAyLTUuNzYxOCwxMS41NDI4LTExLjI0NjUsMTIuMTUyN2MwLjg4MzQsMC43NjQ0LDEuNjcwNCwyLjI2MzIsMS42NzA0LDQuNTYxICAgYzAsMy4yOTU1LTAuMDI4Miw1Ljk0NzktMC4wMjgyLDYuNzU5MmMwLDAuNjU1NiwwLjQ0MzIsMS40MjM2LDEuNjkxNSwxLjE4MThjOS43ODEyLTMuMjYwNSwxNi44Mjk2LTEyLjQ4OTYsMTYuODI5Ni0yMy4zNjgyICAgQy0xMTEwLjAyOTksMTY3My45NDMtMTEyMS4wNTc0LDE2NjIuOTE2My0xMTM0LjY1OTgsMTY2Mi45MTYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTS0xMTQ5Ljk2MTEsMTY5OC4yNzkzYy0wLjA1NDIsMC4xMjI3LTAuMjQ2OSwwLjE1OTMtMC40MjIyLDAuMDc1M2MtMC4xNzg4LTAuMDgwNC0wLjI3ODgtMC4yNDczLTAuMjIxMS0wLjM3ICAgYzAuMDUzLTAuMTI2LDAuMjQ1Ny0wLjE2MSwwLjQyNDItMC4wNzY5Qy0xMTUwLjAwMTMsMTY5Ny45ODgyLTExNDkuODk5MywxNjk4LjE1NjYtMTE0OS45NjExLDE2OTguMjc5M0wtMTE0OS45NjExLDE2OTguMjc5M3ogICAgTS0xMTUwLjI2NDIsMTY5OC4wNTQ3Ii8+PHBhdGggZD0iTS0xMTQ4Ljk2MzQsMTY5OS4zOTIyYy0wLjExNzQsMC4xMDg2LTAuMzQ3MywwLjA1ODEtMC41MDMxLTAuMTEzOWMtMC4xNjEzLTAuMTcxOC0wLjE5MTItMC40MDE2LTAuMDcyLTAuNTExOCAgIGMwLjEyMTEtMC4xMDg4LDAuMzQzOC0wLjA1NzksMC41MDUsMC4xMTM5Qy0xMTQ4Ljg3MjEsMTY5OS4wNTQxLTExNDguODQwNywxNjk5LjI4MTktMTE0OC45NjM0LDE2OTkuMzkyMkwtMTE0OC45NjM0LDE2OTkuMzkyMnogICAgTS0xMTQ5LjE5ODQsMTY5OS4xNCIvPjxwYXRoIGQ9Ik0tMTE0Ny45OTIyLDE3MDAuODEwNWMtMC4xNTEsMC4xMDUxLTAuMzk3OSwwLjAwNjctMC41NTA1LTAuMjEyM2MtMC4xNTEtMC4yMTkxLTAuMTUxLTAuNDgxOSwwLjAwMzUtMC41ODcyICAgYzAuMTUyNi0wLjEwNTEsMC4zOTYtMC4wMTA0LDAuNTUwNSwwLjIwNjhDLTExNDcuODM4MSwxNzAwLjQ0MDYtMTE0Ny44MzgxLDE3MDAuNzAzNC0xMTQ3Ljk5MjIsMTcwMC44MTA1TC0xMTQ3Ljk5MjIsMTcwMC44MTA1eiAgICBNLTExNDcuOTkyMiwxNzAwLjgxMDUiLz48cGF0aCBkPSJNLTExNDYuNjYxOSwxNzAyLjE4MTJjLTAuMTM1MSwwLjE0ODktMC40MjI3LDAuMTA4Ni0wLjYzMjktMC4wOTQ1Yy0wLjIxNTUtMC4xOTg0LTAuMjc1My0wLjQ4MDMtMC4xNDAzLTAuNjI5MyAgIGMwLjEzNzEtMC4xNDksMC40MjYzLTAuMTA3MiwwLjYzODEsMC4wOTQ0Qy0xMTQ2LjU4MzEsMTcwMS43NTAxLTExNDYuNTE4MiwxNzAyLjAzMzctMTE0Ni42NjE5LDE3MDIuMTgxMkwtMTE0Ni42NjE5LDE3MDIuMTgxMnogICAgTS0xMTQ2LjY2MTksMTcwMi4xODEyIi8+PHBhdGggZD0iTS0xMTQ0LjgyNjUsMTcwMi45NzY5Yy0wLjA1OTcsMC4xOTI3LTAuMzM2NSwwLjI4MDQtMC42MTU0LDAuMTk4NGMtMC4yNzg4LTAuMDg0NS0wLjQ2MDgtMC4zMTAzLTAuNDA0Ny0wLjUwNTEgICBjMC4wNTc3LTAuMTk0MywwLjMzNjEtMC4yODU1LDAuNjE2OS0wLjE5NzlDLTExNDQuOTUxMiwxNzAyLjU1NjMtMTE0NC43Njg4LDE3MDIuNzgwNS0xMTQ0LjgyNjUsMTcwMi45NzY5TC0xMTQ0LjgyNjUsMTcwMi45NzY5eiAgICBNLTExNDQuODI2NSwxNzAyLjk3NjkiLz48cGF0aCBkPSJNLTExNDIuODEwNywxNzAzLjEyNDNjMC4wMDY3LDAuMjAzMS0wLjIyOTksMC4zNzE2LTAuNTIyNiwwLjM3NTJjLTAuMjk0NCwwLjAwNjctMC41MzMtMC4xNTc3LTAuNTM2MS0wLjM1NzcgICBjMC0wLjIwNTIsMC4yMzEzLTAuMzcxNywwLjUyNTgtMC4zNzY4Qy0xMTQzLjA1MDksMTcwMi43NTk0LTExNDIuODEwNywxNzAyLjkyMjctMTE0Mi44MTA3LDE3MDMuMTI0M0wtMTE0Mi44MTA3LDE3MDMuMTI0M3ogICAgTS0xMTQyLjgxMDcsMTcwMy4xMjQzIi8+PHBhdGggZD0iTS0xMTQwLjkzNTEsMTcwMi44MDUyYzAuMDM1LDAuMTk4LTAuMTY4NiwwLjQwMTUtMC40NTk0LDAuNDU1N2MtMC4yODU5LDAuMDUyNi0wLjU1MDQtMC4wNzAxLTAuNTg3LTAuMjY2NSAgIGMtMC4wMzU0LTAuMjAzMSwwLjE3MTYtMC40MDY2LDAuNDU3My0wLjQ1OTJDLTExNDEuMjMzLDE3MDIuNDg0Ni0xMTQwLjk3MjIsMTcwMi42MDM2LTExNDAuOTM1MSwxNzAyLjgwNTJMLTExNDAuOTM1MSwxNzAyLjgwNTJ6ICAgIE0tMTE0MC45MzUxLDE3MDIuODA1MiIvPjwvZz48L3N2Zz4="],
    linkedin: ["Linkedin", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyQTdBQjk7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzMsMjMzLjh2LTAuN2MtMC4xLDAuMi0wLjMsMC41LTAuNSwwLjdIMjczeiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NDcuNywyOS42SDY0LjJDNDUuOSwyOS42LDMxLDQ0LjEsMzEsNjJ2Mzg4YzAsMTcuOSwxNC45LDMyLjQsMzMuMiwzMi40aDM4My41YzE4LjQsMCwzMy4zLTE0LjUsMzMuMy0zMi40ICAgVjYyQzQ4MSw0NC4xLDQ2Ni4xLDI5LjYsNDQ3LjcsMjkuNnogTTE2Ny40LDQwOC43aC02OFYyMDQuMmg2OFY0MDguN3ogTTEzMy40LDE3Ni4ySDEzM2MtMjIuOCwwLTM3LjUtMTUuNy0zNy41LTM1LjMgICBjMC0yMC4xLDE1LjItMzUuMywzOC40LTM1LjNjMjMuMywwLDM3LjYsMTUuMywzOCwzNS4zQzE3MS45LDE2MC41LDE1Ny4xLDE3Ni4yLDEzMy40LDE3Ni4yeiBNNDEyLjUsNDA4LjdoLTY4VjI5OS4yICAgYzAtMjcuNS05LjgtNDYuMi0zNC40LTQ2LjJjLTE4LjgsMC0zMCwxMi42LTM0LjksMjQuOWMtMS44LDQuNC0yLjIsMTAuNS0yLjIsMTYuNnYxMTQuMmgtNjhjMCwwLDAuOS0xODUuMywwLTIwNC41aDY4djI4LjkgICBjOS0xMy45LDI1LjItMzMuOCw2MS4zLTMzLjhjNDQuNywwLDc4LjIsMjkuMiw3OC4yLDkyLjFWNDA4Ljd6Ii8+PC9nPjwvc3ZnPg=="],
    discord: ["Discord", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM4QzlFRkYiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjRkZGRkZGIiBpZD0ibG9nbyIvPjwvc3ZnPg=="]
}

const courses = {
    "Computer Science": [
        {heading: "CMPUT 481", details: "Parallel and Distributed Systems"},
        {heading: "CMPUT 455", details: "Search, Knowledge and Simulation"},
        {heading: "CMPUT 412", details: "Experimental Mobile Robotics"},
        {heading: "CMPUT 401", details: "Software Process and Product Management"},
        {heading: "CMPUT 391", details: "Database Management Systems"},
        {heading: "CMPUT 382", details: "Introduction to GPU Programming"},
        {heading: "CMPUT 379", details: "Operating Systems Concepts"},
        {heading: "CMPUT 366", details: "Search and Planning in Artificial Intelligence"},
        {heading: "CMPUT 355", details: "Games, Puzzles, Algorithms"},
        {heading: "CMPUT 340", details: "Introduction to Numerical Methods"},
        {heading: "CMPUT 301", details: "Introduction to Software Engineering"},
        {heading: "CMPUT 291", details: "Introduction to File and Database Management"},
        {heading: "CMPUT 275", details: "Introduction to Tangible Computing II"},
        {heading: "CMPUT 274", details: "Introduction to Tangible Computing I"},
        {heading: "CMPUT 272", details: "Formal Systems and Logic"},
        {heading: "CMPUT 229", details: "Computer Organization and Architecture I"}
    ],

    "Math": [
        {heading: "MATH 228", details: "Algebra: Introduction to Ring Theory"},
        {heading: "MATH 225", details: "Linear Algebra II"},
        {heading: "MATH 214", details: "Intermediate Calculus III"},
        {heading: "MATH 125", details: "Linear Algebra I"},
        {heading: "MATH 115", details: "Elementary Calculus II"},
        {heading: "MATH 114", details: "Elementary Calculus I"},
        {heading: "STAT 252", details: "Introduction to Applied Statistics II"},
        {heading: "STAT 151", details: "Introduction to Applied Statistics I"}
    ],
    
    "Misc. Science": [
        {heading: "EAS 209", details: "Geology of Western Canada and the National and Provincial Parks"},
        {heading: "EAS 207", details: "Mass Extinctions and Vertebrate Evolution"},
        {heading: "EAS 206", details: "Geology of the Solar System"},
        {heading: "EAS 201", details: "Earth Science I"},
        {heading: "CHEM 101", details: "Intoduction to University Chemistry I"},
        {heading: "PSYCH 104", details: "Basic Psychological Processes"}
    ],

    "Misc. Arts": [
        {heading: "ECON 282", details: "Intermediate Macroeconomic Theory I"},
        {heading: "ECON 281", details: "Intermediate Microeconomic Theory I"},
        {heading: "ECON 102", details: "Introduction to Macroeconomics"},
        {heading: "ECON 101", details: "Introduction to Microeconomics"},
        {heading: "ENGL 103", details: "Case Studies in Research"},
        {heading: "ENGL 102", details: "Introduction to Critical Analysis"},
        {heading: "HIST 191", details: "Video Games, History, and Storytelling"},
        {heading: "HIST 115", details: "Technology and History"},
        {heading: "PSYCH 105", details: "Individual and Social Behavior"},
        {heading: "SOC 100", details: "Introductory Sociology"}
    ]
}

export default function Home(props) {
    return (
        <div className="mainGrid">
            <ContentBox className="titleCard">
                <div className="left">
                    <img src={nobg} alt="Me"/>
                </div>
                <div className="right">
                    <div className="textArea">
                        <h1>Alexander Laevens</h1>
                        <h2>Junior Software Developer</h2>
                        <h5><i>Looking for work</i></h5>
                        <hr />
                    </div>
                    <div className="linkArea">
                        <MediaLink icon={mediaIcons.github} text="alaevens" link="https://github.com/alaevens"/>
                        <MediaLink icon={mediaIcons.linkedin} text="Alexander Laevens" link="https://www.linkedin.com/in/alexander-laevens-50a993238/"/>
                        <MediaLink icon={mediaIcons.discord} text="gearnotes2000#3333" link="https://discord.com/"/>
                    </div>
                </div>
            </ContentBox>
            <ContentBox>
                <h1>Skills</h1>
                <hr />
                {skills.map(skillGroup => {
                    return (
                        <AccordionDiv title={skillGroup.subject}>
                            <ul className="skillList">{skillGroup.content.map(skill => <li>{skill}</li>)}</ul>
                        </AccordionDiv>
                    );
                })}
            </ContentBox>
            <ContentBox>
                <h1>All Courses Taken</h1>
                <hr />

                {Object.keys(courses).map(subject => {
                    return <AccordionDiv title={subject} className="nopad">
                        {/* <div className="courseListing">
                            {courses[subject].map(entry => {
                                return (
                                    <>
                                        <p className="courseCode"><strong>{entry.heading}</strong></p>
                                        <p>{entry.details}</p>
                                    </>
                                );
                            })}
                        </div> */}
                        <table className="courseListing">
                            {courses[subject].map(entry => {
                                return (
                                    <tr>
                                        <td className="courseCode"><strong>{entry.heading}</strong></td>
                                        <td className="courseDescription">{entry.details}</td>
                                    </tr>
                                );
                            })}
                        </table>
                    </AccordionDiv>
                })}
            </ContentBox>
        </div>
    );
}