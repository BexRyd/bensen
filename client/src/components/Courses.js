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

  // const addedId = (e) => setCourseId(e.target.value);

  // const courseTeacher = teacher.map((teachers) => {
  //   return (
  //     <div>
  //       <option className="courseStaffName">
  //         {`${teachers.firstName} ${teachers.lastName}`}
  //       </option>
  //     </div>
  //   );
  // });

  return (
    <div className="courseContainer">
      <Header />
      <div className="coursesMainSection">
        <div className="addedCoursesList">
          <h3>Kurslista</h3>
          <ul>
            {course.map((course) => {
              return (
                <div>
                  <li key={course.id}>
                    <p>KursID: {course.id}</p>
                    <p>Kursnamn: {course.courseName}</p>
                    <p>Kursbeskrivning: {course.courseDescription}</p>
                    <p>Lärare:{course.chooseTeacher} </p>
                    <p>Kurslängd: {course.courseLength}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <form className="createCourseForm">
          {/* <select
            className="selectCourseID"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="Id "
          >
            {course.map((course) => {
              return (
                <option className="option" key={course.id}>
                  {`${course.id}  `}
                </option>
              );
            })}
          </select> */}

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
            {teacher.map((teachers) => {
              return (
                <option className="option" key={Date.now()}>
                  {`${teachers.firstName} ${teachers.lastName}  `}
                </option>
              );
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
            onChange={(e) => setId(e.target.value)}
          ></input>
          <button
            className="postCourse"
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
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
