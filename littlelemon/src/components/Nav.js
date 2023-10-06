import React from 'react';
import logo1 from '../images/logo1.png'
const Nav =() => {

return(
    <nav>
        <img src={logo1} alt="Little lemonlogo"></img>

        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>


    </nav>
);
};
export default Nav;