import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../css/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
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
