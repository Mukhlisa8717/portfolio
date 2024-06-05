import React from "react";
import "./About.css";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">
          <span className="about__title-main">About Me</span>
          <span className="about__title-sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Frontend Focused Web Developer</strong> building
                and managing the Front-end of Websites that leads to the success
                of the overall product. Check out some of my work in the{" "}
                <strong>Projects</strong> section
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact</strong> me
              </p>
            </div>
            <Link to="#contact" smooth>
              <button className="about__contact-btn">Contact</button>
            </Link>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React JS</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">GitHub</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">Next JS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
