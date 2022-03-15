import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import bensenLogo from "../img/bensenLogo.png";

export default function Header() {
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
          <img className="logo" src={bensenLogo} alt="logo" />
        </ul>
      </header>
    </div>
  );
}
