/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>
                <marquee>Movies Portal</marquee>
            </h1>
            <nav>
                <ul className="nav-lists">
                    <li className="nav-list">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
