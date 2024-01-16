import React from "react";

const ScrollDown = ({ theamLight }) => {
  const textColorStyle = theamLight ? { color: "white" } : null;
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <i class="uil uil-mouse-alt"></i>
        <span className="home__scroll-name" style={textColorStyle}>
          Scroll Down
        </span>
        <i class="uil uil-arrow-down home__scroll-arrow" style={textColorStyle}></i>
      </a>
    </div>
  );
};

export default ScrollDown;
