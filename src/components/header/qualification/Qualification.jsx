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
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex" style={textColorStyle}>
            <i className="uil uil-graduation-cap qualification__icon" style={textColorStyle}></i>
            Education
          </div>

          <div className="qualification__button qualification__active button--flex" style={textColorStyle}>
            <i className="uil uil-briefcase-alt qualification__icon" style={textColorStyle}></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title" style={textColorStyle}>Graduation</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Narula Institute of techlology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2019 - 2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                  <span className="qualification__line" style={backgroundButtonColorStyle}></span>
                </div>
              </div>

              <div>
                <h3 className="qualification__title" style={textColorStyle}>Software Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Cylsys Software Solution Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2023 -(Present)</i>
                </div>
              </div>
            </div>

            

            <div className="qualification__data mt-3">
              <div></div>

              {/* <div> */}
                <div>
                  <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                  <span className="qualification__line" style={backgroundButtonColorStyle}></span>
                </div>
              {/* </div> */}

              <div>
                <h3 className="qualification__title" style={textColorStyle}>Frontend Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Qwegle Technologies Private Limited
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2022 -2023</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* diploma section--- */}
        <div className="qualification__section">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title" style={textColorStyle}>Diploma</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Shaheed Bhagat Singh State University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2017 - 2019</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                  <span className="qualification__line" style={backgroundButtonColorStyle}></span>
                </div>
              </div>

              <div>
                <h3 className="qualification__title" style={textColorStyle}>Web Development </h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Euphoria GenX - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2021 - 2021</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title" style={textColorStyle}>10+2</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  High School, Jalalpur Bazar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2014 - 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                  <span className="qualification__line" style={backgroundButtonColorStyle}></span>
                </div>
              </div>
              <div>
                <h3 className="qualification__title" style={textColorStyle}>Python</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Tech Learning Solutions Pvt Ltd - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2022 - 2022</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title" style={textColorStyle}>10th</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Adarsh Janta High School Naini (Saran)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2013 - 2014</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <div>
                  <span className="qualification__rounder" style={backgroundButtonColorStyle}></span>
                  <span className="qualification__line" style={backgroundButtonColorStyle}></span>
                </div>
              </div>
              <div>
                <h3 className="qualification__title" style={textColorStyle}>Web Development</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Udmy - (traning)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt" style={textColorStyle}>2021 - 2021</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="App ">
          <FilterButtons
            active={active}
            handleClick={handleCategoryClick}
            blackAndWhite={blackAndWhite}
          />

          <div className="grid grid-col-3 gap-2" id="qualification_cards">
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
        </div> */}
      </div>
    </section>
  );
};

export default Qualification;
