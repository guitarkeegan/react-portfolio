import React from "react";
// Navigation is passed a function to update the current page, as well as the currentPage variable, which is used to conditionally render the link components. The current page link will condintionally be marked active.

// Each link will also call the changeFn and pass in the corrisponding page name.
export default function Navigation({ changeFn, currentPage }) {
  return (
    <ul className="navbar-nav">
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
