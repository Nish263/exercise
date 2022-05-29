import React from "react";
import { Button } from "react-bootstrap";

export const Form = () => {
  return (
    <Row className=" g-3">
      <Col md="4">
        <Form.Control
          type="text"
          className="form-control"
          placeholder="exercise name"
        />
      </Col>
      <Col md="4">
        <Form.Control
          type="number"
          className="form-control"
          placeholder="hour"
        />
      </Col>
      <Col md="2">
        <Form.Control type="date" className="form-control" />
      </Col>
      <Col md="2">
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Col>
    </Row>
  );
};
