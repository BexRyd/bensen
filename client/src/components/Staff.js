import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import girl from "../img/girl.png";
import "../css/Staff.css";

function Staff() {
  return (
    <div>
      <Header />
      <img className="girlImg" src={girl} alt="computer" />
      <Footer />
    </div>
  );
}
export default Staff;
