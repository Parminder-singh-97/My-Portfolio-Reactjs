import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebProjectData from "../../Data/ProjectData/WebProjectData";
import JavaProjectData from "../../Data/JavaProjectData/JavaProjectData";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div className="project-container"
    initial={{ opacity: 0, scale:0.90, y: -50 }}
    animate={{ opacity: 1,scale:1, y: 0 }}
    transition={{ duration: 1.5 }}>
      <section id="about-project ">
        <h1 className="text-orange-800 uppercase text-3xl font-extrabold">
          My Web Projects
        </h1>
        <hr />
        <>
          <div className="all_project">
            {WebProjectData.map((projects, key) => {
              const { id, title, description, image, code, live } = projects;

              return (
                <div  key={key} className="card p1">
                  <div className="card__image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                    <div className="flex gap-3">
                    <a href={live} target="_blank">
                      <button className="card__button">Live Demo</button>
                    </a>
                    <a href={code} target="_blank">
                      <button className="card__button secondary">
                        Source Code
                      </button>
                    </a>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr style={{ margin: "2rem 0" }} />

          <div className="javaScript_pro">
            <h1 className="text-orange-800 uppercase text-3xl font-extrabold">
              JavaScript Projects
            </h1>
            <div className="js_container">
              {JavaProjectData.map((project)=>{
                  const { id, title, description, image, code, live } = project;

           
              return (
                <div key={id} className="card p1">
                  <div className="card__image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                    <div className="flex gap-3">
                    <a href={live} target="_blank">
                      <button className="card__button">Live Demo</button>
                    </a>
                    <a href={code} target="_blank">
                      <button className="card__button secondary">
                        Source Code
                      </button>
                    </a>

                    </div>
                  </div>
                </div>
              );



              })



              }


            
            </div>
          </div>
        </>
      </section>
    </motion.div>
  );
};

export default Project;
