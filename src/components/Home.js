import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Computer from "../img/co.jpg";

function Home() {
  return (
    <div>
      <Header />
      <img src={Computer} alt="Computer" className="frontPageImg" />
      <Footer />
    </div>
  );
}

export default Home;
