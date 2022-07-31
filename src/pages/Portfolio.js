import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio-container container">
      <div className="portfolio-title text-center">
        <h1>Portfolio</h1>
      </div>
      <div className="row">
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80" alt="pizza"></img>
        </div>
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="roll of film"></img>
        </div>
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="musical manuscript"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="person typing on a laptop"></img>
        </div>
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="lock sitting on a keyboard"></img>
        </div>
        <div className="col-4 project-container">
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt="clothes on a hanger"></img>
        </div>
      </div>
    </div>
  );
}
