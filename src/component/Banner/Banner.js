import React from "react";

// custome import
import banerCover from "../../assets/Group-2.png";
import "./Banner.css";

function Banner() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="mainBanner">
        <div className="banner-column">
          <div className="img"></div>
        </div>
        <div className="banner-column banner-left">
          <div>
            <h2>
              New Fashion Trends <span className="bannerSpan">for</span> Summer
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
            <button className="banner-btn btn-primary">Shop Now</button>
            <div className="coverImage ">
              <img src={banerCover} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
