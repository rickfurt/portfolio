import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../../public/profile.jpg";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={3} xlg={6}>
                <Image src={profile} className="profile-img" rounded />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xlg={6}>
                <h1>About me</h1>
                <p className="about-text">
                  I started programming in 2016, since then I’ve been gaining
                  knowledge and improving my skills through courses and also
                  being mentored by three very experienced software engineers.
                  We meet every week to discuss tech concepts and tools and
                  exercise my problem-solving skills and my pair programming
                  capabilities. I’m very present at local meet ups such as
                  SydJs, MusesJs, Software Crafters, React Js Sydney, Node js
                  Sydney, etc.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  }
}
