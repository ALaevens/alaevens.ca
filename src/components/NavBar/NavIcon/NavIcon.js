import "./NavIcon.css";

export default function NavIcon(props) {
    return (
        <div className="navIcon">
            <h5 style={{color: "#19D412"}}>alex@web</h5>
            <h5 style={{color: "#FFFFFF"}}>:</h5>
            <h5 style={{color: "#91D3FF"}}>{props.path}</h5>
        </div>
    );
}