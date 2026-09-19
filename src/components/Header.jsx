import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          EduBridge
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="#" className="btn-join">
            JOIN US <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
