import React from 'react';
import './nav.css';
import { SiHomebridge } from 'react-icons/si';
import { SiMicrodotblog } from 'react-icons/si';
import { MdContacts } from 'react-icons/md';
import { GrLogin } from 'react-icons/gr';




function Navbar () {
    return (
      
        <div className='navbar'>
            
                    
            <h3 ><SiHomebridge /> <br /> <a href='./home' >Home</a></h3>
        

            <h3><SiMicrodotblog /> <br /> <a href='./blog' >Blog</a></h3>
            <h3><MdContacts /> <br /> <a href='./about' >About</a></h3>
 
            <h3 ><GrLogin /> <br /> <a href='./login' >Log In </a></h3>
        
            
            
        </div>
    )
}

export default Navbar;
