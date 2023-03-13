import React, { Component } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import appstoreLogo from "../assets/appstore.svg";
import playstoreLogo from "../assets/playstore.svg";
import githubLogo from "../assets/github.svg";
import projectList from "../data/projects.json";

class Portfolio extends Component {
  render() {
    const projects = projectList.map((project) => (
      <Project project={project} />
    ));
    return (
      <div id="portfolio" className="section">
        <Container className="mt-3">
          <h1 className="header text-center text-muted">Projects</h1>
          <br />
          <br />
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {projects}
          </Row>
        </Container>
      </div>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <>
        <Col>
          <Card bg="dark" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <Card.Body className="text-center">
              <Card.Img
                src={this.props.project.imagePath}
                className="card-image"
              />
              <Card.Title className="mt-3 display-6">
                {this.props.project.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.project.year}
              </Card.Subtitle>
              <Card.Text>{this.props.project.description}</Card.Text>
              <Row>
                <Col>
                  <a href={this.props.project.githubLink}>
                    <img src={githubLogo} width={50} />
                  </a>
                </Col>
                {this.props.project.playStoreLink && (
                  <Col>
                    <a href={this.props.project.playStoreLink}>
                      <img src={playstoreLogo} width={50} />
                    </a>
                  </Col>
                )}
                {this.props.project.appStoreLink && (
                  <Col>
                    <a href={this.props.project.appStoreLink}>
                      <img src={appstoreLogo} width={50} />
                    </a>
                  </Col>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default Portfolio;
