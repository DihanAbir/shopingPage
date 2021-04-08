import React from "react";
import "./Featured.css";

import brand1 from "../../assets/Group 17.png";
import brand2 from "../../assets/XMLID 1.png";
import brand3 from "../../assets/XMLID 173.png";
import brand4 from "../../assets/XMLID 229.png";
import brand5 from "../../assets/XMLID 380.png";
import brand6 from "../../assets/XMLID 406.png";

function Featured() {
  return (
    <div className="feature container">
      <h1>Featured in</h1>

      <div className="brands">
        <div className="singelBrans">
          <div className="img">
            <img src={brand1} alt="" />
          </div>
        </div>

        <div className="singelBrans">
          <div className="img">
            <img src={brand2} alt="" />
          </div>
        </div>

        <div className="singelBrans">
          <div className="img">
            <img src={brand3} alt="" />
          </div>
        </div>

        <div className="singelBrans">
          <div className="img">
            <img src={brand4} alt="" />
          </div>
        </div>

        <div className="singelBrans">
          <div className="img">
            <img src={brand5} alt="" />
          </div>
        </div>

        <div className="singelBrans">
          <div className="img">
            <img src={brand6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
