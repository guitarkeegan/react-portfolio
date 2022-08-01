import React from "react";

export default function Resume() {
// List of technical skills and a link to a downloadable google doc of my resume.
    return (
  <div className="container mt-5">
  <div className="text-center">
    <h1>Resume</h1>
    </div>
    <div className="text-center">
    <h2 className="mt-4">Technical Skills</h2>
      <ul className="skills-list mt-5">
        <li>Languages: JavaScript, Python, HTML</li>
        <li>Backend: node.js, express.js, flask</li>
        <li>Frontend: bootstrap, react, jquery, handlebars, ejs, jinja</li>
        <li>
          Databases: mysql, MongoDB, postgres, sequelize, mongoose,
          flask-sqlalchemy
        </li>
        <li>CLI tools: Inquirer</li>
        <li>Desktop GUI: tkinter</li>
        <li>Data-analysis: jupyter-notebook</li>
        <li>Web-Scraping/automation: beautiful soup, selenium</li>
      </ul>
    </div>
    <div className="d-flex justify-content-center">
    <a target="_blank" rel="noreferrer noopener"  href="https://docs.google.com/document/d/1SSyXc4YcEXbGB3rpCgV6rp-PNzDXlinDyFhn0qCCs5w/edit?usp=sharing" className="btn resume-button">View Resume</a>
    </div>
  </div>
    )
}
