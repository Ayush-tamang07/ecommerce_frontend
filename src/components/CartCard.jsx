import React from "react";
import "../css/CartCard.css";

function CartCard() {
  return (
    <div className="cart-card">
      <div className="cart-item">
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2023/07/4kmonitors-2048px-9794.jpg"
          alt="MI Monitor"
          className="product-image"
          width={200}
        />
        <div className="product-details">
          <h1 className="product-title">MI Monitor</h1>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            molestias ex natus, numquam et veniam dolores, blanditiis, doloribus
            eaque sit quis assumenda non quibusdam deserunt quia voluptate
            accusamus quaerat totam.
          </p>
          <span className="product-price">₹23,000</span>
        </div>
      </div>
      <div className="cart-quantity">
        <h3>Quantity</h3>
        <span>3</span>
      </div>
      <div className="cart-actions">
        <button className="btn-remove">Remove</button>
        <button className="btn-buy">Buy Now</button>
      </div>
    </div>
  );
}

export default CartCard;
