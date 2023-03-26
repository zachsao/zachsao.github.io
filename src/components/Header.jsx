import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className="sticky-nav">
          <Container>
            <Navbar.Brand href="#home" style={{ color: "#A9CEC2" }}>
              Zacharia Sao
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
