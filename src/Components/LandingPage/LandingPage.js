import React, { Component } from "react";
import styles from "./LandingPage.css";
import bg from "../../Assets/images/bg.jpg";
import astranout from "../../Assets/images/astranout.png";
import shuttle from "../../Assets/images/spaceshuttle.png";
import lake from "../../Assets/images/lake.png";
import layer3 from "../../Assets/images/jupiter.jpg";

class LandingPage extends Component {
  handleMove = (e) => {
    const box = document.querySelector(".astranout");

    let x = e.pageX;
    let y = e.pageY;
    let transX = e.target.offsetWidth * 0.005 - x * 0.05;
    let transY = e.target.offsetHeight * 0.005 - y * 0.05;
    box.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    const layer3 = document.querySelector(".layer3");

    let transXL = e.target.offsetHeight * 0.005 + x * 0.1;
    let transYL = e.target.offsetHeight * 0.005 + y * 0.1;
    layer3.style.transform = `translateX(${transXL}px) translateY(${transYL}px)`;

    const background = document.querySelector(".bg");

    let transXBG = e.target.offsetHeight * 0.005 + x * 0.05;
    let transYBG = e.target.offsetHeight * 0.005 + y * 0.05;
    background.style.transform = `translateX(${transXBG}px) translateY(${transYBG}px)`;
  };

  render() {
    return (
      <div className="landing-page">
        <div className="landing-container" onMouseMove={this.handleMove}>
          <h1 id="xenia">XENIA</h1>
          <span id="date">14 - 16 March</span>

          <div className="bg">
            <img src={bg}></img>
          </div>
          <div className="layer3">
            <img src={layer3}></img>
          </div>
          <div className="lake">
            <img src={lake}></img>
          </div>
          <div className="SpaceShip">
            <img src={shuttle}></img>
          </div>
          <div className="astranout">
            <img src={astranout}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;