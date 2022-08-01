import React from "react";

export default function Project({ project }) {
    console.log(project);
  return (
    <div className="col-4 project-container">
      <img
        className="img-fluid"
        src={project.imgUrl}
        alt={project.alt}
      ></img>
      <div>
        <h5 className="card-title">
          {project.title}:
          <a href={project.site}>site</a> |
          <a href={project.repository}>repository</a>
        </h5>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
