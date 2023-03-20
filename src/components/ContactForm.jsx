import React, { Component } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import undrawPath from "../assets/undraw.svg";

class ContactForm extends Component {
  render() {
    return (
      <Container>
        <h1 className="header text-center">contact</h1>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="john.doe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Let's make an app together"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRequest">
                <Form.Label>Request</Form.Label>
                <Form.Control
                  type="text"
                  as={"textarea"}
                  rows={10}
                  placeholder="Project information or inquiry"
                />
              </Form.Group>
              <Button variant="accent" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="align-items-end col-auto align-self-end">
            <Image src={undrawPath} height={350} className="align-self-end" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
