import React, { Component, useRef } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import undrawPath from "../assets/undraw.svg";
import emailjs from "@emailjs/browser";
import Spacer from "./Spacer";

function ContactForm() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div id="contact">
      <Container>
        <h1 className="header text-center">contact</h1>
        <Spacer size={100} />
        <Row className="d-flex justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center"
            md={5}
          >
            <Image src={undrawPath} height={350} />
          </Col>
          <Col md={7}>
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#202020", color: "#f5f5f5" }}
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "#202020",
                    color: "#f5f5f5",
                  }}
                  type="email"
                  name="user_email"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#202020", color: "#f5f5f5" }}
                  type="text"
                  name="subject"
                  placeholder="Let's make an app together"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRequest">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#202020", color: "#f5f5f5" }}
                  type="text"
                  name="message"
                  as={"textarea"}
                  rows={6}
                  placeholder="Project information or inquiry"
                  required
                />
              </Form.Group>
              <Button variant="accent" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
