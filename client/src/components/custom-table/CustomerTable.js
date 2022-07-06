import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const CustomerTable = () => {
  return (
    <div className="main-table fs-4">
      <ListGroup>
        <ListGroupItem>
          <span className="exercise">Exercise </span>
          <span className="time"> Time Spent</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="exercise">Exercise </span>
          <span className="time"> Time Spent</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="exercise">Exercise </span>
          <span className="time"> Time Spent</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="text-end">Total</span>
          <span className="text-end">Total</span>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
