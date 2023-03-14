import React from 'react';
import './footer.css'

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Rahul</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
                <a href="#qualification" className="footer__link">Qualification</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/" className='home__social-icon' target="_blank">
        <i class="fa-brands fa-square-instagram link"></i>
        </a>

        <a href="https://www.facebook.com/" className='home__social-icon' target="_blank">
        <i class="fa-brands fa-facebook link"></i>
        </a>

        <a href="https://web.whatsapp.com/" className='home__social-icon' target="_blank">
        <i class="fa-brands fa-square-whatsapp link"></i>
        </a>
        </div>

        <span className="footer__copy">
            &#169; Rahulcoder__copyright . All 
            right reserved ---2023
        </span>
    </div>
   </footer>
  )
}

export default Footer