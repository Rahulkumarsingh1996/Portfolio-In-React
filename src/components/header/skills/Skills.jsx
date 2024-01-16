import React from "react";
import "./skill.css";
import Fronted from "./Fronted";
import Backend from "./Backend";
import AboutImg from "../../../assets/rahul.svg";
import Html from "../../../assets/html.png";
import Css from "../../../assets/css.png";
import js from "../../../assets/JavaScript.png";
import react from "../../../assets/React.png";
import Node from "../../../assets/nodeJs.png";
import MySql from "../../../assets/mySql.png";
const Skills = ({blackAndWhite}) => {
  const textColorStyle = blackAndWhite ? { color: 'white' } : null;
  const backgroundButtonColorStyle = blackAndWhite ? { backgroundColor: 'white', color: 'black' } : null;
  const textCardColorStyle = blackAndWhite ? { color: 'black' } : null;
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" style={textColorStyle}>Skill</h2>
      <span className="section__subtitle" style={textColorStyle}>My technical level</span>

      <div className="skills__container container grid">
        {/* <Fronted />

        <Backend /> */}
        <div className="skill_main_card">
          <section>
            <div class="container_card">
              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={Html} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>Html</a>
                  </li>
                </ul>
              </div>
              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={Css} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>Css</a>
                  </li>
                </ul>
              </div>

              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={js} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>JavaScript</a>
                  </li>
                </ul>
              </div>

              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={react} className="react" />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>React</a>
                  </li>
                </ul>
              </div>

              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={react} className="react" />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>React-Native</a>
                  </li>
                </ul>
              </div>

              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={Node} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>Node js</a>
                  </li>
                </ul>
              </div>

              <div class="card" style={backgroundButtonColorStyle}>
                <div class="content">
                  <div class="imgBx">
                    <img src={MySql} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="" style={textCardColorStyle}>My Sql</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
