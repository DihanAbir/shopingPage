import React from "react";

import "./Testimonial.css";

import LogoName from "../../assets/left-quote.svg";

function SingleSliderComp({ image }) {
  return (
    <div className="singleSLider">
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="over-img1 over-img">
        <h1>
          <img src={LogoName} alt="logo" />
        </h1>
      </div>

      <h4>Natasha Malina</h4>
      <p className="title">Beauty Model in USA</p>
      <p className="para">
        Every spring I start going through dress withdrawals and go crazy over
        all the pretty spring dresses that come out haha. It’s like famine and
        then feast and dresses
      </p>
    </div>
  );
}

export default SingleSliderComp;
