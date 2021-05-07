import React from "react";
import NavBar from "../components/NavBar/NavBar.component";
import IntroContent from '../components/Intro-Content/introContent.component';

const HomePage = () => {
  return (
    <div className='flex-column p-0 h-screen m-0 p-0' id='home'>
      <NavBar />
      <IntroContent />
    </div>
  );
};

export default HomePage;
