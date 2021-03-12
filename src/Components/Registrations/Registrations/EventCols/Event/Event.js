import React from "react";
import styles from "./Event.css";
import Logo from "../../../../../assets/images/logo192.png";

const event = (props) => {
  return (
    <div className="Event">
      <p style={{ fontFamily: "planetns" }}>
        <img src={Logo} style={{ marginRight: "5px" }} width="50"></img>
        {props.name}
      </p>
    </div>
  );
};

export default event;
