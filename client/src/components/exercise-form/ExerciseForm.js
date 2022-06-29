import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

export const ExerciseForm = () => {
  return (
    <div className="main-form mt-5">
      <Row className=" g-3">
        <Col md="4">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="exercise name"
          />
        </Col>
        <Col md="3">
          <Form.Control
            type="number"
            className="form-control"
            placeholder="hour"
          />
        </Col>
        <Col md="3">
          <Form.Control type="date" className="form-control" />
        </Col>
        <Col md="2">
          <Button className="text-bold" variant="info" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
