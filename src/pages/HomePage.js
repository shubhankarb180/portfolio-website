import React from "react";
import NavBar from "../components/NavBar/NavBar.component";
import DP from "../assets/img/DP.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBlogger,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="flex-col bg-gray-900 h-screen m-0 p-0" id="home">
      <NavBar />
      <section className="flex h-5/6 justify-center items-center" id="Intro">
        <div className="flex-col">
          <div className="flex-col">
            <div className="flex justify-center" id="display-picture">
              <img className="w-44 h-48 rounded-full" src={DP} alt="DP"></img>
            </div>
            <div className="flex-col py-1" id="display-content">
              <p className="text-white text-2xl text-center py-1 ">
                Hello, I am Shubhankar
              </p>
              <p className="text-white text-lg text-center py-1">
                Front End Developer
              </p>
            </div>
          </div>
          <div className="flex justify-evenly py-2" id="social-links">
            <a className="" href="https://www.linkedin.com/in/shubhankarb180/">
              <FontAwesomeIcon
                className="text-5xl text-white"
                icon={faLinkedin}
              />
            </a>
            <FontAwesomeIcon className="text-5xl text-white" icon={faGithub} />
            <FontAwesomeIcon className="text-5xl text-white" icon={faBlogger} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
