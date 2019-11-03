import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menubar from "./menubar/Menubar";
import About from "./about/About";
import Skills from './skills/Skills'

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Menubar />
        <About />
        <Skills />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
