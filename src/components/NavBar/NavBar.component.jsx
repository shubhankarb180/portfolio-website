import React from "react";

const NavBar = () => {
  return (
    <header
      className="flex-column w-full justify-between bg-gray-900 text-white fixed -top-0 border-b-2 border-gray-600"
      id="header"
    >
      <nav className="flex justify-between" id="navigation">
        {/* left */}
        <div className="flex p-4">
          <h3>Shubhankar Banerjee</h3>
        </div>

        {/* right */}
        <div className="flex-row space-x-4 p-4">
          <a className="test" href="#test">
            Home
          </a>
          <a href="#test">About</a>
          <a href="#test">Portfolio</a>
          <a href="#test">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
