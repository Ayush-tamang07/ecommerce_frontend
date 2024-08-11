import React from "react";
import MemberCard from "../components/MemberCard.jsx";
import "../css/pagesCSS/AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <MemberCard
          image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          name="Subin Rai"
          phoneNumber="98473847564"
          email="subin@gmail.com"
        />
        <MemberCard
          image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          name="Subin Rai"
          phoneNumber="98473847564"
          email="subin@gmail.com"
        />
        <MemberCard
          image="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg"
          name="Subin Rai"
          phoneNumber="98473847564"
          email="subin@gmail.com"
        />
      </div>
    </>
  );
}

export default AboutUs;
