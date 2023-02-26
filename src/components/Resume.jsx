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
      <>
        <Container>
          <ResumeSection title={"Work Experience 💼"} content={jobSections} />
          <br />
          <ResumeSection title={"Education 📚👨🏽‍🎓"} content={educationSection} />
          <br />
          <ResumeSection title={"Skills 📱💻"} content={<Skills />} />
        </Container>
      </>
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

export default Resume;
