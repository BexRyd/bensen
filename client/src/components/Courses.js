import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";
import { get, post, put, remove } from "../utilities/apiCourses"; // get the same from Rebecca to add api to teacher
import { useState, useEffect } from "react";

function Courses() {
  const [courseId, setCourseId] = useState(Date.now());
  const [teacher, setTeacher] = useState([]);
  const [courseName, setCourseName] = useState([]);
  const [courseDescription, setCourseDescription] = useState("");
  const [courseLength, setCourseLength] = useState("");
  // useEffect(() => {
  //   get("/Courses").then((res) => setCourseName(res.data));
  // }, []);
  useEffect(() => {
    get("/Staff").then((response) => setTeacher(response.data));
  }, []);

  const addedId = (e) => setCourseId(e.target.value);

  const courseTeacher = teacher.map((teachers) => {
    return (
      <div>
        <option className="courseStaffName">
          {`${teachers.firstName} ${teachers.lastName}`}
        </option>
      </div>
    );
  });

  return (
    <div className="courseContainer">
      <Header />
      <div className="coursesMainSection">
        <form className="createCourseForm">
          <input
            value={courseName}
            className="inputField"
            placeholder="Kursnamn"
            onChange={(e) => setCourseName(e.target.value)}
          ></input>
          <input
            value={courseDescription}
            placeholder="Kursbeskrivning"
            onChange={(e) => setCourseDescription(e.target.value)}
          ></input>
          <div>{courseTeacher}</div>
          <select onChange={{ courseTeacher }}>
            <option>{courseTeacher}</option>
          </select>
          <input
            className="inputLength"
            value={courseLength}
            placeholder="Kurslängd i veckor"
            onChange={(e) => setCourseLength(e.target.value)}
          ></input>

          <button
            onClick={() => {
              post("/Courses", {
                courseId: courseId,
                coursename: courseName,
                teacher: teacher,
                courselength: courseLength,
                coursedescription: courseDescription,
              });

              setCourseId(Date.now());
              get("/Courses").then((res) => setCourseName(res.data));
            }}
          >
            Skapa ny kurs
          </button>
        </form>
        <div className="addedCoursesList">
          <h3>TILLGÄNGLIGA KURSER</h3>
          <h4>Kursnamn: {courseName}</h4>
          <p>Kursbeskrivning: {courseDescription}</p>
          <p>Lärare: {courseTeacher}</p>
          <p>Kurslängd: {courseLength} veckor</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
