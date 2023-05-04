import React, { useContext } from 'react';
import './nav.css';
import logo from '../../images/logo.png';
import { CurrentUser } from '../../contexts/CurrentUser';



function Navbar () {
    
    const { currentUser } = useContext(CurrentUser)
    let signedUser = (
        <h3>Login</h3>
    )
    let logOut = null
    let blogList = null
    if (currentUser) {
        signedUser = (
            <h3>{currentUser.username}</h3>
        )
        logOut = (
            <button onClick={() => {
                localStorage.removeItem('token')
                window.location.reload(false)
                }}>Log out</button>
        )
        blogList = (<h3><a href='/bloglist'>Blog</a></h3>)
    }
    return (
      
        <div className='navbar'>
            <img  src={logo} alt="Logo" className="logo"/>

      <h3><a href='/' >Home</a></h3>
      <h3><a href='/destination'>Destinations</a></h3>
      {blogList}
      <h3><a href='/about'>About</a></h3>
      <h3><a href='/login'>{signedUser}</a></h3>
      <h3>{logOut}</h3>
      
        </div>
    )
}

export default Navbar;
