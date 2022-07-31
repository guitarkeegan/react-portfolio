import React, {useState} from "react";
import "../styles/Header.css";

function Header({changeFn, currentPage}) {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => {changeFn("Home")}}>
                  Card
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} onClick={() => {changeFn("About")}}>
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => {changeFn("Portfolio")}}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => {changeFn("Resume")}}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => changeFn("Contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
