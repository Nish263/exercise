import React, { useRef, useState } from "react";
import { Form, Button, Row, Spinner, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../helper/axiosHelper";

export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter the email and password");
    }
    // setLoading(true);
    const { data } = await postLogin({ email, password });
    // setLoading(false);
    console.log(data);

    if (data.status === "success") {
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
      navigate("/dashboard");
      return;
      // if logging success store user data in session storage and redirect to dashboard else show error message
    }
  };
  return (
    <Row className="login-comp mt-5 py-5">
      <Form>
        <h3> Welcome to Exercise Tracker </h3>
        <hr />
        {/* {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>} */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleOnSubmit}>
          Login
        </Button>
        <div className="text-end">
          <Link to="/register"> Register here</Link>
        </div>
      </Form>
    </Row>
  );
};
