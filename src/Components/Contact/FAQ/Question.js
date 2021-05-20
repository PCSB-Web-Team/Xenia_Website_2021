import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Question.css";
const Question = ({ question, answer, sr }) => {
  return (
    <>
      <Card style={{ background: "rgba(0,0,0,0.5)" }}>
        <Card.Header className="FAQ_header">
          <Accordion.Toggle
            style={{ background: "rgba(255,255,255,0.2)", color: "#ffff" }}
            as={Card.Header}
            variant="link"
            eventKey={sr}
          >
            {question}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={sr}>
          <Card.Body style={{ color: "white", background: "transparent" }}>
            {answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

// #00b4d8

export default Question;
