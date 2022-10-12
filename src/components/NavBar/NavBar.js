import { NavLink } from "react-router-dom";
import "./NavBar.css";
import icon from "./icon.png";

export default function NavBar() {
    return (
        <nav>
            {/* <img src={icon} alt=""/> */}
            <h5>alex@web:~$</h5>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-me">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
    );
}