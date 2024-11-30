import React, { useEffect, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutLeftCard from "../../Components/About/AboutLeftCard";
import AboutMe from "../../Components/About/AboutMe";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import "preline";

const About = () => {
  const [rightBodyComponent, SetRightBodyComponent] = useState("AboutMe");

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Close the menu when clicked on link
  useEffect(() => {
    const autoCLoseNavOnClick = () => {
      setIsOffcanvasOpen(false);
      console.log("closed");
    };

    autoCLoseNavOnClick();
  }, [rightBodyComponent]);

  const renderComponent = () => {
    if (rightBodyComponent === "AboutMe") {
      return <AboutMe />;
    } else if (rightBodyComponent === "Project") {
      return <Project />;
    } else if (rightBodyComponent === "Contact") {
      return <Contact />;
    }
  };

  return (
    <div className="about-container relative">
      {/* Navbar */}
      <nav className="border-gray-200 bg-transparent flex justify-end items-end">
        <div className="flex flex-wrap items-center justify-between p-4">
          <button
            type="button"
            className=" relative z-50 inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-haspopup="dialog"
            aria-expanded={isOffcanvasOpen}
            aria-controls="hs-offcanvas-custom-backdrop-color"
            onClick={toggleOffcanvas}
          >
            <svg
              className="w-6 h-6 text-black font-extrabold"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`md:block hidden
            `}
            id="navbar-default"
          >
            <ul className="">
              <li>
                <Link className="text-white" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white"
                  to="#"
                  onClick={() => {
                    SetRightBodyComponent("AboutMe");
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-white"
                  to="#"
                  onClick={() => SetRightBodyComponent("Project")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-white py-5"
                  to="#"
                  onClick={() => {
                    return SetRightBodyComponent("Contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            id="hs-offcanvas-custom-backdrop-color"
            className={`hs-overlay ${
              isOffcanvasOpen ? "translate-x-0" : "-translate-x-full"
            }  fixed top-0 left-0   transition-all duration-300 transform h-full  w-full z-[60]  border-e  dark:border-neutral-700 md:hidden    `}
            role="dialog"
            tabIndex="-1"
            aria-labelledby="hs-offcanvas-custom-backdrop-color-label"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 relative  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <FontAwesomeIcon
                onClick={toggleOffcanvas}
                icon={faXmark}
                className="text-white absolute top-0 left-0 text-[30px]"
              />
              <li>
                <Link
                  className="text-white md:text-white"
                  to="/"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white md:text-white"
                  to="#"
                  onClick={() => {
                    SetRightBodyComponent("AboutMe");
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-white md:text-white"
                  to="#"
                  onClick={() => SetRightBodyComponent("Project")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-white md:text-white py-5"
                  to="#"
                  onClick={() => {
                    return SetRightBodyComponent("Contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="about">
        <AboutLeftCard />
        <div className="about_right">{renderComponent()}</div>
      </section>
    </div>
  );
};

export default About;
