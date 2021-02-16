import React from "react";
import Question from "./Question";
import { Accordion, Row, Col } from "react-bootstrap";
const FAQ = () => {
  return (
    <div className="p-5 bg-dark text-white">
      <Accordion>
        <h2 className="text-center">Frequently Asked Questions</h2>{" "}
        <Question
          question="Quesion one"
          answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, minus"
          sr="0"
        />
        <Question
          question="Quesion Two"
          answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, minus . Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, minus"
          sr="1"
        />
        <Question
          question="Quesion Three"
          answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, minus"
          sr="2"
        />
        <Question
          question="Quesion Four"
          answer=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, minus"
          sr="3"
        />
      </Accordion>
    </div>
  );
};

export default FAQ;
