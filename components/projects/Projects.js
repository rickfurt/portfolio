import React from "react";
import "./projects.css";

function Projects(props) {
  return (
    <ul>
      {props.projects.map(data => (
        <li key={data.ObjectID}>
          <a href={data.url}>{data.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
