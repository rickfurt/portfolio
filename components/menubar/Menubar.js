import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menubar.css";

class Menubar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ricardo Furtado</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#about">About</Nav.Link> */}
            <Nav.Link href="#experience-tab">Experience</Nav.Link>
            <Nav.Link href="#education-tab">Education</Nav.Link>
            <Nav.Link href="#skill-tab">Skills</Nav.Link>
            <Nav.Link href="#projects-tab">Projects</Nav.Link>
            <Nav.Link href="#contact-tab">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menubar;
