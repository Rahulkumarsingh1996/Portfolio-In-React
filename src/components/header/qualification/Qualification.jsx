import React, { useState } from "react";
import "./qualification.css";
import { AnimatePresence, motion } from "framer-motion";
import data from "./Data";
import FilterButtons from "./FilterButtons";
const Qualification = ({ blackAndWhite }) => {
  const [displayData, setDisplayData] = useState(data.items);
  const [active, setActive] = useState("all");
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "white", color: "black" }
    : null;
  const handleCategoryClick = (category) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(data.items);
      return;
    }

    const filteredData = data.items.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 400);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title" style={textColorStyle}>
        Qualification
      </h2>
      <span className="section__subtitle" style={textColorStyle}>
        My personel journey
      </span>

      <div className=" container">
        {/* <div className="qualification__tabs">
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
                Cylsys Software Solution Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2022 -(Present)</i>
                </div>
              </div>
             
            </div>

            <div className="qualification__data mt-3">
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
                  <i className="uil uil-calender-alt">2022 -2023</i>
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
        </div> */}

        <div className="App">
          <FilterButtons
            active={active}
            handleClick={handleCategoryClick}
            blackAndWhite={blackAndWhite}
          />

          <div className="grid grid-col-3 gap-2">
            <AnimatePresence className="card-data">
              {displayData.map(({ img, position, companyName, year }, i) => (
                <motion.div
                  style={backgroundButtonColorStyle}
                  // style={{ overflow: "hidden" }}
                  key={i}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{
                    transform: "scale(1)",
                    border: "1px solid #eaebe8",
                    borderRadius: "15px",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                  exit={{ transform: "scale(0)" }}
                >
                  <motion.img
                    src={img}
                    className="rounded"
                    alt="nothing"
                    width="100%"
                  />
                  <div className="text-content">
                    <h4>{position}</h4>
                    <p>{companyName}</p>
                    <p>{year}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
