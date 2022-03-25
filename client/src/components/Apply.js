import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import color from "../img/color.jpg";
import { get, post, taBort } from "../util/apiStaffUtil";
import "../css/Apply.css";

function Apply() {
  const [id, setId] = useState(0);
  const [dateId, setDateId] = useState(Date.now());
  const [apply, setApply] = useState([]);
  const [education, setEducation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [getEducation, setGetEducation] = useState([]);

  let loggedIn = false;

  useEffect(() => {
    get("/Apply").then((response) => setApply(response.data));
    get("/Education").then((response) => setGetEducation(response.data));
  }, []);
  return (
    <div>
      <Header />
      <div className="containerApply">
        {loggedIn ? (
          <div className="applyContainer">
            <h1 className="h1Apply">Ansökningar</h1>
            <ul>
              {apply.map((applys) => {
                return (
                  <div>
                    <li className="applyName" key={applys.id}>
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
        ) : null}

        <div className="formApply">
          <div>
            <div className="inputApply">
              {!loggedIn ? (
                <h1 className="h1Apply">Ansökan till Utbildning</h1>
              ) : (
                <h1 className="h1Apply">Ta bort Ansökan</h1>
              )}
              {loggedIn ? (
                <div>
                  <select
                    className="selectApply"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    placeholder="Id för den du vill ändra"
                  >
                    <option>Välj id för att ta bort</option>
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
              {!loggedIn ? (
                <div>
                  <select
                    className="selectApply"
                    value={education}
                    onChange={(event) => setEducation(event.target.value)}
                  >
                    <option>Välj utbildning</option>
                    {getEducation.map((education) => {
                      return (
                        <option className="optionApply" key={id}>
                          {`${education.utbildning}  `}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : null}

              {!loggedIn ? (
                <div>
                  <input
                    className="inputApply"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First Name"
                  ></input>
                  <input
                    className="inputApply"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last Name"
                  ></input>
                  <input
                    className="inputApply"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    type="email"
                  ></input>
                </div>
              ) : null}
            </div>

            {loggedIn ? (
              <div>
                <button
                  className="applyBtn"
                  onClick={() => {
                    taBort(`/Apply/${id}`);
                    get("/Apply").then((response) => setApply(response.data));
                  }}
                >
                  Ta bort
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="applyBtn"
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
                    get("/Education").then((response) =>
                      setGetEducation(response.data)
                    );
                  }}
                >
                  Skicka Ansökan
                </button>
              </div>
            )}
          </div>
        </div>

        <img className="girlImg" src={color} alt="computer" />
      </div>

      <Footer />
    </div>
  );
}

export default Apply;
