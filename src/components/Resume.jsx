import React, { Component } from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import jobs from "../data/jobs.json";

class Resume extends Component {
  render() {
    const jobCards = jobs.map((job) => <Job job={job} />);
    const educationSection = (
      <>
        <h5>Software Engineering, Ms.</h5>
        <p>2019 | Ecole Nationale Supérieure des Mines de Douai, France</p>
      </>
    );
    return (
      <div id="experience" className="section">
        <Container>
          <h1 className="header text-center text-muted">experience</h1>
          <br />
          <br />
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {jobCards}
          </Row>
        </Container>
      </div>
    );
  }
}

class Job extends Component {
  render() {
    return (
      <>
        <Col>
          <Card
            bg="dark"
            style={{ paddingTop: 40, paddingBottom: 40 }}
            className="h-100"
          >
            <Card.Body className="text-center">
              <Card.Img src={this.props.job.logo} className="card-image" />
              <Card.Title className="mt-3">
                {this.props.job.title} | {this.props.job.company}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.job.dates}
              </Card.Subtitle>
              <Card.Text>{this.props.job.tasks}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default Resume;
