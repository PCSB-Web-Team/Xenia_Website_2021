import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Question.css";
const Question = ({ question, answer, sr }) => {
  return (
    <>
      <Card className="bg-primary">
        <Card.Header className="FAQ_header">
          <Accordion.Toggle
            style={{ color: "#ffff" }}
            as={Card.Header}
            variant="link"
            eventKey={sr}
          >
            {question}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={sr}>
          <Card.Body style={{ color: "#131313", background: "#ffff" }}>
            {answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default Question;
