import React from 'react'
import "./Footer.css"
import footer_logo from "../Assest/logo_big.png"
import instagram_icon from "../Assest/instagram_icon.png"
import pintester_icon from "../Assest/pintester_icon.png"
import whatsapp_icon from "../Assest/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>FASHION <span style={{color:'brown'}}>HUB</span></p>
         </div>
         <ul className="footer-link">
            <li>Company</li>
            <li>Offices</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
               <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
               </div>
               <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
               </div>
               <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
               </div>
         </div>
         <div className="footer-copyright">
            <hr/>
            <p>CopyRight @ 2024 All Right Reserve.</p>
         </div>
    </div>
  )
}

export default Footer
