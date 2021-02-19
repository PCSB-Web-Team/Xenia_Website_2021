import React from "react";
import "./Myeventsprops.css";
const Myeventsprop = (props) => {
  return (
    <div className="myEventsPage">
      <div className="myEventsContent"></div>
      <p>
        This is Registered Event {props.name} Event ID:- {props.id}
      </p>
    </div>
  );
};
export default Myeventsprop;
