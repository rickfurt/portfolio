import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import {
  DiMongodb,
  DiJavascript1,
  DiBootstrap,
  DiNpm,
  DiHeroku,
  DiGithubBadge,
  DiNodejsSmall,
  DiJqueryLogo
} from "react-icons/di";

import "./skills.css";

export default class Skills extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <FaHtml5 className="skill-icons" />
            <FaCss3Alt className="skill-icons" />
            <DiJavascript1 className="skill-icons" />
            <FaSass className="skill-icons" />
            <FaReact className="skill-icons" />
            <DiMongodb className="skill-icons" />
            <DiBootstrap className="skill-icons" />
            <DiNpm className="skill-icons" />
            <DiHeroku className="skill-icons" />
            <DiGithubBadge className="skill-icons" />
            <DiNodejsSmall className="skill-icons" />
            <DiJqueryLogo className="skill-icons" />
          </Col>
        </Row>
      </Container>
    );
  }
}
