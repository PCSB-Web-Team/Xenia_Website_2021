import React, { Component } from "react";
import Myeventsprop from "./Myeventsprop";

class Myevents extends Component {
  state = {
    techs: [
      {
        name: "CodeStrike",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 1,
        date: "00/00/00",
      },
      {
        name: "NinjaCoding",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 2,
        date: "00/00/00",
      },
      {
        name: "Design Maestro",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 3,
        date: "00/00/00",
      },
    ],
  };

  render() {
    return (
      <div className="myevents">
        <div>
          {this.state.techs.map((tech) => {
            return <Myeventsprop name={tech.name} id={tech.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Myevents;
