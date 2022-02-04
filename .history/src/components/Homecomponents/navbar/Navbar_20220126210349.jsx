import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../assets/safed.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const chnageColorNavbar = () => {
    if (window.scrollY >= 80) {
      setChangeColor(true);
    } else {
      setChangeColor(false)
    }
  };


  window.addEventListener('scroll', chnageColorNavbar)

  return (
    <div className={changeColor ? 'active' : 'gpt3__navbar'}>
      <div className="gpt3__navbar-links">
        <Link to="/">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} />
          </div>
        </Link>

        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/about">About us</Link>
          </p>
          <p>
            <Link to="/portfolio">Portfolio</Link>
          </p>
          <p>
            <Link to="/blogs">Blogs</Link>
          </p>
          <p>
            <Link to="/contacts">Contacts</Link>
          </p>
        </div>
        <div className="gpt3__navbar-sign">
          <button type="button">Call us</button>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
