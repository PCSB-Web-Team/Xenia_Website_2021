import React, { Component } from "react";
import Mycartprop from "./Mycartprop";
import del from "./delete_icon.png";
import axios from "axios";
import Store from "../../Store/Store";
import "./Mycart.css";
class Mycart extends Component {
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
        icon: del,
      },
      {
        name: "MineCraft Battles",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 2,
        date: "00/00/00",
        icon: del,
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
        icon: del,
      },
    ],
    user: Store.getState().userData,
  };

  handleRFC = (name) => {
    const token = this.state.user.token;
    const event = name;
    axios
      .post("http://localhost:5000/removeFromCart", { token, event })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  render() {
    const temp =
      "{this.state.techs.map((tech) => {return <Mycartprop name={tech.name} id={tech.id} />;})}";
    const nos = this.state.techs.map((tech, i) => (
      <div className="noItem">{i + 1}</div>
    ));
    const eves = this.state.techs.map((tech, i) => (
      <div className="eveItem">{tech.name}</div>
    ));
    const icons = this.state.techs.map((tech) => (
      <div
        className="iconItem"
        key={tech.name}
        id={tech.name}
        onClick={() => {
          this.handleRFC(tech.name);
        }}
        style={{ cursor: "pointer" }}
      >
        <img width="25" height="25" src={tech.icon} />
      </div>
    ));

    return (
      <div className="mycart">
        <div>
          <div className="mycartContainer">
            <div
              className="col-lg-2 col-md-2 col-sm-2"
              style={{ margin: "0", textAlign: "center" }}
            >
              <p>#</p>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              style={{ margin: "0", textAlign: "center" }}
            >
              <p>EVENT</p>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-4"
              style={{ margin: "0", textAlign: "center" }}
            >
              <p>DELETE</p>
            </div>
          </div>
          <div className="cartInfoContainer">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 eventNo">
              {nos}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 eventNm">
              {eves}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 eventSlot">
              {icons}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mycart;
