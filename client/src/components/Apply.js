import React, { useState, useEffect } from "react";

import color from "../img/color.jpg";
import { get, post, put, erase } from "../utility/educationApi.js";
import "../css/App.css";

function Apply(props) {
  const [id, setId] = useState(0);
  const [dateId, setDateId] = useState(Date.now());
  const [apply, setApply] = useState([]);
  const [education, setEducation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [getEducation, setGetEducation] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    get("/Apply").then((response) => setApply(response.data));
    get("/Education").then((response) => setGetEducation(response.data));
  }, []);
  return (
    <div>
      <div className="container">
        {props.authorized ? (
          <div className="staffList">
            <h1 className="h1Staff">Ansökningar</h1>
            <div className="staffContainer">
              <ul>
                {apply.map((applys) => {
                  return (
                    <div>
                      <li className="staffName" key={applys.id}>
                        <p>
                          <b>id:</b> {applys.id}
                        </p>{" "}
                        <p>
                          {" "}
                          <b>Förnamn:</b> {applys.firstName}{" "}
                        </p>{" "}
                        <p>
                          <b>Efternamn:</b> {applys.lastName}
                        </p>{" "}
                        <p>
                          <b>Utbildning:</b> {applys.education}
                        </p>{" "}
                        <p>
                          <b>Mejl:</b> {applys.email}
                        </p>{" "}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}

        <div className="form">
          <div className="createFormDiv">
            <div className="input">
              {!props.authorized ? (
                <h1 className="h1Staff">Ansökan till Utbildning</h1>
              ) : (
                <h1 className="h1Staff">Ta bort Ansökan</h1>
              )}
              {props.authorized ? (
                <div>
                  <select
                    className="inputClass"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    placeholder="Id för den du vill ändra"
                  >
                    <option value="" selected display hidden>
                      Välj id
                    </option>
                    {apply.map((applys) => {
                      return (
                        <option className="option" key={applys.id}>
                          {`${applys.id}  `}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : null}

              <div>
                <select
                  className="inputClass"
                  value={education}
                  onChange={(event) => setEducation(event.target.value)}
                >
                  <option>Välj utbildning</option>
                  {getEducation.map((education) => {
                    return (
                      <option className="option" key={id}>
                        {`${education.Utbildning}  `}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="inputApply">
                <input
                  className="inputClass"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First Name"
                ></input>
                <input
                  className="inputClass"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last Name"
                ></input>
                <input
                  className="inputClass"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  type="email"
                ></input>
              </div>

              {props.authorized ? (
                <div className="btnSpace">
                  <button
                    className="inputBtn"
                    onClick={() => {
                      erase(`/Apply/${id}`);
                      get("/Apply").then((response) => setApply(response.data));
                    }}
                  >
                    Radera
                  </button>
                  <div className="space"></div>
                  <button
                    className="inputBtn"
                    onClick={() => {
                      put(`/Apply/${id}`, {
                        id: apply.id,
                        firstName: firstName,
                        lastName: lastName,
                        education: education,
                        email: email,
                      }).then((response) =>
                        get("/Apply").then((response) =>
                          setApply(response.data)
                        )
                      );
                    }}
                  >
                    Uppdatera
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="inputBtn"
                    onClick={() => {
                      post("/Apply", {
                        id: dateId,
                        firstName: firstName,
                        lastName: lastName,
                        education: education,
                        email: email,
                      });

                      setDateId(Date.now());
                      get("/Apply").then((response) => setApply(response.data));
                      get("/Education").then((response) => {
                        setGetEducation(response.data);

                        setPopup(true);
                      });
                    }}
                  >
                    Skicka Ansökan
                  </button>
                </div>
              )}
            </div>

            {popup ? (
              <div className="poppUp">
                <p>Tack för din ansökan!</p>

                <button className="poppupBtn" onClick={() => setPopup(false)}>
                  Ok
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {!props.authorized ? (
          <div>
            <img className="colorImg" src={color} alt="computer" />

            <div className="applyEducationPosition">
              <ul className="applyEducation">
                <h2 className="h1Staff">Våra Utbildningar</h2>
                {getEducation.map((educations) => {
                  return (
                    <li className="applyEducation">{educations.Utbildning}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Apply;
