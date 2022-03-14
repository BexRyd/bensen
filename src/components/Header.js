import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <ul>
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
            <Link className="link" to="/Course">
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
        </ul>
      </header>
    </div>
  );
}
