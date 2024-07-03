import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "/Image.jpg";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
          <div className="navbar__bar" onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose size={30} color="#7d3923" />
            ) : (
              <FaBars size={26} color="#7d3923" />
            )}
          </div>
        </nav>
        {isOpen ? (
          <div className="navbar__bar-menu">
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
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Navbar;
