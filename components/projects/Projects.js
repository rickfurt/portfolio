import React from "react";
import "./projects.css";

function Projects(props) {
  const projects = props.projects;

  return (
    <ul>
      {projects.map(data => (
        <li key={data._id}>
          <a href={data.url}>{data.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
