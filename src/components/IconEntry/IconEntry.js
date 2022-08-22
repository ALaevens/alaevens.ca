import "./IconEntry.css";

export default function IconEntry (props) {
    return (
        <div className="innerContent grid">
            <div className="col">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="col">
                {props.children}
            </div>
        </div>
    );
}