import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdMailUnread } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__upper">
          <div className="footer__row-1">
            <h2 className="footer__row-title">
              <span>Social</span>
            </h2>
            <div className="footer__social-cont">
              <Link to={"https://github.com/Mukhlisa8717"}>
                <FaGithub size={20} />
              </Link>
              <Link to={"https://t.me/Mukhlisa_8717"}>
                <FaTelegram size={20} />
              </Link>
              <Link>
                <IoMdMailUnread size={20} />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
                }
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
          <div className="footer__row-2">
            <h2 className="footer__row-title">Mukhlisa Saidaminova</h2>
            <p className="footer__row-desc">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
        <div className="footer__lower">© Copyright 2024. Made by <Link to={"/"}>Mukhlisa Saidaminova</Link></div>
      </div>
    </footer>
  );
}

export default Footer
