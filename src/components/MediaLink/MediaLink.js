import "./MediaLink.css"

export default function MediaLink(props) {
    return (
        <button className="mediaLink" onClick={() => window.open(props.link, "_blank")}>
            <img src={props.icon[1]} alt={props.icon[0]}/>
            <p>{props.text}</p>
        </button>
    )
}