import React from "react";
import "../css/componentCSS/MessageForm.css";

function MessageForm() {
  return (
    <form className="message-form">
      <h1>Leave a message</h1>
      <div className="row-one">
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" />
        </div>
      </div>
      <div className="row-two">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" />
      </div>
      <div className="row-three">
        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>
      </div>
    <button className="submit-btn">Submit</button>

    </form>
  );
}

export default MessageForm;
