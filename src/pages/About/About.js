import "./About.css";
import { datesArrToString } from "../../util/StringFormats";
import {work, education, skills} from "./content.js";
import AccordionDiv from "../../components/AccordionDiv/AccordionDiv";
import IconEntry from "../../components/IconEntry/IconEntry";
import ContentBox from "../../components/ContentBox/ContentBox";
import MediaLink from "../../components/MediaLink/MediaLink";

function DatedEntry(props) {
    const {title, location, dates, description, list, hiddenList} = props.data;

    return (
        <div>
            <h4 className="moveOver"><strong>{title}, </strong></h4>
            <h4 className="moveOver">{location}</h4>
            <p className="date">{datesArrToString(dates)}</p>
            {description && <p>{description}</p>}
            {list && <ul>{list.map(duty => <li>{duty}</li>)}</ul>}
            {hiddenList && <AccordionDiv title={hiddenList.title}>
            <ul>
                {hiddenList.content.map(entry => <li><strong>{entry.heading}: </strong>{entry.details}</li>)}
            </ul>
            </AccordionDiv>}
        </div>
    );
}

const mediaIcons = {
    gmail: ["GMail", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmYTVjNjY7fS5jbHMtMntmaWxsOiNmMWYyZjI7fS5jbHMtM3tmaWxsOiNlOTNkNWI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGcgZGF0YS1uYW1lPSIyMS1HbWFpbCIgaWQ9Il8yMS1HbWFpbCI+PGcgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7IiBpZD0iX0dyb3VwXyI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNiwzN3YzSDRhMywzLDAsMCwxLTMtM1YxMUEzLDMsMCwwLDEsNCw4SDdMMjQsMjMsNDEsOGgzYTMsMywwLDAsMSwzLDNWMzdhMywzLDAsMCwxLTMsM0g0MlYxM0wyNCwyOSw2LDEzWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0MiAzNiA0MiA0MCA2IDQwIDYgMzkuOTcgNiAzNyA2IDEzIDI0IDI5IDQyIDEzIDQyIDM2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjQxIDggMjQgMjMgNyA4IDQxIDgiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00MiwzN2ExLDEsMCwwLDEtMS0xVjE1LjIyN0wyNC42NjUsMjkuNzQ3YTEsMSwwLDAsMS0xLjMzLDBMNywxNS4yMjdWMzZhMSwxLDAsMCwxLTIsMFYxM2ExLDEsMCwwLDEsMS42NjUtLjc0OEwyNCwyNy42NjJsMTcuMzM1LTE1LjQxQTEsMSwwLDAsMSw0MywxM1YzNkExLDEsMCwwLDEsNDIsMzdaIi8+PC9nPjwvZz48L3N2Zz4="],
    linkedin: ["Linkedin", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyQTdBQjk7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzMsMjMzLjh2LTAuN2MtMC4xLDAuMi0wLjMsMC41LTAuNSwwLjdIMjczeiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NDcuNywyOS42SDY0LjJDNDUuOSwyOS42LDMxLDQ0LjEsMzEsNjJ2Mzg4YzAsMTcuOSwxNC45LDMyLjQsMzMuMiwzMi40aDM4My41YzE4LjQsMCwzMy4zLTE0LjUsMzMuMy0zMi40ICAgVjYyQzQ4MSw0NC4xLDQ2Ni4xLDI5LjYsNDQ3LjcsMjkuNnogTTE2Ny40LDQwOC43aC02OFYyMDQuMmg2OFY0MDguN3ogTTEzMy40LDE3Ni4ySDEzM2MtMjIuOCwwLTM3LjUtMTUuNy0zNy41LTM1LjMgICBjMC0yMC4xLDE1LjItMzUuMywzOC40LTM1LjNjMjMuMywwLDM3LjYsMTUuMywzOCwzNS4zQzE3MS45LDE2MC41LDE1Ny4xLDE3Ni4yLDEzMy40LDE3Ni4yeiBNNDEyLjUsNDA4LjdoLTY4VjI5OS4yICAgYzAtMjcuNS05LjgtNDYuMi0zNC40LTQ2LjJjLTE4LjgsMC0zMCwxMi42LTM0LjksMjQuOWMtMS44LDQuNC0yLjIsMTAuNS0yLjIsMTYuNnYxMTQuMmgtNjhjMCwwLDAuOS0xODUuMywwLTIwNC41aDY4djI4LjkgICBjOS0xMy45LDI1LjItMzMuOCw2MS4zLTMzLjhjNDQuNywwLDc4LjIsMjkuMiw3OC4yLDkyLjFWNDA4Ljd6Ii8+PC9nPjwvc3ZnPg=="],
}

export default function About() {
    return (
        <div>
            <ContentBox>
                <h1>Contact</h1>
                <hr />
                <p>
                    Contact information is limited due to being a public site. Initiate contact by email to connect on another platform not listed here.
                </p>
                <MediaLink icon={mediaIcons.gmail} text="alaevens@ualberta.ca" link="mailto:alaevens@ualberta.ca"/>
                <MediaLink icon={mediaIcons.linkedin} text="Alexander Laevens" link="https://www.linkedin.com/in/alexander-laevens-50a993238/"/>
            </ContentBox>

            <ContentBox>
                <h1>Education</h1>
                <hr />
                {education.map(school => {
                    return (
                        <IconEntry image={school.image} alt={school.title}>
                            <DatedEntry data={school}/>
                        </IconEntry>
                    );
                })}
            </ContentBox>
            
            <ContentBox>
                <h1>Work Experience</h1>
                <hr />
                {work.map(job => {
                    return (
                        <IconEntry image={job.image} alt={job.title}>
                            <DatedEntry data={job} />
                        </IconEntry>
                    );
                })}
            </ContentBox>

            <ContentBox>
                <h1>Technical Skills</h1>
                <hr />
                {skills.map(skillGroup => {
                    return (
                        <AccordionDiv title={skillGroup.subject}>
                            <ul className="skillList">{skillGroup.content.map(skill => <li>{skill}</li>)}</ul>
                        </AccordionDiv>
                    );
                })}
            </ContentBox>
        </div>
    );
}
