import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";
import { get, post } from "../utilities/apiCourses"; // get the same from Rebecca to add api to teacher
import { useState, useEffect } from "react";

function Courses() {
  const [teacher, setTeacher] = useState();
  const [course, setCourse] = useState();
  const [description, setDescription] = useState();
  const [length, setLength] = useState();
  const choosenTeacher = (e) => setTeacher(e.target.value);
  const addedCourse = (e) => setCourse(e.value);
  const addedDescription = (e) => setDescription(e.value);
  const addedLength = (e) => setLength(e.value);
  useEffect(() => {
    get("/Staff").then((response) => setTeacher(response.data));
    get("/Courses").then((response) => setCourse(response.data));
  }, []);

  post("/Courses", {
    id: 1,
    coursename: "testcoursename",
    teacher: "testteacher",
    courselength: "testlength",
    coursedescription: "testdescription",
  });

  return (
    <div>
      <Header />
      <div className="coursesMainSection">
        <form className="createCourseForm">
          <input
            className="inputField"
            value={course}
            placeholder="Kursnamn"
            onClick={addedCourse}
          ></input>
          <input
            value={description}
            placeholder="Kursbeskrivning"
            onClick={addedDescription}
          ></input>
          <select value={teacher} onChange={choosenTeacher}>
            <option>Välj lärare.....</option>
            {teacher.map((teacher) => {
              return (
                <div>
                  <option className="staffName" key={teacher.id}>
                    {`${teacher.firstName} ${teacher.lastName}`}
                  </option>
                </div>
              );
            })}
            <option>Janne Karlsson</option>
            <option>Kalle Göransson</option>
            <option>Pelle Svensson</option>
            placeholder="Välj Lärare"
          </select>
          <input
            className="inputLength"
            value={length}
            placeholder="Kurslängd i veckor"
            onClick={addedLength}
          ></input>

          <button type="submit">Skapa ny kurs</button>
        </form>
        <div className="addedCoursesList">
          <h3>TILLGÄNGLIGA KURSER</h3>
          <h4>Kursnamn: {course}</h4>
          <p>Kursbeskrivning: {description}</p>
          <p>Lärare: {teacher}</p>
          <p>Kurslängd: {length} veckor</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
