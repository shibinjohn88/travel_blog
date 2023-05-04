import React from 'react'
import './footer.css'
import {ImGithub} from 'react-icons/im'

const Footer = () => {
  return (
    <div className='footer_container'>
        
        <div className="footer__github">
        <a className='hansel_link' href="https://github.com/hq-coder"><ImGithub/><hr /> hansel</a>
        <a className='shibin_link' href="https://github.com/shibinjohn88"><ImGithub/><hr /> shibin</a>
        <a className='yugma_link' href="https://github.com/yugma26"><ImGithub/><hr /> yugma</a>
        
      </div>
      <h6>&copy; hq-coder.shibinjohn88.yugma All rights reserved.</h6>
   
    </div>
  )
}

export default Footer