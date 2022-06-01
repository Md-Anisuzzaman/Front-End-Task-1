import React from 'react'
import './Footer.css'
import logo from '../Header/logo.png'

const Footer = () => {
  return (
    <div className='footer__body'>
      <div className="footer__content">
        <div className="div__one">
          <p style={{ color: ' #644F9C' }}>We are social</p>
          <p>FOLLOW US</p>
          <p>  <i className="fab fa-instagram me-2 f-size text-danger"></i> <i className="fab fa-facebook-square me-2 text-primary"></i> <i className="fab fa-youtube me-2 text-danger"></i></p>
          <img className='logo' src={logo} alt="" />
        </div>

        <div className="div__two">
          <p style={{ color: ' #644F9C' }}>Links</p>
          <p style={{ fontWeight: 'bold' }}>ADVERTISERS</p>
          <p style={{ fontWeight: 'bold' }}>INFLUECNERS</p>
          <p style={{ fontWeight: 'bold' }}>Influencers</p>
          <p style={{ fontWeight: 'bold' }}>AD FORMATS</p>
        </div>

        <div className="div__three">
          <p style={{ color: ' #644F9C' }}>Documentation</p>
          <p style={{ fontWeight: 'bold' }}>TERMS & CONDITION</p>
          <p style={{ fontWeight: 'bold' }}>PRIVACY POLICY</p>
          <p style={{ fontWeight: 'bold' }}>CANCELLATION POLICY</p>
          <p style={{ fontWeight: 'bold' }}>BLOG</p>
        </div>

        <div className="div__three">
          <p style={{ color: ' #644F9C' }}>Support</p>
          <p>FAQ</p>
          <p>MEDIA KIT</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  )
}

export default Footer