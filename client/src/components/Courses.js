import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/App.css";
import { get, post, put, remove } from "../utilities/apiCourses"; // get the same from Rebecca to add api to teacher
import { useState, useEffect } from "react";
import codeRep from "../img/code_repeat.jpg";

function Courses() {
  const [id, setId] = useState("");
  const [counter, setCounter] = useState(Date.now());
  const [teacher, setTeacher] = useState([]);
  const [chooseTeacher, setChooseTeacher] = useState("");
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    get("/Courses").then((response) => setCourse(response.data));
  }, []);
  useEffect(() => {
    get("/Staff").then((response) => setTeacher(response.data));
  }, []);

  return (
    <div className="courseContainer">
      <Header setLoggInPage={(authorized) => setAuthorized(authorized)} />
      <div className="container">
        <div className="staffList">
          <h1 className="h1Staff">Kurslista</h1>
          <div className="staffContainer">
            <ul>
              {course.map((courses) => {
                return (
                  <div>
                    <li className="staffName" key={courses.courseId}>
                      {authorized ? (
                        <p>
                          <b>KursID:</b> {courses.courseId}
                        </p>
                      ) : null}
                      <p>
                        <b>Kursnamn:</b> {courses.courseName}
                      </p>
                      <p>
                        <b>Kursbeskrivning:</b> {courses.courseDescription}
                      </p>
                      <p>
                        <b>Lärare:</b> {courses.teacher}{" "}
                      </p>
                      <p>
                        <b>Kurslängd:</b> {courses.courseLength}
                      </p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {authorized ? (
          <div className="form">
            <div className="createFormDiv">
              <div className="input">
                <h2 className="h1Staff">Skapa kurs</h2>

                <input
                  value={courseName}
                  className="inputClass"
                  placeholder="Kursnamn"
                  onChange={(e) => setCourseName(e.target.value)}
                ></input>
                <input
                  value={courseDescription}
                  className="inputClass"
                  placeholder="Kursbeskrivning"
                  onChange={(e) => setCourseDescription(e.target.value)}
                ></input>
                {/* varför skriver den in lit om och om igen varje gång man klickar */}
                <select
                  className="inputClass"
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
                  className="inputClass"
                  value={courseLength}
                  placeholder="Kurslängd i veckor"
                  onChange={(e) => setCourseLength(e.target.value)}
                ></input>
                <input
                  className="inputClass"
                  value={id}
                  placeholder="KursID"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setId(e.target.value);
                  }}
                ></input>
              </div>

              <button
                className="inputBtn"
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
                Lägg till
              </button>
              <div className="space"></div>
              <button
                className="inputBtn"
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
              <div className="space"></div>
              <button
                className="inputBtn"
                onClick={() => {
                  remove(`/Courses/${id}`);
                  get("/Courses").then((response) => setCourse(response.data));
                }}
              >
                Radera
              </button>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <img className="codeRep" src={codeRep} alt="mobile with text" />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
