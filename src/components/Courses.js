import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";

function Courses() {
  return (
    <div>
      <Header />
      <section className="coursesMainSection">
        <ul>
          <li>Lägg till ny kurs kopplad till ansvarig lärare</li>
          <br />
          <li>Lista över lärare man har att välja på som hämtas via API</li>
          <br />
          <li>
            Spara följande:Namn på kurs, Utbildningsledare, Längd på kurs i
            veckor, Kursbeskrivning,
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
