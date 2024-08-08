import React from "react";
import "../css/Brand.css"
import BrandCard from "./BrandCard";

function Brand() {
  return (
    <>
    {/* <span>Brand</span> */}
    <div className="card-container">
    <BrandCard
      name="Mi"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png"
    />
    <BrandCard
      name="Dell"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1024px-Dell_Logo.svg.png"
    />
    <BrandCard
      name="Acer"
      image="https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo.png"
    />
    <BrandCard
      name="Asus"
      image="https://logowik.com/content/uploads/images/424_asus.jpg"
    />
    </div>
    </>
  );
}

export default Brand;
