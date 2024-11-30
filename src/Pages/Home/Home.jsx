import React from 'react';
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Frontend Developer', 'React Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy(); // Clean up on unmount
  }, []);

  return (
    <>
    
    <div className="home-container">
   
      <header>
        <nav>
        <img src="../../../Parm.webp" alt="logo" />
       
          <ul>
           
          </ul>
        </nav>
      </header>

      <main>
        <div className="left_side">
          <h3 className="left_1">WELCOME TO MY WORLD</h3>
          <h1 className="left_1">
            Hi I’m <span >Parminder Singh</span>
          </h1>
          <h2 className="left_1 mt-4">
            a <span ref={typedElement} id="element"></span>
          </h2>
          <p className="left_1">
            Crafting user-friendly websites. Turning ideas into reality with simple yet elegant designs. Let's create something amazing!
          </p>
          <div className="btn-start">
            <Link to="/About">
              <button className='text-[15px]'>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                About Me
              </button>
            </Link>
          </div>
        </div>
        <div className="right_side">
          <div className="hero">
            <img src="../../../hero.webp" alt="User" />
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Home;
