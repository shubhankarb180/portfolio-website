import React, {useState} from "react";
import logo from "../../assets/img/DP.jpg";

const NavBar = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  }

  return (
    <nav className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <a href="#k" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-semibold text-white text-lg">
                Navigation
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="j"
              className="py-4 px-2 text-white border-b-4 border-white font-semibold"
            >
              Home
            </a>
            <a
              href="j"
              className="py-4 px-2 text-gray-500 hover:text-white font-semibold transition duration-300"
            >
              About
            </a>
            <a
              href="j"
              className="py-4 px-2 text-gray-500 hover:text-white font-semibold transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="j"
              className="py-4 px-2 text-gray-500 hover:text-white font-semibold transition duration-300"
            >
              Resources
            </a>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" id="mobile-nav-btn" onClick={handleToggle}>
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-white "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile menu ${ menuToggle ? '' : 'hidden'}`}>
        <ul className="">
          <li className="block text-sm px-2 py-4 text-white bg-gray-800 font-semibold">Home</li>
          <li className="block text-sm px-2 py-4 text-gray-500 hover:text-white transition duration-300">About</li>
          <li className="block text-sm px-2 py-4 text-gray-500 hover:text-white transition duration-300">Portfolio</li>
          <li className="block text-sm px-2 py-4 text-gray-500 hover:text-white transition duration-300">Resources</li>          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
