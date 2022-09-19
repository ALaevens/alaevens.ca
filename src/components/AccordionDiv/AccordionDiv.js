import { useState } from "react";
import "./AccordionDiv.css";

export default function AccordionDiv(props) {
    const [active, setActive] = useState(false);
    
    return (
        <div className="accordion">
            <button className={active ? "collapseButton active" : "collapseButton"} onClick={() => setActive(prev => !prev)}>
                <h5>{props.title}</h5>
                <h5 className="arrow">&#65086;</h5>
            </button>
            <div className={active ? "content active" : "content"}>
                {props.children}
            </div>
        </div>
    );
}