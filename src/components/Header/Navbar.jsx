import React from "react";
import { NavLink } from "react-router"; // use NavLink
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold underline underline-offset-5"
      : "text-gray-700 hover:text-purple-500 transition-colors";

  return (
    <nav className="bg-base-100 shadow-sm  ">
      <div className="navbar container px-2 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className={linkClasses}>
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className={linkClasses}>
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-xl flex items-center gap-1">
            <img src={logo} alt="HERO.IO" className="w-6 h-6 md:w-10 md:h-10" />
            <span className="font-bold text-2xl md:text-3xl logo-text">HERO.IO</span>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={linkClasses}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={linkClasses}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/eng-ronyislam"
            target="_blank"
            className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
            }}
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
