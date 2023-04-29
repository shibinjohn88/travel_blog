import React, { useContext } from 'react';
import './nav.css';
import logo from '../../images/logo.png';
import { CurrentUser } from '../../contexts/CurrentUser';



function Navbar () {
    
    const { currentUser } = useContext(CurrentUser)
    let signedUser = (
        <h3>No login</h3>
    )
    if (currentUser) {
        signedUser = (
            <h3>{currentUser.username}</h3>
        )
    }
    return (
      
        <div className='navbar'>
            <img  src={logo} alt="Logo" className="logo"/>

      <h3><a href='/' >Home</a></h3>
      <h3><a href='./destination'>Destinations</a></h3>
      <h3><a href='./createblog'>Blog</a></h3>
      <h3><a href='./about'>About</a></h3>
      <h3><a href='./login'>Log In</a></h3>
      {signedUser}
        </div>
    )
}

export default Navbar;
