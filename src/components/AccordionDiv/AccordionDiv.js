import { useState } from "react";
import "./AccordionDiv.css";

export default function AccordionDiv(props) {
    const [active, setActive] = useState(false);

    console.log(active);
    
    return (
        <div>
            <button className={active ? "collapseButton active" : "collapseButton"} onClick={() => setActive(prev => !prev)}>
                <h4>{props.title}</h4>
                <h4 className="arrow">&#65088;</h4>
            </button>
            <div className={active ? "content active" : "content"}>
                {props.children}
            </div>
        </div>
    );
}