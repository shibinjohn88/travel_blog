import React from 'react'
import './footer.css'
import {ImGithub} from 'react-icons/im'

const Footer = () => {
  return (
    <div className='footer_container'>
        
        <div className="footer__github">
        <a href="https://github.com/hq-coder"><ImGithub/></a>
        <a href="https://github.com/shibinjohn88"><ImGithub/></a>
        <a href="https://github.com/shibinjohn88"><ImGithub/></a>
        
      </div>
      <h6>&copy; hq-coder.shibinjohn88.yugma All rights reserved.</h6>
   
    </div>
  )
}

export default Footer