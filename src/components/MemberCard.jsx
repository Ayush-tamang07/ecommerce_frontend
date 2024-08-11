import React from 'react';
import "../css/MemberCard.css";

function MemberCard(props) {
  return (
    <>
      <div className="member-card">
        <div className="member-image">
          <img src={props.image} alt="profile"/>
        </div>
        <div className="member-details">
          <h3 className="member-name">{props.name}</h3>
          <h5 className="member-contact-title">Contact</h5>
          <h5 className="member-contact-info">{props.phoneNumber}</h5>
          <h5 className="member-email">{props.email}</h5>
        </div>
      </div>
    </>
  );
}

export default MemberCard;
