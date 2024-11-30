
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


const AboutLeftCard = () => {
  return (
    <>
     <div className="about_left">
          <div className="user_img about_1">
            <img src="../../../user1.webp" alt="User" />
          </div>
          <div className="intro">
            <h1 className="about_1">Hi!</h1>
            <h3 className="about_1">
              I’m <br />
              <span>Parminder Singh</span>
            </h3>
            <p className="about_1">FrontEnd Developer</p>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/parminder-singh-012689127/"
              target="_blank"
              rel="noreferrer"
              className="about_2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="about_2"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/Parminder-singh-97"
              target="_blank"
              rel="noreferrer"
              className="about_2"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      
    </>
  )
}

export default AboutLeftCard
