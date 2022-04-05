import React, { useState, useEffect } from "react";

import girl from "../img/girl.png";
import "../css/App.css";
import { get, post, put, erase } from "../utility/educationApi.js";

function Staff(props) {
  const [id, setId] = useState(0);
  const [counter, setcounter] = useState(Date.now());
  const [staff, setStaff] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    get("/Staff").then((response) => setStaff(response.data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="staffList">
          <h1 className="h1Staff">Personal Lista</h1>
          <div className="staffContainer">
            <ul>
              {staff.map((staff) => {
                return (
                  <div>
                    <li className="staffName" key={staff.id}>
                      {props.authorized ? (
                        <p>
                          <b>id:</b> {staff.id}
                        </p>
                      ) : null}
                      <p>
                        {" "}
                        <b>Namn: </b>
                        {staff.firstName} {staff.lastName}
                      </p>
                      <p>
                        <b>Yrke:</b> {staff.profession}
                      </p>
                      <p>
                        <b>Mejl:</b> {staff.email}
                      </p>
                      {props.authorized ? (
                        <p>
                          <b>Bank-konto:</b> {staff.account}
                        </p>
                      ) : null}
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
                <h1 className="h1Staff">Lägg till Personal</h1>
                <select
                  className="inputClass"
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                >
                  <option value="" selected display hidden>
                    Välj id
                  </option>
                  {staff.map((staff) => {
                    return (
                      <option className="option" key={staff.id}>
                        {`${staff.id}  `}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="inputClass"
                  onChange={(event) => setProfession(event.target.value)}
                  placeholder="Välj"
                >
                  <option value="" selected disabled hidden>
                    Välj personal
                  </option>
                  <option>lärare</option>
                  <option>Utbildningsledare</option>
                </select>

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
                <input
                  className="inputClass"
                  value={account}
                  onChange={(event) => setAccount(event.target.value)}
                  placeholder="Bank konto"
                ></input>
              </div>

              <button
                className="inputBtn"
                onClick={() => {
                  post("/Staff", {
                    id: counter,
                    firstName: firstName,
                    lastName: lastName,
                    profession: profession,
                    email: email,
                    account: account,
                  });

                  setcounter(Date.now());
                  get("/Staff").then((response) => setStaff(response.data));
                }}
              >
                Lägg till
              </button>

              <div className="space"></div>
              <button
                className="inputBtn"
                onClick={() => {
                  put(`/Staff/${id}`, {
                    id: staff.id,
                    firstName: firstName,
                    lastName: lastName,
                    profession: profession,
                    email: email,
                    account: account,
                  }).then((response) =>
                    get("/Staff").then((response) => setStaff(response.data))
                  );
                }}
              >
                Uppdatera
              </button>
              <div className="space"></div>
              <button
                className="inputBtn"
                onClick={() => {
                  erase(`/Staff/${id}`);
                  get("/Staff").then((response) => setStaff(response.data));
                }}
              >
                Radera
              </button>
            </div>
          </div>
        ) : (
          <div>
            <img className="girlImg" src={girl} alt="computer" />
          </div>
        )}
      </div>
    </div>
  );
}
export default Staff;
