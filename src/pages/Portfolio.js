import React from "react";


// const styles = {
//     imgContainer: {

//     }
// }

export default function Portfolio() {
  return (
    <div className="portfolio-container container">
      <div className="portfolio-title text-center">
        <h1>Portfolio</h1>
      </div>
      <div className="row text-center">
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="fancy food on plates"></img>
          <div>
            <h5 className="card-title">Hungry Eyes</h5>
            <p>Find your favorite foods nearby! </p>
          </div>
        </div>
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="roll of film"></img>
          <div>
            <h5 className="card-title">Review Flix</h5>
            <p>Reviews for Netflix movies</p>
          </div>
        </div>
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="musical manuscript"></img>
          <div>
            <h5 className="card-title">Music-Tech-Blog</h5>
            <p>A blog about music and code.</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="person typing on a laptop"></img>
          <div>
            <h5 className="card-title">Social Network API</h5>
            <p>API REST routes for social network site</p>
          </div>
        </div>
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="lock sitting on a keyboard"></img>
          <div>
            <h5 className="card-title">Password Generator</h5>
            <p>Generate a random password!</p>
          </div>
        </div>
        <div className="col-4 project-container">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="clothes on a hanger"></img>
          <div>
            <h5 className="card-title">Poshmark Follower</h5>
            <p>Follow the followers of your favorite poshmarker!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
