import React from "react";

import "./Header.css";
import logo from "../../assets/Group 20.png";

function Header() {
  return (
    <div className="container header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="find">
        <input name="search" id="" />
        <p> : </p>
      </div>
      <div className="profile">
        <p>Cart</p>
        <p>Alex Pitter</p>
      </div>
    </div>
  );
}

export default Header;
