import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const TopNav = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userinfo = JSON.parse(sessionStorage.getItem("user"));
    setUser(userinfo);
  }, []);

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Exercise Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                welcome {user.name}
                <Button variant="primary">Logout </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
