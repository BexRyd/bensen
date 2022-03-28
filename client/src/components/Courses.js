import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/Courses.css";
import { get, post, put, remove } from "../utilities/apiCourses"; // get the same from Rebecca to add api to teacher
import { useState, useEffect } from "react";

function Courses() {
  const [id, setId] = useState("");
  const [counter, setCounter] = useState(Date.now());
  const [teacher, setTeacher] = useState([]);
  const [chooseTeacher, setChooseTeacher] = useState("");
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseLength, setCourseLength] = useState("");
  useEffect(() => {
    get("/Courses").then((response) => setCourse(response.data));
  }, []);
  useEffect(() => {
    get("/Staff").then((response) => setTeacher(response.data));
  }, []);

  return (
    <div className="courseContainer">
      <Header />
      <div className="coursesMainSection">
        <div className="addedCoursesList">
          <h3>Kurslista</h3>
          <ul>
            {course.map((courses) => {
              return (
                <div>
                  <li key={courses.courseId}>
                    <p>KursID: {courses.courseId}</p>
                    <p>Kursnamn: {courses.courseName}</p>
                    <p>Kursbeskrivning: {courses.courseDescription}</p>
                    <p>Lärare: {courses.teacher} </p>
                    <p>Kurslängd: {courses.courseLength}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="createCourseForm">
          <input
            value={courseName}
            className="inputField"
            placeholder="Kursnamn"
            onChange={(e) => setCourseName(e.target.value)}
          ></input>
          <input
            value={courseDescription}
            className="inputField"
            placeholder="Kursbeskrivning"
            onChange={(e) => setCourseDescription(e.target.value)}
          ></input>
          {/* varför skriver den in lit om och om igen varje gång man klickar */}
          <select
            className="teacherSelect"
            value={chooseTeacher}
            onChange={(event) => setChooseTeacher(event.target.value)}
          >
            <option value="" selected disabled hidden>
              Välj
            </option>
            {teacher.map((teachers) => {
              if (teachers.profession === "lärare") {
                return (
                  <option className="option" key={teachers.id}>
                    {`${teachers.firstName} ${teachers.lastName}  `}
                  </option>
                );
              }
            })}
          </select>
          <input
            className="inputLength"
            value={courseLength}
            placeholder="Kurslängd i veckor"
            onChange={(e) => setCourseLength(e.target.value)}
          ></input>
          <input
            className="inputField"
            value={id}
            placeholder="KursID"
            onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          ></input>
          <button
            className="btnCourse"
            onClick={() => {
              post("/Courses", {
                id: counter,
                courseName: courseName,
                teacher: chooseTeacher,
                courseLength: courseLength,
                courseDescription: courseDescription,
              });

              setCounter(Date.now());
              get("/Courses").then((response) => setCourse(response.data));
            }}
          >
            Skapa ny kurs
          </button>
          <button
            className="btnCourse"
            onClick={() => {
              console.log("hej", id);
              put(`/Courses/${id}`, {
                id: id,
                courseName: courseName,
                teacher: chooseTeacher,
                courseLength: courseLength,
                courseDescription: courseDescription,
              }).then((response) => console.log(response));
              get("/Courses").then((response) => setCourse(response.data));
            }}
          >
            Uppdatera
          </button>
          <button
            className="btnCourse"
            onClick={() => {
              remove(`/Courses/${id}`);
              get("/Courses").then((response) => setCourse(response.data));
            }}
          >
            Ta bort
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
