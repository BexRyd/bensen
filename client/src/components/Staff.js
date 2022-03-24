import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import girl from "../img/girl.png";
import "../css/Staff.css";
import { get, post, put, taBort } from "../util/apiStaffUtil";

function Staff() {
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
      <Header />
      <div className="container">
        <div className="staffList">
          <h1 className="h1Staff">Personal Lista</h1>
          <div className="staffContainer">
            <ul>
              {staff.map((staff) => {
                return (
                  <div>
                    <li className="staffName" key={staff.id}>
                      <p>
                        <b>id:</b> {staff.id}
                      </p>{" "}
                      <p>
                        {" "}
                        <b>Förnamn:</b> {staff.firstName}{" "}
                      </p>{" "}
                      <p>
                        <b>Efternamn:</b> {staff.lastName}
                      </p>{" "}
                      <p>
                        <b>Yrke:</b> {staff.profession}
                      </p>{" "}
                      <p>
                        <b>Mejl:</b> {staff.email}
                      </p>{" "}
                      <p>
                        <b>Bank-konto:</b> {staff.account}
                      </p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="form">
          <div>
            <div className="input">
              <h1 className="h1Staff">Lägg till Personal</h1>
              <select
                className="select"
                value={id}
                onChange={(event) => setId(event.target.value)}
                placeholder="Id för den du vill ändra"
              >
                {staff.map((staff) => {
                  return (
                    <option className="option" key={staff.id}>
                      {`${staff.id}  `}
                    </option>
                  );
                })}
              </select>

              <select
                className="select"
                onChange={(event) => setProfession(event.target.value)}
                placeholder="Välj"
              >
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
                }).then((response) => console.log(response));
                get("/Staff").then((response) => setStaff(response.data));
              }}
            >
              Uppdatera
            </button>
            <button
              className="inputBtn"
              onClick={() => {
                taBort(`/Staff/${id}`);
                get("/Staff").then((response) => setStaff(response.data));
              }}
            >
              Ta bort
            </button>
          </div>
        </div>

        <img className="girlImg" src={girl} alt="computer" />
      </div>

      <Footer />
    </div>
  );
}
export default Staff;
