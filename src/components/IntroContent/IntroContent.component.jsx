import React from "react";
import DP from "../../assets/img/DP.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from '@fortawesome/free-solid-svg-icons';

const IntroContent = () => {
  return (
    <section className="flex h-screen justify-center items-center" id="Intro">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:space-x-6 ">
          <div className="flex justify-center px-4" id="display-picture">
            <img className="w-44 h-48 rounded-full" src={DP} alt="DP"></img>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col" id="display-content">
              <div className="text-white text-2xl text-center">
                Hello, I am Shubhankar
              </div>
              <div className="text-white text-lg text-center">
                Front End Developer
              </div>
            </div>
            <div className="flex justify-evenly py-4" id="social-links">
              <a
                className=""
                href="https://www.linkedin.com/in/shubhankarb180/"
              >
                <FontAwesomeIcon
                  className="text-5xl text-white"
                  icon={faLinkedin}
                />
              </a>
              <a className="" href="https://github.com/shubhankarb180">
                <FontAwesomeIcon
                  className="text-5xl text-white"
                  icon={faGithub}
                />
              </a>
              <a className="" href="https://shubhankarb180.hashnode.dev/">
                <FontAwesomeIcon
                  className="text-5xl text-white"
                  icon={faBook}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroContent;
