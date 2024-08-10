import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {
  return (
    <>
    <a href="#">
      <div className="product-card">
        <img
          src={props.image}
          alt="monitor"
          width={290}
        />
        <div className="product-detail">
          <span>{props.product_name}</span>
          <span className="price">{props.price}</span>
        </div>
      </div>
      </a>
    </>
  );
}

export default ProductCard;
