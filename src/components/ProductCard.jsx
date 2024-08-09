import React from "react";
import "../css/ProductCard.css";

function ProductCard() {
  return (
    <>
    <a href="#">
      <div className="product-card">
        <img
          src="https://m.media-amazon.com/images/I/714mr6GxecL.jpg"
          alt="monitor"
          width={290}
        />
        <div className="product-detail">
          <span>Redmi Note 13 Pro + 5G</span>
          <span className="price">Rs. 54999</span>
        </div>
      </div>
      </a>
    </>
  );
}

export default ProductCard;
