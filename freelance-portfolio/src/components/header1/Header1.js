import "./style.css"

import { NavLink } from "react-router-dom";

const Header1 = () => {
    return ( 
        <header className="header1">
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
 
export default Header1;