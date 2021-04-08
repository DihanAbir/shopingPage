import React from "react";

import "./Footer.css";
import logo from "../../assets/Logo Footer.png";

// fontawesome

function Footer() {
  return (
    <div className="footer">
      <div className="body">
        <div className="footer-col">
          <div className="column1">
            <div className="img">
              <img src={logo} alt="" />
            </div>
            <div className="logo">
              <h6>facebook</h6>
            </div>
            <p>
              Every spring I start going through dress withdrawals and go crazy
              over all the pretty.
            </p>
          </div>
          <div className="column2">
            <div className="column2-row1 ">
              <h3 className="footer-title">shop</h3>
              <h3 className="footer-title">Products</h3>
              <h3 className="footer-title">Collections</h3>
              <h3 className="footer-title">About us</h3>
              <h3 className="footer-title">Company</h3>
              <h3 className="footer-title">Blog</h3>
            </div>
            <div className="column2-row2 ">
              <h3 className="footer-title">Support</h3>
              <h3 className="footer-title">Reviews</h3>
              <h3 className="footer-title">Careers</h3>
              <h3 className="footer-title">Contact us</h3>
              <h3 className="footer-title">Privacy Policy</h3>
              <h3 className="footer-title">Refund Policy</h3>
            </div>
            <div className="column2-row3 ">
              <h3 className="footer-title">Tearms & Condition</h3>
              <h3 className="footer-title">FAQ’s</h3>
              <h3 className="footer-title">Delivery</h3>
              <h3 className="footer-title">Returns</h3>
            </div>
          </div>
          <div className="column3">
            <h1>Subscribe</h1>
            <div className="input">
              <input
                type="search"
                placeholder="Your email"
                name="email"
                id=""
              />
              <p> : </p>
            </div>
            <p> mail@example.com </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
