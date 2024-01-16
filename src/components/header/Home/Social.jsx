import React from "react";
import './home.css'
const Social = ({blackAndWhite}) => {
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  return (
    <div className="home__social">
      <a href="" className="home__social-icon" target="_blank">
        <i class="uil uil-github" style={textColorStyle}></i>
      </a>

      <a
        href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.127961666300_crid.601257986827_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.20455"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt" style={textColorStyle}></i>
      </a>

      <a
        href="https://web.whatsapp.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-whatsapp" style={textColorStyle}></i>
      </a>
      
    </div>
  );
};

export default Social;
