import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="logo">
                <h1>MOVIE LIST</h1>
            </div>
            <ul className='navbar_menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/footer'>Footer</a></li>


            </ul>
        </div>
    );
};

export default Navbar;
