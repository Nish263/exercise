import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export const TopNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userinfo = JSON.parse(sessionStorage.getItem("user"));
    setUser(userinfo);
  }, []);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Exercise Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                {`welcome ${user.name}`}
                <Button variant="primary" onClick={handleOnLogout}>
                  Logout{" "}
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/">
                  <Nav.Link className="text-dark">Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Nav.Link className="text-dark">Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
