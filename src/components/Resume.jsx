import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import jobs from "../data/jobs.json";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    const jobSections = jobs.map((job) => <JobSection job={job} />);
    const educationSection = (
      <>
        <h5>Software Engineering, Ms.</h5>
        <p>2019 | Ecole Nationale Supérieure des Mines de Douai, France</p>
      </>
    );
    return (
      <div id="resume" className="section">
        <Container>
          <h1 className="header text-center text-muted">experience</h1>
          <br />
          <br />
          <ResumeSection title={"Work Experience 💼"} content={jobSections} />
          <br />
          <ResumeSection title={"Education 📚👨🏽‍🎓"} content={educationSection} />
          <br />
          <ResumeSection title={"Skills 💻"} content={<Skills />} />
        </Container>
      </div>
    );
  }
}

class ResumeSection extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col md={5}>
            <h1>{this.props.title}</h1>
          </Col>
          <Col md={6}>{this.props.content}</Col>
        </Row>
      </>
    );
  }
}

class JobSection extends Component {
  render() {
    return (
      <>
        <h5>{this.props.job.title}</h5>
        <p>
          {this.props.job.dates} | {this.props.job.company}
        </p>
        <p>{this.props.job.tasks}</p>
        <br />
      </>
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

export default Resume;
