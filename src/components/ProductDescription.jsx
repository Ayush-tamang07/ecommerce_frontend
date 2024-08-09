import React from "react";
import "../css/ProductDescription.css";
import "../css/ShopNowButton.css";

function ProductDescription() {
  return (
    <>
      <div className="description-container">
        <div className="image">
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2023/07/4kmonitors-2048px-9794.jpg"
            alt="monitor"
            width={500}
          />
        </div>
        <div className="description">
          <h1>MI Monitor</h1>
          <span className="Price">Rs.20000</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            eveniet illum similique molestias quia enim consequatur aut
            doloremque magnam modi. Porro error iusto ullam velit dicta sed non,
            facilis voluptas!
          </p>
          
          <button className="orange-button">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
