import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavIcon from "./NavIcon/NavIcon";
import "./NavBar.css";

// https://stackoverflow.com/a/36862446/17834235
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function NavBar() {
    const location = useLocation()
    let { width } = useWindowDimensions();
    
    let path = location.pathname;
    if (path.length === 1) {
        path = "~";
    }
    
    return (
        <nav>
            {/* <img src={icon} alt=""/> */}
            {/* <h5>alex@web:~$</h5> */}
            <NavIcon path={path}/>
            {(path !== "~" || width <= 600) && <NavLink to="/">Home</NavLink>}
            {(path !== "/resume" || width <= 600) && <NavLink to="/resume">Resume</NavLink>}
            {(path !== "/portfolio" || width <= 600) && <NavLink to="/portfolio">Portfolio</NavLink>}
        </nav>
    );
}