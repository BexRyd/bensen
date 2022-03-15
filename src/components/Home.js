import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../css/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer"></div>
      <Footer />
    </div>
  );
}

export default Home;
