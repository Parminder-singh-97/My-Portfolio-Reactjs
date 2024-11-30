import React, { useEffect, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutLeftCard from "../../Components/About/AboutLeftCard";
import AboutMe from "../../Components/About/AboutMe";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";

const About = () => {
  const [rightBodyComponent, SetRightBodyComponent] = useState("AboutMe");
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    // setIsOpen(!isOpen);
  };
  const toggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  
  // Close the menu when clicked on link
useEffect(() => {
  const autoCLoseNavOnClick = () =>{


    setIsOpenMenu(false)
    console.log("closed")
  }

  autoCLoseNavOnClick();


},[rightBodyComponent])

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
            onClick={toggleOpenMenu}
            type="button"
            className=" relative z-50 inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-default"
            
          >
            <span className="sr-only">Open main menu</span>
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

          {/* ${isOpen ? "block" : "hidden"}  */}
          <div
            className={`
              md:block md:w-auto w-[100%]  md:bg-transparent md:rounded-none transition-all duration-1000 ease-in-out rounded-xl bg-white md:relative absolute z-40 top-[${isOpenMenu ? "4%" : "-20%"}] left-0`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link className="text-black md:text-white" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                className="text-black md:text-white"
                  to="#"
                  onClick={() => {SetRightBodyComponent("AboutMe")
                    
                   }}
                    
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                className="text-black md:text-white"
                  to="#"
                  onClick={() => SetRightBodyComponent("Project")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                className="text-black md:text-white py-5"
                  to="#"
                  onClick={() => {
                    return SetRightBodyComponent("Contact")}}
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
