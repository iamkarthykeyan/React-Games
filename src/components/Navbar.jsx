import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header font-poppins gap-32">
      <NavLink to='/'>
        <div className="w-30 rounded-lg border border-black bg-transparent p-2 text-center shadow-lg bg-gradient-to-b from-black to-gray-800 text-white flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div>
              <h5 className="text-base font-bold blue-gradient_text">RoyalBattles</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Enjoy the Games</p>
            </div>
          </div>
        </div>
      </NavLink>
      <nav className="flex text-lg font-medium">
        <div className="hidden lg:flex space-x-4 gap-8">
          <NavLink to='/explore' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Explore Games
          </NavLink>
          <NavLink to='/profiles' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Profiles
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            About Us
          </NavLink>
        </div>

        {/* Mobile navigation toggle */}
        <div className="lg:hidden">
          <button
            className="text-black p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>


        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 p-6 transition-all duration-500 ease-in-out">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200"
              aria-label="Close menu"
            >
              <span className="text-3xl">&times;</span>
            </button>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-black py-2 px-5 rounded-lg shadow-md transform scale-105 transition-transform duration-300 ease-in-out'
                    : 'text-white py-4 px-8 rounded-lg hover:text-gray-300'
                }
                onClick={toggleMenu}
              >
                <span className="flex items-center text-lg">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </span>
              </NavLink>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-black py-2 px-5 rounded-lg shadow-md transform scale-105 transition-transform duration-300 ease-in-out'
                    : 'text-white py-4 px-8 rounded-lg hover:text-gray-300'
                }
                onClick={toggleMenu}
              >
                <span className="flex items-center text-lg">
                  <i className="fas fa-gamepad"></i>
                  <span>Explore Games</span>
                </span>
              </NavLink>
              <NavLink
                to="/profiles"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-black py-2 px-5 rounded-lg shadow-md transform scale-105 transition-transform duration-300 ease-in-out'
                    : 'text-white py-4 px-8 rounded-lg hover:text-gray-300'
                }
                onClick={toggleMenu}
              >
                <span className="flex items-center text-lg">
                  <i className="fas fa-users"></i>
                  <span>Player Profiles</span>
                </span>
              </NavLink>
              <NavLink
                to="/achievements"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-black py-2 px-5 rounded-lg shadow-md transform scale-105 transition-transform duration-300 ease-in-out'
                    : 'text-white py-4 px-8 rounded-lg hover:text-gray-300'
                }
                onClick={toggleMenu}
              >
                <span className="flex items-center text-lg">
                  <i className="fas fa-info-circle"></i>
                  <span>Achievements</span>
                </span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-black py-2 px-5 rounded-lg shadow-md transform scale-105 transition-transform duration-300 ease-in-out'
                    : 'text-white py-4 px-8 rounded-lg hover:text-gray-300'
                }
                onClick={toggleMenu}
              >
                <span className="flex items-center text-lg">
                  <i className="fas fa-tasks"></i>
                  <span>About Us</span>
                </span>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
