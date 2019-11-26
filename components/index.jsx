import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menubar from "./menubar/Menubar";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/projects")
      .then(response => response.json())
      .then(result => {
        this.setState({
          projects: result
        });
      });
  }

  render() {
    return (
      <>
        <Menubar />
        <About />
        <Skills />
        <Projects projects={this.state.projects} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
