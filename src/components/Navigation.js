import React from "react";

export default function Navigation({ changeFn, currentPage }) {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          aria-current="page"
          onClick={() => {
            changeFn("Home");
          }}
        >
          Card
        </a>
      </li>
      <li className="nav-item">
        <a
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          onClick={() => {
            changeFn("About");
          }}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            changeFn("Portfolio");
          }}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          onClick={() => {
            changeFn("Resume");
          }}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          onClick={() => changeFn("Contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
