import "./style.css"

import { NavLink } from "react-router-dom";

function Navbar () {
    return(
    <header className="header">
    <nav>
        <NavLink to="/" className="header">
            Home
        </NavLink>
        <NavLink to="/project" className="header">
            Project
        </NavLink>
        <NavLink to="/about" className="header">
            About
        </NavLink>
    </nav>
    </header>
);
}


export default Navbar;