import React from "react";
import "./projects.css";

function Projects(props) {
  console.log(props);
  return (
    <ul>
      {props.projects.map(data => (
        <li key={data._id}>
          <a href={data.url}>{data.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
