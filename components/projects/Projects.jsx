import React from "react";
import "./projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects(props) {
  const projects = props.projects;

  return (
    <Container>
      <h2>Projects</h2>
      <Row>
        {projects.map(data => (
          <div className="project-card" key={data._id}>
            <Card style={{ width: "17rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              {/* <hr /> */}
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button
                  href={"http://" + data.url}
                  target="_blank"
                  variant="primary"
                >
                  Go
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
