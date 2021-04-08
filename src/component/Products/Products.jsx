import React from "react";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";

// custome imports
import "./Products.css";
import products from "../../Data/Products";
import topImage from "../../assets/Group-1.png";
import bottomImage from "../../assets/Group.png";

function Products() {
  return (
    <div className="product-section">
      ;{/* header  */}
      <div className="header">
        <h1>Meet our best selling products</h1>
        <p>
          “Best premium laxarious Brand authentic product always available for
          you”
        </p>
      </div>
      {/* slider section  */}
      <div className="topimg">
        <img src={topImage} alt="" />
      </div>
      <div className="slider container">
        {/* <Carousel responsive={responsive}> */}
        <Carousel itemsToShow={3} enableAutoPlay={false} autoPlaySpeed={7000}>
          {products.map((product) => (
            <div className="sliderColumn">
              <div className="img">
                <img src={product.img} alt="" />
              </div>
              <h4>De Rose Gold Perfume</h4>
              <p>Floral Green fragrance for women</p>
              <div className="price">
                <p className="currentPrice">$10.00</p>
                <p
                  style={{
                    marginLeft: "20px",
                    textDecoration: "line-through",
                  }}
                  className="oldPrice"
                >
                  $12.00
                </p>
              </div>
              <u>
                <p>Add to Cart</p>
              </u>
            </div>
          ))}
        </Carousel>
        {/* </Carousel> */}
      </div>
      {/* slider section  */}
      <div className="bottomimg">
        <img src={bottomImage} alt="" />
      </div>
      <div className="slider container">
        {/* <Carousel responsive={responsive}> */}
        <Carousel itemsToShow={3} enableAutoPlay={false} autoPlaySpeed={7000}>
          {products.map((product) => (
            <div className="sliderColumn">
              <div className="img">
                <img src={product.img} alt="" />
              </div>
              <h4>De Rose Gold Perfume</h4>
              <p>Floral Green fragrance for women</p>
              <div className="price">
                <p className="currentPrice">$10.00</p>
                <p
                  style={{
                    marginLeft: "20px",
                    textDecoration: "line-through",
                  }}
                  className="oldPrice"
                >
                  $12.00
                </p>
              </div>
              <u>
                <p>Add to Cart</p>
              </u>
            </div>
          ))}
        </Carousel>
        {/* </Carousel> */}
      </div>
    </div>
  );
}

export default Products;
