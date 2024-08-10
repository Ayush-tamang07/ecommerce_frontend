import React from 'react';
import "../css/DiscountComponent.css"
function DiscountComponent() {
  return (
    <>
      <div className="discount-container">
        <div className="discount-text">
          <span className="discount-offer">Up to 25% Discount! Check it Out</span>
          <span className="discount-cta">Hurry Up!</span>
          <button>Shop now</button>
        </div>
        <div className="discount-image">
          <img src="https://i.rtings.com/assets/pages/lzrzcosQ/best-gaming-monitor-20230824-4-medium.jpg?format=auto" alt="mac" width={500} />
        </div>
      </div>
    </>
  );
}

export default DiscountComponent;
