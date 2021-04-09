import React from "react";
import "./Event.css";

const event = (props) => {
  return (
    <div className="Event">
      <p>
        <img width="50" alt=''></img>
        {props.name}
      </p>
    </div>
  );
};

export default event;
