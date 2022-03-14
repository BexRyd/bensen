import React from "react";

function Home() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link className="currentPage" to="/">
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
