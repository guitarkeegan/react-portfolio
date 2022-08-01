import React from "react";
import "../styles/Header.css";
import Navigation from "../components/Navigation";

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
            <Navigation changeFn={changeFn} currentPage={currentPage} />


          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
