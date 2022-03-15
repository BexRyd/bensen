import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import guy from "../img/guy.png";

function Education() {
  return (
    <div>
      <Header />
      <img className="girlImg" src={guy} alt="computer" />
      <Footer />
    </div>
  );
}

export default Education;
