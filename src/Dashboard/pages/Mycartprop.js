import React from "react";
import "./Mycartprops.css";
const Mycartprop = (props) => {
  return (
    <div className="myCartPage">
      <p>
        Event:- {props.name} Event ID:- {props.id}
      </p>
    </div>
  );
};
export default Mycartprop;
