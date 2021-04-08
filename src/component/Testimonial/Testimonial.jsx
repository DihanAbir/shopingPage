import React from "react";
import SingleSliderComp from "./SingleSliderComp";

import headphone from "../../assets/Rectangle 16.png";
import groupimh from "../../assets/Rectangle 19.png";

function Testimonial() {
  return (
    <div className="container Testimonial-section">
      <div className="column-t">
        <p className="t-header">Clients Say about us</p>
        <h1>Testimonial</h1>
        <SingleSliderComp image={headphone} />
      </div>
      <div className="column-t">
        <SingleSliderComp image={groupimh} />
      </div>
    </div>
  );
}

export default Testimonial;
