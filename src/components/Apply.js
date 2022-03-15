import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import color from "../img/color.jpg";

function Apply() {
  return (
    <div>
      <Header />
      <img className="girlImg" src={color} alt="computer" />
      <Footer />
    </div>
  );
}

export default Apply;
