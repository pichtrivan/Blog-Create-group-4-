import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                GoNest
              </span>
            </Link>
            <div className="hidden md:ml-6 md:flex items-center md:space-x-8">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="elative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Home
              </Link>
                <Link
                to="/author"
                onClick={closeMobileMenu}
                className="elative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Author
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                About
              </Link>
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className="elative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Blog
              </Link>
              <Link
                to="/sponsor"
                onClick={closeMobileMenu}
                className="elative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Sponsor
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="elative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex md:items-center">
              <Link to="/login" onClick={closeMobileMenu}>
                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Login
                </button>
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
                {menuOpen ? (
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                    width="32"
                    height="32"
                    alt="Close menu"
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                    width="32"
                    height="32"
                    alt="Open menu"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="ml-3  pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-10 after:transition-transform after:duration-300 after:origin-left"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-10 after:transition-transform after:duration-300 after:origin-left"
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-10 after:transition-transform after:duration-300 after:origin-left"
            >
              Blog
            </Link>
            <Link
              to="/sponsor"
              onClick={closeMobileMenu}
              className=" relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-10 after:transition-transform after:duration-300 after:origin-left"
            >
              Sponsor
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className=" relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-10 after:transition-transform after:duration-300 after:origin-left"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link to="/login" className="w-full" onClick={closeMobileMenu}>
                <button className="w-full bg-indigo-600 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
