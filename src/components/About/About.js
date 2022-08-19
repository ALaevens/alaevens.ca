import "./About.css";
import { datesArrToString } from "../../util/StringFormats";
import {work, education} from "./content.js";
import AccordionDiv from "../AccordionDiv/AccordionDiv";

function IconExperience(props) {
    const {title, location, dates, description, image, list, hiddenDetails} = props.data;

    console.log("DESC TYPE");
    console.log(typeof description);

    return (
        <div className="innerContent grid">
            <div className="col">
                <img src={image} alt={title}/>
            </div>
            <div className="col">
                <h3 className="moveOver"><strong>{title}, </strong></h3>
                <h3 className="moveOver">{location}</h3>
                <p className="date">{datesArrToString(dates)}</p>
                {description && <p>{description}</p>}
                {list && <ul>{list.map(duty => <li>{duty}</li>)}</ul>}
                {hiddenDetails && <AccordionDiv title={hiddenDetails.title} className="accordion">
                <ul>
                    {hiddenDetails.content.map(entry => <li><strong>{entry.heading}: </strong>{entry.details}</li>)}
                </ul>
                </AccordionDiv>}
            </div>
        </div>
    );
}

// function CollapseableDrawer(props) {
//     const {open, setOpen} = useState();
//     const {title, content} = props.data;

//     return (
//         <div>
//             <button>
//                 <h4>{title}</h4>
//                 <h1>︿</h1>
//             </button>
            
//             <div className={open ? "collapseContainer open" : "collapseContainer"}>
//                 
//             </div>
//         </div>
//     );
// }

export default function About() {
    return (
        <div>
            <div className="contentBox">
                <h1>Education</h1>
                <hr />
                {education.map(school => (<IconExperience data={school}/>))}
            </div>
            <div className="contentBox">
                <h1>Work Experience</h1>
                <hr />
                {work.map(job => (<IconExperience data={job}/>))}
            </div>
        </div>
    );
}
