import React, {useState, useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
// The project object is passed in and used to populate the related field
export default function Project({ project }) {
    
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
       setLoading(false);
     }, 1000);
   },[]);

  return (
    <div className="col-12 col-md-4 project-container">
    {loading ?
    <Spinner animation="grow"/>
    :
      <img
        className="img-fluid project-img"
        src={project.imgUrl}
        alt={project.alt}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}

      ></img>
    }
      <div>
        <h5 className="card-title">
          {project.title}:
          <a href={project.site}> site</a> |
          <a href={project.repository}> repository</a>
        </h5>
        <p className="project-description">{project.description}</p>
        <div className="tech-description">{project.expandedText}</div>
        
      </div>
    </div>
  )
}
