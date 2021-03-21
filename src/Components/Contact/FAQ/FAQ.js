import React from "react";
import Question from "./Question";
import { Accordion, Row, Col } from "react-bootstrap";
const FAQ = () => {
  return (
    <div className="p-5 bg-transparent text-white">
      <Accordion>
        <h2 className="text-center">Frequently Asked Questions</h2>{" "}
        <Question
          question="What is Xenia?"
          answer="Xenia is an annual festival organised by PICT CSI club of College, this multitude of other events."
          sr="0"
        />
        <Question
          question="Does Xenia has only technical events?"
          answer="No, Xenia consists of technical as well as non-technical events."
          sr="1"
        />
        <Question
          question="Is the festival going to be conducted in the college?"
          answer="No, considering the current situation Xenia is going to an online only festival."
          sr="2"
        />
        <Question
          question="Do I get a refund once I pay for the event?"
          answer="No, we don't have refund facility available."
          sr="3"
        />
        <Question
          question="Are the events going to individual participation?"
          answer="Not exactly, some events are strictly individual participation while other are a team participation. Confirm the type of participation for the respective events on the website."
          sr="4"
        />
      </Accordion>
    </div>
  );
};

export default FAQ;
