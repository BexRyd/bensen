import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";
import { get, post, put, remove } from "../utilities/apiCourses"; // get the same from Rebecca to add api to teacher
import { useState, useEffect } from "react";

function Courses() {
  // const [teacher, setTeacher] = useState([]);
  // const [counter, setCounter] = useState(Date.now());
  // const [courseName, setCourseName] = useState([]);
  // const [courseDescription, setCourseDescription] = useState([]);
  // const [courseLength, setCourseLength] = useState([]);
  // useEffect(() => {
  //   get("/Courses").then((response) => setCourseName(response.data));
  // }, []);
  // useEffect(() => {
  //   get("/Staff").then((response) => setTeacher(response.data));
  // }, []);

  // const choosenTeacher = (e) => setTeacher(e.target.value);
  // const addedCourse = (e) => setCourseName(e.target.value);
  // const addedDescription = (e) => setCourseDescription(e.target.value);
  // const addedLength = (e) => setCourseLength(e.target.value);

  // post("/Courses", {
  //   id: Date.now(),
  //   coursename: "testcoursename",
  //   teacher: "testteacher",
  //   courselength: "testlength",
  //   coursedescription: "testdescription",
  // });

  return (
    <div className="courseContainer">
      <Header />
      {/* <div className="coursesMainSection">
        <form className="createCourseForm">
          <input
            value={courseName}
            className="inputField"
            placeholder="Kursnamn"
            onChange={addedCourse}
          ></input>
          <input
            value={courseDescription}
            placeholder="Kursbeskrivning"
            onChange={addedDescription}
          ></input>
          {/* <div>
            {teacher.map((teachers) => {
              return (
                <div key={teachers.id}>
                  <option className="staffName">
                    {`${teachers.firstName} ${teachers.lastName}`}
                  </option>
                </div>
              );
            })}
          </div> */}
      {/* 
          <input
            className="inputLength"
            value={courseLength}
            placeholder="Kurslängd i veckor"
            onChange={addedLength}
          ></input>

          <button
            onClick={() => {
              post("/Courses", {
                id: counter,
                coursename: courseName,
                courselength: courseLength,
                coursedescription: courseDescription,
              });

              setCounter(counter);
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
          <p>Lärare:</p>
          <p>Kurslängd: {courseLength} veckor</p>
        </div> */}
      {/* </div> */} *
      <Footer />
    </div>
  );
}

export default Courses;
