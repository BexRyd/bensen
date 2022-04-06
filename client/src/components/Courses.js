import "../css/App.css";
import { get, post, put, erase } from "../utility/educationApi.js"; // get the same from Rebecca to add api to teacher
import { useState, useEffect, React } from "react";
import codeRep from "../img/code_repeat.jpg";

function Courses(props) {
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
  console.log(props);
  return (
    <div className="courseContainer">
      <div className="container">
        <div className="staffList">
          <h1 className="h1Staff">Kurslista</h1>
          <div className="staffContainer">
            <ul>
              {course.map((courses) => {
                return (
                  <div>
                    <li className="staffName" key={courses.id}>
                      {props.authorized ? (
                        <p>
                          <b>KursID:</b> {courses.id}
                        </p>
                      ) : null}
                      <p>
                        <b>Kursnamn:</b> {courses.courseName}
                      </p>
                      <p className="courseDescription">
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
        {props.authorized ? (
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
                  }).then(() =>
                    get("/Courses").then((response) => setCourse(response.data))
                  );
                }}
              >
                Uppdatera
              </button>
              <div className="space"></div>
              <button
                className="inputBtn"
                onClick={() => {
                  erase(`/Courses/${id}`);
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
    </div>
  );
}

export default Courses;
