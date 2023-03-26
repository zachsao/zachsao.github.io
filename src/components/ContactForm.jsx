import React, { Component, useRef } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import undrawPath from "../assets/undraw.svg";
import emailjs from "@emailjs/browser";

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
        <Row>
          <Col>
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Let's make an app together"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRequest">
                <Form.Label>Request</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  as={"textarea"}
                  rows={10}
                  placeholder="Project information or inquiry"
                  required
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
    </div>
  );
}

export default ContactForm;
