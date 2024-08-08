import React from "react";
import "../css/card.css"

function BrandCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="logo" width={100} />
        <span>{props.name}</span>
      </div>
    </>
  );
}

export default BrandCard;
