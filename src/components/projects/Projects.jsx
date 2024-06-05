import React from 'react'
import "./Projects.css"
import eComm from "../../assets/e-comm.png"
import aliExpress from "../../assets/aliExpress.png"
import finsweet from "../../assets/finsweet.png"
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">
          <span className="projects__title-main">Projects</span>
          <span className="projects__title-sub">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
        </h2>
        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src={eComm} alt="e-comm img" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">E-Comm</h3>
              <p className="projects__row-content-desc">
                E-Comm is a successful project I created, well designed and
                responsive, using API, React, React-Router-Dom, RTK, SCSS,
                Redux-toolkit.
              </p>
              <Link to={"https://e-comm-tawny.vercel.app/"}>
                <button className="projects__row-content-btn">View</button>
              </Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src={aliExpress} alt="e-comm img" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">AliExpress</h3>
              <p className="projects__row-content-desc">
                AliExpress is a successful project that I created, well designed
                and using charts, API, React, React-Router-Dom, Redux, CSS.
              </p>
              <Link to={"https://aliexpress-redux.vercel.app/"}>
                <button className="projects__row-content-btn">View</button>
              </Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src={finsweet} alt="e-comm img" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Finsweet</h3>
              <p className="projects__row-content-desc">
                AliExpress is a simple project I created using API, React,
                React-Router-Dom, CSS.
              </p>
              <Link to={"https://finsweet.vercel.app/"}>
                <button className="projects__row-content-btn">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
