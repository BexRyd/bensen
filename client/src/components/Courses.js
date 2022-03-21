import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";

import { useState } from "react";
// const teachersArray = [
//   { label: "Janne Andersson", value: 2 },
//   { label: "Kalle Pettersson", value: 4 },
//   { lable: "Pelle Svensson", value: 3 },
//   { lable: "Palle Svensson", value: 1 },
// ];

function Courses() {
  const [teacher, setTeacher] = useState();
  const [courseName, setCourseName] = useState();
  const [courseLength, setCourseLenght] = useState();
  const [courseDescription, setCourseDescription] = useState();

  const choosenTeacher = (e) => setTeacher(e.target.value);
  return (
    <div>
      <Header />
      <section className="coursesMainSection">
        <input placeholder="Kursnamn" value={courseName}></input>
        <input placeholder="Kursbeskrivning" value={courseDescription}></input>
        <select value={teacher} onChange={choosenTeacher}>
          <option>Janne Karlsson</option>
          <option>Kalle Göransson</option>
          <option>Pelle Svensson</option>
          placeholder="Välj Utbildningsledare"
        </select>
        <input placeholder="Kurslängd" value={courseLength}></input>

        <button>Lägg till kurs</button>

        <div className="addedCoursesList">
          <h3>TILLGÄNGLIGA KURSER</h3>
          <h4>{courseName}</h4>
          <p>{courseDescription}</p>
          <p>{teacher}</p>
          <p>{courseLength}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Courses;
// fetch('/api/create', {method: 'POST',body: JSON.stringify([1,2,3,4,5]),headers: {'Content-Type': 'application/json'}}).then((response) => response.json()).then((data) => console.log(data))
