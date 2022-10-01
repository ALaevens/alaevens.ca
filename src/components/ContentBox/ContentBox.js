import "./ContentBox.css";

export default function ContentBox(props) {
    var classes = ["contentBox"];
    if (props.className) {
        classes.push(props.className);
    }
    
    return (
        <div className={classes.join(" ")}>
            {props.children}
        </div>
    );
}