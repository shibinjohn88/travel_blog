import React from 'react'
import './footer.css'
import {ImGithub} from 'react-icons/im'

const Footer = () => {
  return (
    <div className='footer_container'>
        
  <div className='footer_list'>
      <h3 className='footer_h3'><a href='./home' >Home</a></h3>
      <h3 className='footer_h3'><a href='./about'>Destinations</a></h3>
      <h3 className='footer_h3'><a href='./blog' >Blog</a></h3>
      </div>
 

      <div className="footer__github">
        <a href="https://github.com/hq-coder"><ImGithub/></a>
        <a href="https://github.com/shibinjohn88"><ImGithub/></a>
        <a href="https://github.com/hq-coder"><ImGithub/></a>
      </div>
      
    </div>
  )
}

export default Footer