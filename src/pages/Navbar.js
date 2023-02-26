import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>
              Movies Portal
            </h1>
            <nav>
                <ul className="nav-lists">
                    <li className="nav-list">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/addnewmovie" className="nav-link">Add</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;