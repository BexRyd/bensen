import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import Co from "../img/co.3.png";
import { get } from "../utility/educationApi.js";

import "../css/Home.css";

function Home() {
  const [authorized, setAuthorized] = useState(false);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    get("/Education").then((response) => setEducation(response.data));
  }, []);

  return (
    <div className="containerHome">
      {/* <Header setLoggInPage={(authorized) => setAuthorized(authorized)} /> */}

      <div classN1ame="homeContainer">
        <img className="co" src={Co} alt="computer" />
        <ul className="textAnimation">
          {education.map((educations) => {
            return <li className="textAnimation">{educations.Utbildning}</li>;
          })}
        </ul>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
