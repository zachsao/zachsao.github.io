import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import profilePicture from "../assets/profile.jpg";

class Home extends Component {
  render() {
    return (
      <div id="home" className="section">
        <Container>
          <Row>
            <Col md="auto">
              <Image src={profilePicture} rounded width={500} />
            </Col>
            <Col md={6}>
              <h1>Hi, I'm Zacharia Sao</h1>
              <h5>Mobile developer</h5>
              <br />
              <p>
                I am a mobile software developer, specializing in Android with a
                passion for innovative technology. Over the course of six years,
                I have worked with a variety of companies, from small start-ups
                to renowned big tech corporations.
              </p>
              <br />
              <h5>Contact</h5>
              <a href="https://www.linkedin.com/in/zacharia-sao-4aa20850/">
                Linkedin
              </a>
              <p>Email: zachariasao25@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
