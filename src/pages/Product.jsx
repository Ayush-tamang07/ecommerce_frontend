import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
// import ShopNowButton from "../components/ShopNowButton.jsx";
import "../css/pagesCSS/Product.css";

function Product() {
  return (
    <>
      <Header />
      {/* <ShopNowButton/> */}
      <div className="product-container">
        <ProductCard
          image="https://m.media-amazon.com/images/I/714mr6GxecL.jpg"
          product_name="Redmi Note 13 Pro + 5G"
          price="Rs. 59999"
        />
      </div>

      <Footer />
    </>
  );
}

export default Product;
