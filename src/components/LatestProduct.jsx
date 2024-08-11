import React from "react";
import "../css/LatestProduct.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
function LatestProduct() {
  return (
    <>
      <div className="latest-product">
        <div className="latest-product__header">
          <span className="latest-product__title">Latest Product</span>
          <Link to="/product  ">
          <span className="latest-product__view-all">View All Products</span>
          </Link>
        </div>

        <div className="product-list">
          <ProductCard
            image="https://m.media-amazon.com/images/I/714mr6GxecL.jpg"
            product_name="Redmi Note 13 Pro + 5G"
            price="Rs. 59999"
          />
          <ProductCard
            image="https://m.media-amazon.com/images/I/714mr6GxecL.jpg"
            product_name="Redmi Note 13 Pro + 5G"
            price="Rs. 59999"
          />
          <ProductCard
            image="https://m.media-amazon.com/images/I/714mr6GxecL.jpg"
            product_name="Redmi Note 13 Pro + 5G"
            price="Rs. 59999"
          />
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
