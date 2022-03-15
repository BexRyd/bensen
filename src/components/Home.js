import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../css/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <p id="textAnimation">Bensen Education</p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
