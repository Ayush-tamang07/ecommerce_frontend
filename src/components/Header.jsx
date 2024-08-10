import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import "../css/Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <header>
          <div className="icon">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify-logo-2018.svg" alt="logo" width={150} />
          </div>
          <div className="nav-item">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact</Link></li>
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