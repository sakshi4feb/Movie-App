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
                        <NavLink
                            to="https://www.disneylandparis.com/en-int/?ecid=SEM_ild23_A_56d861e3-4fad-4610-98ad-8c169f281405&country=se&customid=166185932_1Cj0KCQiAo-yfBhD_ARIsANr56g5_i6Y0gca1ci1jnndgqIiaDsmwVQNNJHcPkO_qALLss0lAmaxaFbMaAlPgEALw_wcB"
                            target={'_blank'}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'add-movie'}>Add</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
