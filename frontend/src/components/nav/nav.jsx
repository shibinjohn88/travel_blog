import React from 'react';
import './nav.css';
import logo from '../../images/logo.png';




function Navbar () {
    return (
      
        <div className='navbar'>
            <img  src={logo} alt="Logo" className="logo"/>

      <h3><a href='./home' >Home</a></h3>
      <h3><a href='./destination'>Destinations</a></h3>
      <h3><a href='./createblog'>Blog</a></h3>
      <h3><a href='./about'>About</a></h3>
      <h3><a href='./login'>Log In</a></h3>
        </div>
    )
}

export default Navbar;
