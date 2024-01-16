import React from "react";
import "./scroll.css";

const Scrollup = ({blackAndWhite}) => {
  const backgroundButtonColorStyle = blackAndWhite
  ? { backgroundColor: "white", color: "black" }
  : null;
  const textColorStyle = blackAndWhite ? { color: "black" } : null;
  window.addEventListener("scroll", function () {
    const scrollup = this.document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <a href="" className="scrollup" style={backgroundButtonColorStyle}>
      <i className="uil uil-arrow-up scrollup__icon" style={textColorStyle}></i>
    </a>
  );
};

export default Scrollup;
