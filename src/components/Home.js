import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Co from "../img/co.3.png";

import "../css/Home.css";

function Home() {
  return (
    <div className="container">
      <Header />

      <img className="co" src={Co} alt="computer" />
      <div classN1ame="homeContainer">
        <ul className="textAnimation">
          <li className="textAnimation">Frontend</li>
          <li className="textAnimation">Backend</li>
          <li className="textAnimation">UX/UI</li>
          <li className="textAnimation">Designer</li>
          <li className="textAnimation">Graisk Design</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
