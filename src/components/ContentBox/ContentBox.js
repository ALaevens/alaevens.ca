import "./ContentBox.css";

export default function ContentBox(props) {
    return (
        <div className="contentBox">
            {props.children}
        </div>
    );
}