import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import guy from "../img/guy.png";
import { get, post, put, erase } from "../utility/educationApi";
import { useState, useEffect } from "react";
import "../css/Education.css";

function Education() {
  const [id, setId] = useState(Date.now());
  const [newId, setNewId] = useState(Date.now());

  const [leaders, setLeaders] = useState([]);
  const [courses, setCourses] = useState([]);
  const [eventLists, seteventLists] = useState([]);

  const [chooseCourse, setChooseCourse] = useState("");
  const [chooseEvent, setChooseEvent] = useState("");
  const [chooseLeader, setChooseLeader] = useState("");
  const [chooseDescription, setChooseDescription] = useState("");

  useEffect(() => {
    get("/Education").then((response) => seteventLists(response.data));
    get("/Courses").then((response) => setCourses(response.data));
    get("/Staff").then((response) => setLeaders(response.data));
  }, []);

  return (
    <div>
      <Header />

      <div className="Box">
        <div className="createdEducationBox">
          {eventLists.map((eventList) => {
            return (
              <div>
                <li className="getLi" key={eventList.id}>
                  <p>
                    <b>id:</b> {eventList.id}
                  </p>{" "}
                  <p>
                    {" "}
                    <b>Utbildningsledare:</b> {eventList.Utbildningsledare}{" "}
                  </p>{" "}
                  <p>
                    <b>Utbildning:</b> {eventList.Utbildning}
                  </p>{" "}
                  <p>
                    <b>Kurs:</b> {eventList.Kursnamn}
                  </p>{" "}
                  <p>
                    <b>Beskrivning:</b> {eventList.Beskrivning}
                  </p>{" "}
                </li>
              </div>
            );
          })}
        </div>

        <div className="createEducationbox">
          <input
            className="input1Id"
            value={eventLists.id}
            onChange={(event) => {
              console.log(event.target.value);
              setId(event.target.value);
            }}
            placeholder="Id för den du vill ändra"
          ></input>
          <select
            className="leader1select"
            value={chooseLeader}
            onChange={(event) => setChooseLeader(event.target.value)}
          >
            {" "}
            <option value="" selected disabled hidden>
              Välj Utbildningsledare
            </option>
            {leaders.map((leader) => {
              if (leader.profession === "Utbildningsledare") {
                return (
                  <option className="educationLi" key={leaders.id}>
                    {`${leader.firstName} ${leader.lastName} `}
                  </option>
                );
              }
            })}
          </select>

          <input
            className="event1select"
            value={chooseEvent}
            onChange={(event) => setChooseEvent(event.target.value)}
            placeholder="Utbildningsnamn"
          ></input>

          <select
            className="course1select"
            value={chooseCourse}
            onChange={(event) => setChooseCourse(event.target.value)}
          >
            {" "}
            <option value="" selected disabled hidden>
              Välj Kurs
            </option>
            {courses.map((course) => {
              return (
                <option className="CourseLi" key={course.id}>
                  {` ${course.courseName}`}
                </option>
              );
            })}
          </select>

          <textarea
            className="beskrivningBox"
            value={chooseDescription}
            onChange={(event) => setChooseDescription(event.target.value)}
            rows="10"
            cols="30"
          ></textarea>

          <button
            onClick={() => {
              post("/Education", {
                id: newId,
                Utbildningsledare: chooseLeader,
                Utbildning: chooseEvent,
                Kursnamn: chooseCourse,
                Beskrivning: chooseDescription,
              }).then((response) => console.log(response));
              setNewId(Date.now());
              get("/Education").then((response) =>
                seteventLists(response.data)
              );
              get("/Courses").then((response) => setCourses(response.data));
              get("/Staff").then((response) => setLeaders(response.data));
            }}
          >
            CREATE
          </button>

          <button
            onClick={() => {
              put(`/Education/${id}`, {
                id: eventLists.id,
                Utbildningsledare: chooseLeader,
                Utbildning: chooseEvent,
                Kursnamn: chooseCourse,
                Beskrivning: chooseDescription,
              }).then((response) => console.log(response));
              get("/Education").then((response) =>
                seteventLists(response.data)
              );
            }}
          >
            UPDATE
          </button>

          <button
            onClick={() => {
              erase(`/Education/${id}`);
              {
                get("/Education").then((response) =>
                  seteventLists(response.data)
                );
              }
            }}
          >
            DELETE
          </button>
        </div>

        {/* <img className="girlImg" src={guy} alt="computer" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Education;
