import "./About.css";
import { datesArrToString } from "../../util/StringFormats";
import {work, education, skills} from "./content.js";
import AccordionDiv from "../../components/AccordionDiv/AccordionDiv";
import IconEntry from "../../components/IconEntry/IconEntry";

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

export default function About() {
    return (
        <div>
            <div className="contentBox">
                <h1>Education</h1>
                <hr />
                {education.map(school => {
                    return (
                        <IconEntry image={school.image} alt={school.title}>
                            <DatedEntry data={school}/>
                        </IconEntry>
                    );
                })}
            </div>
            
            <div className="contentBox">
                <h1>Work Experience</h1>
                <hr />
                {work.map(job => {
                    return (
                        <IconEntry image={job.image} alt={job.title}>
                            <DatedEntry data={job} />
                        </IconEntry>
                    );
                })}
            </div>

            <div className="contentBox">
                <h1>Technical Skills</h1>
                <hr />
                {skills.map(skillGroup => {
                    return (
                        <AccordionDiv title={skillGroup.subject}>
                            <ul className="skillList">{skillGroup.content.map(skill => <li>{skill}</li>)}</ul>
                        </AccordionDiv>
                    );
                })}
            </div>
        </div>
    );
}
