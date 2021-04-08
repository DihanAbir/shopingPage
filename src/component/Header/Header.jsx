import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../assets/Group 20.png";
import panjabi from "../../assets/Rectangle 24.png";
import profilepic from "../../assets/propic.PNG";

function Header() {
  return (
    <div className="container ">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li class="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Shop
              </a>
              <div class="dropdown-content">
                <div className="mainDrop">
                  <div className="drop-menu">
                    <div className="drop-col">
                      <h1>Man</h1>
                      <p>shirt</p>
                      <p>Pant </p>
                      <p>Fotua</p>
                      <p>▸ Panjabi</p>
                      <p>T-Shirt</p>
                      <p>Polo</p>
                      <p>Shoe </p>
                      <p>Perfume</p>
                      <p>Watch</p>
                      <p>shirt</p>
                    </div>
                    <div className="drop-col">
                      <h1>Women</h1>
                      <p>shirt</p>
                      <p>Pant </p>
                      <p>Fotua</p>
                      <p>T-Shirt</p>
                      <p>Polo</p>
                      <p>Shoe </p>
                      <p>Perfume</p>
                      <p>Watch</p>
                      <p>shirt</p>
                    </div>

                    <div className="drop-col">
                      <h1>Summer</h1>
                      <p>Mini shirt </p>
                      <p>Mini shirt </p>
                      <p>Cotton </p>
                      <p> Polo</p>
                      <br />
                      <h1>Offer</h1>
                      <p>Mini shirt</p>
                      <p>Mini shirt</p>
                      <p>Cotton T-Shirt</p>
                      <p>shirt</p>
                    </div>
                    <div className="drop-col">
                      <h1>Gift Item</h1>
                      <p>Mystery package</p>
                      <p>Birthday Items</p>
                      <p>Birthday Items</p>
                      <p>gift National Day</p>
                      <p>shirt</p>
                      <p>Wedding gift</p>
                      <p>Mystery package</p>
                    </div>
                  </div>
                  <div className="drop-pic">
                    <div className="img">
                      <img src={panjabi} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>Products</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="find">
          <input name="search" id="" />
          <p>
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </p>
        </div>
        <div className="profile">
          <p>
            {" "}
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="p-2">Cart</span>
          </p>
          <p>
            <img src={profilepic} alt="" />

            <span className="name p-2">Alex Pitter</span>
          </p>
        </div>
      </div>
      {/* dropdown  */}
      <div className="dropdown-content">
        <p>this is a page </p>
        <p>this is a page </p>
        <p>this is a page </p>
        <p>this is a page </p>
      </div>
    </div>
  );
}

export default Header;
