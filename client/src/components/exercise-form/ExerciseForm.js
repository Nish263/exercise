import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

const initialState = {
  title: "",
  hour: "",
  date: "",
};
export const ExerciseForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formData);
  };
  return (
    <div className="main-form mt-5">
      <Form onSubmit={handleOnSubmit}>
        <Row className=" g-3">
          <Col md="4">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="exercise name"
              name="title"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="3">
            <Form.Control
              type="number"
              className="form-control"
              placeholder="hour"
              name="hour"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="3">
            <Form.Control
              type="date"
              className="form-control"
              name="date"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <Button className="text-bold" variant="info" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
