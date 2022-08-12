import React, {useState} from "react";
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
// The project object is passed in and used to populate the related field
export default function Project({ project }) {
    
  const [open, setOpen] = useState(false);

  return (
    <div className="col-12 col-md-4 project-container">
      <Button className="project-btn" variant="none" >
      <img
        className="img-fluid project-img"
        src={project.imgUrl}
        alt={project.alt}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      ></img>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {project.expandedText}
        </div>
      </Collapse>
      <div>
        <h5 className="card-title">
          {project.title}:
          <a href={project.site}> site</a> |
          <a href={project.repository}> repository</a>
        </h5>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
