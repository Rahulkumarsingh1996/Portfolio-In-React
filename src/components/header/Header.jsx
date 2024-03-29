import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
const Header = ({ onButtonClick, blackAndWhite }) => {
  /* ---------------- change background color -------------------- */
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "black" }
    : null;
  const headerClassName = `header`;
  return (
    <header id="header" className={headerClassName}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Rahul
        </a>

        <div
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
          style={backgroundButtonColorStyle}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"> </i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

            <div className="toggle-color-button" onClick={onButtonClick}>
              {blackAndWhite ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </div>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
            style={textColorStyle}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
          style={textColorStyle}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
