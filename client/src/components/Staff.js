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
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState(0);

  useEffect(() => {
    get("/Staff").then((response) => setStaff(response.data));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="form">
          <div>
            <div className="input">
              <input
                value={id}
                onChange={(event) => setId(event.target.value)}
                placeholder="Id för den du vill ändra"
              ></input>
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name"
              ></input>
              <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last Name"
              ></input>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                type="email"
              ></input>
              <input
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
                  email: email,
                  account: account,
                });

                setcounter(Date.now());
                get("/Staff").then((response) => setStaff(response.data));
              }}
            >
              Create
            </button>
            <button
              onClick={() => {
                put(`/Staff/${id}`, {
                  id: staff.id,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  account: account,
                }).then((response) => console.log(response));
                get("/Staff").then((response) => setStaff(response.data));
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                taBort(`/Staff/${id}`);
                get("/Staff").then((response) => setStaff(response.data));
              }}
            >
              DELETE
            </button>

            <div className="staffList">
              <ul>
                {staff.map((staff) => {
                  return (
                    <div>
                      <li className="staffName" key={staff.id}>
                        {` Id:${staff.id}   ${staff.firstName}      ${staff.lastName}       ${staff.email}    ${staff.account}`}
                      </li>{" "}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <img className="girlImg" src={girl} alt="computer" />
      </div>

      <Footer />
    </div>
  );
}
export default Staff;
