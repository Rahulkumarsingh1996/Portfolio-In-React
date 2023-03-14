import React from "react";
import "./qualification.css";

const Qualification = () => {
  
  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button qualification__active button--flex"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className="qualification__button qualification__active button--flex"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className="qualification__content qualification__content-active"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graduation</h3>
                <span className="qualification__subtitle">
                  Narula Institute of techlology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2019 - 2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                Qwegle Technologies Private Limited
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2022 -2023 (present)</i>
                </div>
              </div>
             
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma</h3>
                <span className="qualification__subtitle">
                Shaheed Bhagat Singh State University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2017 - 2019</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
               <div>
                <h3 className="qualification__title">Web Development </h3>
                <span className="qualification__subtitle">
                Euphoria GenX - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021 - 2021</i>
                </div>
              </div> 
            </div>
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10+2</h3>
                <span className="qualification__subtitle">
                High School, Jalalpur Bazar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2014 - 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div>
                <h3 className="qualification__title">Python</h3>
                <span className="qualification__subtitle">
                  Tech Learning Solutions Pvt Ltd  - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2022 - 2022</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th</h3>
                <span className="qualification__subtitle">
                Adarsh Janta High School Naini (Saran)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2013 - 2014</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Udmy - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021 - 2021</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
