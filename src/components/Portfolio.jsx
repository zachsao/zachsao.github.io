import React, { Component } from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import appstoreLogo from "../assets/appstore-badge.svg";
import playstoreLogo from "../assets/google-play-badge.png";
import projectList from "../data/projects.json";
import Spacer from "./Spacer";
class Portfolio extends Component {
  render() {
    const projects = projectList.map((project, index) => (
      <Project project={project} index={index} />
    ));
    return (
      <div id="projects" className="section">
        <Container className="mt-3">
          <h1 className="header text-center">Projects</h1>
          <Spacer size={100} />
          {projects}
        </Container>
      </div>
    );
  }
}

class Project extends Component {
  render() {
    if (this.props.index % 2 == 0) {
      return (
        <>
          <Row md={2} className="justify-content-md-center mb-5">
            <Col>
              <img src={this.props.project.screenshots} width={500} />
            </Col>
            <Col md={5}>
              <ProjectDescription project={this.props.project} />
            </Col>
          </Row>
          {this.props.index != 3 && <Spacer size={50} />}
        </>
      );
    }
    return (
      <>
        <Row md={2} className="justify-content-md-center mb-5">
          <Col md={5}>
            <ProjectDescription project={this.props.project} />
          </Col>

          <Col className="d-flex justify-content-md-center">
            <img src={this.props.project.screenshots} width={500} />
          </Col>
        </Row>
        {this.props.index != 3 && <Spacer size={50} />}
      </>
    );
  }
}

class ProjectDescription extends Component {
  render() {
    return (
      <>
        <Row className="d-flex align-items-center">
          <Col md="auto">
            <Image src={this.props.project.imagePath} rounded width={50} />
          </Col>
          <Col>
            <p className="mt-3 display-6">{this.props.project.name}</p>
          </Col>
        </Row>
        <p className="mb-2 text-muted">{this.props.project.year}</p>
        <p>{this.props.project.description}</p>
        <p>Features:</p>
        <ul>
          {this.props.project.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
        <p>Tech stack: {this.props.project.tech}</p>
        <Row>
          {this.props.project.playStoreLink && (
            <Col md="auto">
              <a href={this.props.project.playStoreLink}>
                <img src={playstoreLogo} width={150} />
              </a>
            </Col>
          )}
          {this.props.project.appStoreLink && (
            <Col md="auto" className="d-flex align-items-center">
              <a href={this.props.project.appStoreLink}>
                <img src={appstoreLogo} width={130} />
              </a>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default Portfolio;
