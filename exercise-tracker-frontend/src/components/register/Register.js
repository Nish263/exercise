import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Row className="login-comp mt-5 py-5">
      <Form>
        <h3> Get Registered here </h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          already have a account?
          <Link to="/"> Login Here</Link>
        </div>
      </Form>
    </Row>
  );
};
