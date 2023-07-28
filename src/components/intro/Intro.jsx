import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from './rach.png'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rachel Tjarksen" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>something</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>something</small>
            </article>
          </div>
          <p>
            Hi there! My name is Rachel Tjarksen, and I'm a second-year Computer Science and Mathematics major at Case Western Reserve University. Currently, I'm interested in machine learning with a focus in natural language processing.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
