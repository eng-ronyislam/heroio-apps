import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/apps">Apps</Link>
      </li>
      <li>
        <Link to="/installation">Installation</Link>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center gap-1">
            <img src={logo} alt="HERO.IO" className="w-10 h-10" />
            <span className="font-bold text-3xl logo-text">HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/eng-ronyislam"
            target="_blank"
            className="btn text-white font-semibold hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)"
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
