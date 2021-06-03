import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Question.css";
const Question = ({ question, answer, sr }) => {
  return (
    <>
      <Card className='question' style={{ background: "rgba(0,0,0,0.5)" }}>
        <Card.Header className="FAQ_header">
          <Accordion.Toggle
            style={{ background: "rgba(0,0,0,0.5)", fontWeight: '300' }}
            as={Card.Header}
            variant="link"
            eventKey={sr}
            className='que'
          >
            {question}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={sr}>
          <Card.Body className='ans' style={{ color: "rgb(0,255,255)", background: "transparent" }}>
            {answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

// #00b4d8

export default Question;
