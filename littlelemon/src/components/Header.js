import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../images/Bruschetta_s4x3.jpg';
const Header=() =>{
return (
    <header className='header'>
        <section>
            <div className='home-info'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
            <div className='home-info-img'>
                <img src={homeImg} alt=''/>
            </div>
        </section>

    </header>
);
};

export default Header;