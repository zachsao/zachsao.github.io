import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Spacer from "./Spacer";
import profilePicture from "../assets/profile.jpg";

class Home extends Component {
  render() {
    return (
      <div id="home" className="section">
        <Container className="text-center">
          <Image
            src={profilePicture}
            width={300}
            height={300}
            className="circle-image"
          />
          <Spacer size={100} />
          <p className="display-1 fw-bold typewriter d-inline-block">
            <span style={{ color: "var(--accent)" }}>Hi, </span>
            I'm Zacharia 👋
          </p>
          <h5 className="text-muted">Mobile developer</h5>
          <br />
          <p>
            I am a mobile software developer, specializing in Android with a
            passion for innovative technology, based in Montreal. Over the
            course of six years, I have worked with a variety of companies, from
            small start-ups to renowned big tech corporations.
          </p>
          <br />
          <Row className="d-flex justify-content-center">
            <Col className="col-auto">
              <SocialIcon
                className="p-2"
                url="https://www.linkedin.com/in/zacharia-sao-4aa20850/"
              />
            </Col>
            <Col className="col-auto">
              <SocialIcon
                url="https://www.github.com/zachsao"
                bgColor="#f5f5f5"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
