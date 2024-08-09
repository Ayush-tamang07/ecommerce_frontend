import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
// import ShopNowButton from "../components/ShopNowButton.jsx";
import "../css/Product.css"

function Product() {
  return (
    <>
      <Header />
      {/* <ShopNowButton/> */}
      <div className="product-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Footer />
    </>
  );
}

export default Product;
