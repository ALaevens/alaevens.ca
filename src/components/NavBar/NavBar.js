import { NavLink } from "react-router-dom";
import "./NavBar.css";
import icon from "./icon.png";

export default function NavBar() {
    return (
        <nav>
            <img src={icon} alt=""/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
    );
}