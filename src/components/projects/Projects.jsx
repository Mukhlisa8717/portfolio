import React from 'react'
import "./Projects.css"
import eComm from "../../assets/e-comm.png"
import aliExpress from "../../assets/aliExpress.png"
import seedra from "../../assets/seedra.png"
import nornlight from "../../assets/nornlight.png"
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
              <img src={nornlight} alt="e-comm img" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Nornlight</h3>
              <p className="projects__row-content-desc">
                Norтlight is one of my most successful projects. It is made
                using React. Used: Redux Toolkit, SCSS, Swiper, React Router
                DOM...
              </p>
              <Link to={"https://nornlight-mukhlisa.vercel.app/"}>
                <button className="projects__row-content-btn">View</button>
              </Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img src={seedra} alt="e-comm img" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Seedra</h3>
              <p className="projects__row-content-desc">
                I created the Seedra project using React. In this project, a
                telegram bot is connected and an API is connected for GET users.
              </p>
              <Link to={"https://seedra-by-ms.vercel.app/"}>
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
