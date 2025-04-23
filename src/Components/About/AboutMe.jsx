import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faObjectUngroup,
  faMagnifyingGlass,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import CustomSlider from "../CustomSlider";
import SkillSlider from "./SkillSlider";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale:0.90, y: -50 }}
    animate={{ opacity: 1,scale:1, y: 0 }}
    transition={{ duration: 1.5 }}>
      <div className="about_me" id="about_me"
     >
        <h1 className="aboutMe_1 text-orange-800 uppercase text-3xl font-extrabold">
          About me
        </h1>
      </div>

      <div className="paragraph">
        <p className="aboutMe_1">
          Hi there! I'm a multi-talented individual with a passion for front-end
          development and graphic design. Front-end Developer with expertise in
          HTML, CSS, JavaScript, React, and responsive design...
        </p>
      </div>
      <div className="btn aboutMe_1">
        <a href="../../../download/resume.pdf" target="_blank" rel="noreferrer">
          <button>Download CV</button>
        </a>
      </div>
      <hr className="mb-10" />

      <div className="service" id="services">
        <h1 className="skill text-orange-800 uppercase text-3xl font-extrabold">
          My services
        </h1>

        <div className="container">
          <div className="skill">
            <FontAwesomeIcon className="text-red-500 text-3xl" icon={faCode} />
            <h2>Web Development</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon
              className="text-red-500 text-3xl"
              icon={faObjectUngroup}
            />
            <h2>Graphic Designer</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon
              className="text-red-500 text-3xl"
              icon={faMagnifyingGlass}
            />
            <h2>SEO Optimization</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon
              className="text-red-500 text-3xl"
              icon={faTableCells}
            />
            <h2>Excel Spreadsheets</h2>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <h1 className=" my-5 text-orange-800 uppercase text-3xl font-extrabold">
        My Certificate
      </h1>
      <hr className="mb-10" />
      <div className="w-[80%]  m-auto ">
        <div className="  overflow-hidden">
          <CustomSlider />
        </div>
      </div>

      <div className="skillSlider">
          <div className="header flex items-center justify-center ">
        
            <h2 className="text-orange-800 uppercase text-3xl font-extrabold mb-5 mt-24">Skills</h2>
          </div>
          <hr className="mb-10" />

          <SkillSlider/>
          <hr className="mt-10" />
        </div>
    </motion.div>
  );
};

export default AboutMe;
