import React from 'react';
import '../css/TotalAmount.css';

function TotalAmount() {
  return (
    <div className="total-amount-container">
      <div className="amount-details">
        <span className="amount-label">Total Amount</span>
        <span className="amount-value">Rs. 23,000</span>
      </div>
      <button className="buy-all-button">Buy All</button>
    </div>
  );
}

export default TotalAmount;
