import React from "react";
import "../css/Brand.css"
import Card from "./Card";

function Brand() {
  return (
    <>
    {/* <span>Brand</span> */}
    <div className="card-container">
    <Card
      name="Mi"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png"
    />
    <Card
      name="Dell"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png"
    />
    <Card
      name="Acer"
      image="https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo.png"
    />
    <Card
      name="Asus"
      image="https://logowik.com/content/uploads/images/424_asus.jpg"
    />
    </div>
    </>
  );
}

export default Brand;
