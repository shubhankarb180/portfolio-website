import React from "react";
import NavBar from "../components/NavBar/NavBar.component";
import IntroContent from "../components/IntroContent/IntroContent.component";

const HomePage = () => {

  return (
    <div className="flex flex-col bg-gray-900 h-screen m-0 p-0" id="home">
      <NavBar />
      <IntroContent />
    </div>
  );
};

export default HomePage;
