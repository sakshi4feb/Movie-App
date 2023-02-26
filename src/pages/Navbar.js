import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>Movies Portal</h1>
            <nav>
                <ul className="nav-lists">
                    <li className="nav-list">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/About" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/Contact" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
