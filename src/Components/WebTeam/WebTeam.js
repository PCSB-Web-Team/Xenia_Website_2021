import React from "react";
import "./WebTeam.css";
import ProfileCard from "./TeamProfile";
import Vedant from "../../Assets/Images/WebTeam/vedant.jpeg";
import Gaurav from "../../Assets/Images/WebTeam/gaurav.jpg";
import Amit from "../../Assets/Images/WebTeam/amit.jpg";
import Atharva from "../../Assets/Images/WebTeam/atharva.jpeg";
import Siddhesh from "../../Assets/Images/WebTeam/siddhesh.jpg";
import Pranil from "../../Assets/Images/WebTeam/pranil.jpeg";
import Kshitij from '../../Assets/Images/WebTeam/kshitij.jpg';

let teamDetails = [
  {
    name: "Vedant Daigavane",
    linkedIn: "https://www.linkedin.com/in/vedant-daigavane-25785315a",
    pic: Vedant,
  },
  {
    name: "Gaurav Shinde",
    linkedIn: "https://www.linkedin.com/in/gaurav-shinde-658250196/",
    pic: Gaurav,
  },
  {
    name: "Amit Purohit",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: Amit,
  },
  {
    name: "Atharva Belekar",
    linkedIn: "https://www.linkedin.com/in/atharva-belekar-0121",
    pic: Atharva,
  },
];
let prernaSthhall = [
  {
    name: "Siddhesh Joshi",
    linkedIn: "https://www.linkedin.com/in/siddhesh-joshi-67615816b",
    pic: Siddhesh,
  },
  {
    name: "Pranil Bhosale",
    linkedIn: "https://www.linkedin.com/in/pranil-bhosale",
    pic: Pranil,
  },
  {
    name: "Kshitij Deshpande",
    linkedIn: "https://www.linkedin.com/in/kshitij-deshpande/",
    pic: Kshitij,
  },
];

const webTeam = (props) => {
  let team = teamDetails.map((member) => {
    return (
      <ProfileCard details={member} key={member}>
        {" "}
      </ProfileCard>
    );
  });
  let teTeam = prernaSthhall.map((member) => {
    return (
      <ProfileCard details={member} key={member}>
        {" "}
      </ProfileCard>
    );
  });

  return (
    <div className="webTeam" id="webTeam">
      <header className="page-headers">
        <h1 className="header-name">PCSB WEB TEAM</h1>
      </header>
      {team}
      <br/>
      {teTeam}
    </div>
  );
};

export default webTeam;
