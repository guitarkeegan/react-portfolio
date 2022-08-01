import React from "react";
import Navigation from "../components/Navigation";

// header is passed 2 props, which will in tern be passed to the Navigation component
function Header({changeFn, currentPage}) {
// A bootstrap navbar is setup here, and calls the Navigation component to display the links for the other pages.
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
