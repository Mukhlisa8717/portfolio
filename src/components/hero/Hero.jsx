import React from 'react'
import './Hero.css'
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="container hero__cont">
        <h1>Mukhlisa Saidaminova</h1>
        <p>
          I'm a Result-Oriented Web Developer building and managing Websites
          that leads to the success of the overall product
        </p>
        <Link to="#projects" smooth>
        <button>PROJECTS</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero
