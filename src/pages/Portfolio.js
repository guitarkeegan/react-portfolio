import React from "react";
import projects from '../components/projects';
import Project from "../components/Project";
// Page will call the Project component several times and pass in an object from the projects array, which holds all of the data related to each project.
export default function Portfolio() {
  return (
    <div className="portfolio-container container">
      <div className="portfolio-title text-center">
        <h1>Portfolio</h1>
      </div>
      <div className="row text-center">
      
      <Project project={projects[0]} />
      <Project project={projects[1]} />
      <Project project={projects[2]} />
        
        
      </div>
      <div className="row text-center">

      <Project project={projects[3]} />
      <Project project={projects[4]} />
      <Project project={projects[5]} />

      </div>
    </div>
  );
}
