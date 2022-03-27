import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import bensenLogo from "../img/bensenLogo.png";
import { get } from "../util/apiStaffUtil";

export default function Header() {
  let loggedIn = false;
  const [loggaIn, setLoggaIn] = useState(false);
  const [user, setUser] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <div>
      <div className="headerBackgroundImg"></div>
      <header>
        <ul className="headerList">
          <li>
            <Link className="link" to="/">
              Hem
            </Link>
          </li>
          <li>
            <Link className="link" to="/Staff">
              Personal
            </Link>
          </li>
          <li>
            <Link className="link" to="/Courses">
              Kurser
            </Link>
          </li>
          <li>
            <Link className="link" to="/Education">
              Utbildning
            </Link>
          </li>
          <li>
            <Link className="link" to="/Apply">
              Ansökan
            </Link>
          </li>
          {!loggedIn ? (
            <button
              className="inloggBtnHeader"
              onClick={() => setLoggaIn(true)}
            >
              Logga In
            </button>
          ) : (
            <button className="inloggBtnHeader">Logga Ut</button>
          )}
          <img className="logo" src={bensenLogo} alt="logo" />
        </ul>
      </header>
      {loggaIn ? (
        <div>
          <form className="formHeader">
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
            <button onClick={() => setLoggaIn(false)} className="btnHeader">
              Logga in
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
