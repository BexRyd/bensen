import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Co from "../img/co.3.png";

import "../css/Home.css";

function Home() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div className="containerHome">
      <Header setLoggInPage={(authorized) => setAuthorized(authorized)} />

      <div classN1ame="homeContainer">
        <img className="co" src={Co} alt="computer" />
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
