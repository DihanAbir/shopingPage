import React from "react";
import SingleSliderComp from "./SingleSliderComp";

function Testimonial() {
  return (
    <div className="container Testimonial-section">
      <div className="column-t">
        <p className="t-header">Clients Say about us</p>
        <h1>Testimonial</h1>
        <SingleSliderComp />
      </div>
      <div className="column-t">
        <SingleSliderComp />
      </div>
    </div>
  );
}

export default Testimonial;
