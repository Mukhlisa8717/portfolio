import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/avatar.webp";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="#home" smooth>
            <img src={Logo} alt="Logo" className="navbar__logo" />
          </Link>
          <div className="navbar__menu">
            <Link to="#home" smooth>
              Home
            </Link>
            <Link to="#about" smooth>
              About
            </Link>
            <Link to="#projects" smooth>
              Projects
            </Link>
            <Link to="#contact" smooth>
              Contact
            </Link>
            <a
              href="https://www.canva.com/design/DAGGKSYhmvw/dC5blRupHsEgQ1GhqN2UYg/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="navbar__btn">My Resume</button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
