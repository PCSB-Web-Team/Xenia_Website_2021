import React from "react";
import Logo from "../../Assets/Images/logo.svg";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsorscontain">
      <h2>Sponsors</h2>
      <div className="grid1">
        <div className="box1">
          <a href="#">
            <img src={Logo}></img>
          </a>
        </div>
        <div className="grid2">
          <div className="box1">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
          <div className="box2">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
        </div>
        <div className="grid3">
          <div className="box1">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
          <div className="box2">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
          <div className="box3">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
        </div>
        <div className="grid3">
          <div className="box4">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
          <div className="box5">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
          <div className="box6">
            <a href="#">
              <img src={Logo}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
