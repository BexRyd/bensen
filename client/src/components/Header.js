import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import bensenLogo from "../img/bensenLogo.png";
import { post } from "../utility/educationApi.js";

export default function Header(props) {
  const [loggaIn, setLoggaIn] = useState(false);
  const [user, setUser] = useState("");
  const [passWord, setPassWord] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [popup, setpopup] = useState(false);

  return (
    <div>
      <div className="headerBackgroundImg"></div>
      <header>
        <ul className="headerList">
          <li>
            <NavLink
              className="link"
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "lightblue" } : { color: "white" }
              }
            >
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/Staff"
              style={({ isActive }) =>
                isActive ? { color: "lightblue" } : { color: "white" }
              }
            >
              Personal
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/Courses"
              style={({ isActive }) =>
                isActive ? { color: "lightblue" } : { color: "white" }
              }
            >
              Kurser
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/Education"
              style={({ isActive }) =>
                isActive ? { color: "lightblue" } : { color: "white" }
              }
            >
              Utbildning
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/Apply"
              style={({ isActive }) =>
                isActive ? { color: "lightblue" } : { color: "white" }
              }
            >
              Ansökan
            </NavLink>
          </li>
          {!authorized ? (
            <button
              className="inloggBtnHeader"
              onClick={() => setLoggaIn(true)}
            >
              Logga In
            </button>
          ) : (
            <button
              className="inloggBtnHeader"
              onClick={() => {
                setLoggaIn(false);
                setAuthorized(false);
                props.setLoggInPage(false);
              }}
            >
              Logga Ut
            </button>
          )}
          <img className="logo" src={bensenLogo} alt="logo" />
        </ul>
      </header>
      {loggaIn ? (
        <div>
          <div className="formHeader">
            <h1>Logga in</h1>
            <input
              className="inputHeader"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="Användarnamn"
              required
            ></input>
            <input
              className="inputHeader"
              value={passWord}
              onChange={(event) => setPassWord(event.target.value)}
              required
              placeholder="Lösenord"
            ></input>
            <div className="btnBox">
              <button
                className="btnHeader"
                onClick={() => {
                  post("/Loggin", {
                    user: user,
                    passWord: passWord,
                  }).then((response) => {
                    setAuthorized(response.data);
                    props.setLoggInPage(response.data);

                    if (response.data === false) {
                      setpopup(true);
                    }

                    setLoggaIn(false);
                  });
                }}
              >
                Logga in
              </button>
              <button className="btnHeader" onClick={() => setLoggaIn(false)}>
                Avbryt
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {popup ? (
        <div className="popUp">
          <p>Gick ej att logga in.</p>
          <p>Fel Användarnamn eller Lösenord</p>
          <button className="popupBtn" onClick={() => setpopup(false)}>
            Ok
          </button>
        </div>
      ) : null}
    </div>
  );
}
