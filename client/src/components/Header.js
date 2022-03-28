import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import bensenLogo from "../img/bensenLogo.png";

export default function Header() {
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
          <img className="logo" src={bensenLogo} alt="logo" />
        </ul>
      </header>
    </div>
  );
}
