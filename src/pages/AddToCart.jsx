import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";
import TotalAmount from "../components/TotalAmount";

function AddToCart() {
  return (
    <>
      <Header />
      <div>
      <CartCard/>
        <TotalAmount/>
      </div>
      <Footer />
    </>
  );
}

export default AddToCart;
