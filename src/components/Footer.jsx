import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src="https://cdn.worldvectorlogo.com/logos/shopify-logo-2018.svg" alt="logo" width={150} />
        </div>
        <div className="website-name">
            <h3>Website Name</h3>
            <span><a href="#">Login</a></span>
            <span><a href="#">About Us</a></span>
        </div>
        <div className="support">
            <h3>Support</h3>
            <span><a href="#">Contact Us</a></span>
            <span><a href="#">+977 98475848221</a></span>
            <span><a href="#">websitename@gmail.com</a></span>
        </div>
        <div className="legal">
            <h3>Legal</h3>
            <span><a href="#">Terms of Service</a></span>
            <span><a href="#">Privacy Policy</a></span>
        </div>
    </footer>
  )
}

export default Footer