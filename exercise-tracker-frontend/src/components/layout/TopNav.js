import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const TopNav = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Exercise Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
