import React from "react";
import MemberCard from "../components/MemberCard.jsx";
import "../css/pagesCSS/AboutUs.css";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import MessageForm from "../components/MessageForm.jsx";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-us">
        <MemberCard
          image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          name="Chetan Rai"
          phoneNumber="98473847564"
          email="chetan@gmail.com"
        />
        <MemberCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0zYcypyreQSHIWXlpNM2hnAi6gJlYkX3vA&s"
          name="Subin Rai"
          phoneNumber="98473847564"
          email="subin@gmail.com"
        />
        <MemberCard
          image="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg"
          name="Kabin Rai"
          phoneNumber="98473847564"
          email="kabin@gmail.com"
        />
        {/* templete */}
        {/* <MemberCard
        image=""
          name=""
          phoneNumber=""
          email=""
        /> */}
        <MemberCard
          image="https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg"
          name="Alex"
          phoneNumber="9837829238"
          email="alex@gmail.com"
        />
      </div>
        <MessageForm/>
      <Footer />
    </>
  );
}

export default AboutUs;
