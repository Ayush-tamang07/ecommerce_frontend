import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import "../css/Header.css"

function Header() {
  return (
    <>
        <header>
          <div className="icon">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify-logo-2018.svg" alt="logo" width={150} />
          </div>
          <div className="nav-item">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="icon">
          <CiSearch />
          <IoMdCart />
          <FaRegUserCircle />
          </div>

        </header>
    </>
  )
}

export default Header