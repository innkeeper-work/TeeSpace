import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo-TeeSpace.png";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Teespace" />
          </a>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TeeSpace</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
          <FaSearch />
        </div>
        <div className="btn">
          <div className="icon">
            <FaShoppingBag />
          </div>
          <div className="hotline">
            <h5>Hotline</h5>
            <p>0123456789</p>
          </div>
          <button type="button" className="signup">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
