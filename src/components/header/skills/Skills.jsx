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
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skill</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {/* <Fronted />

        <Backend /> */}
        <div className="skill_main_card">
          <section>
            <div class="container_card">
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={Html} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">Html</a>
                  </li>
                </ul>
              </div>
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={Css} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">Css</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={js} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">JavaScript</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={react} className="react" />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">React</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={react} className="react" />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">React-Native</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={Node} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">Node js</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={MySql} />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">My Sql</a>
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
