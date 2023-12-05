import React from 'react';
import '../about/about.css'; 
import AboutImg from "../../../assets/rahul.svg";
import CV from "../../../assets/rahul.pdf";
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">Fronted developer,
                I create web magnificent pages and App magnificent Screens with UI / UX user ,
                Interface , I have one  year of experience and three projects are completed to happy with the  carried out.</p><br/>

                <a download="" href={CV} className="button button--flex">Download CV
                <i class="uil uil-file-info-alt "></i></a>
            </div>
        </div>
    </section>
  )
}

export default About