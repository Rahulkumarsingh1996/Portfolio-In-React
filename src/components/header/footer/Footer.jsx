import React from 'react';
import './footer.css'

const Footer = ({blackAndWhite}) => {
    const textColorStyle = blackAndWhite ? { color: "white" } : null;
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title" style={textColorStyle}>Rahul</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link" style={textColorStyle}>About</a>
            </li>

            <li>
                <a href="#skills" className="footer__link" style={textColorStyle}>Skills</a>
            </li>

            <li>
                <a href="#qualification" className="footer__link" style={textColorStyle}>Qualification</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/" className='home__social-icon' target="_blank">
        <i class="fa-brands fa-instagram" style={textColorStyle}></i>
        </a>

        <a href="https://www.facebook.com/" className='home__social-icon' target="_blank" >
        <i class="fa-brands fa-facebook-f" style={textColorStyle}></i>
        </a>

        <a href="https://web.whatsapp.com/" className='home__social-icon' target="_blank" >
        <i class="uil uil-whatsapp" style={textColorStyle}></i>
        </a>
        </div>

        <span className="footer__copy" style={textColorStyle}>
            &#169; Rahulcoder__copyright . All 
            right reserved ---2023
        </span>
    </div>
   </footer>
  )
}

export default Footer