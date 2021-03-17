import React from "react";
import "./WebTeam.css";
import ProfileCard from './TeamProfile';
import Vedant from '../../Assets/Images/vedant.jpeg';
import Gaurav from '../../Assets/Images/gaurav.jpg';
import Amit from '../../Assets/Images/amit.jpg';
import Atharva from '../../Assets/Images/atharva.jpeg';
import Siddhesh from '../../Assets/Images/siddhesh.jpg';
import Pranil from '../../Assets/Images/pranil.jpeg';
import Sourav from '../../Assets/Images/sourav.jpg';

let teamDetails = [
  {name: 'Vedant Daigavane',  linkedIn: 'https://www.linkedin.com/in/vedant-daigavane-25785315a', pic: Vedant},
  {name: 'Gaurav Shinde',     linkedIn: 'https://www.linkedin.com/in/gaurav-shinde-658250196/', pic: Gaurav},
  {name: 'Amit Purohit',      linkedIn: 'https://www.linkedin.com/in/amitpurohit47',   pic: Amit},
  {name: 'Atharva Belekar',   linkedIn: 'https://www.linkedin.com/in/atharva-belekar-0121',   pic: Atharva},
  {name: 'Sourav Borate',     linkedIn: 'https://www.linkedin.com/in/sourav-borate-bb25831b2/',   pic: Sourav}
]
let prernaSthhall = [
  {name: 'Siddhesh Joshi', linkedIn: 'https://www.linkedin.com/in/siddhesh-joshi-67615816b', pic: Siddhesh},
  {name: 'Pranil Bhosale', linkedIn: 'https://www.linkedin.com/in/pranil-bhosale', pic: Pranil}
]

const webTeam = (props) => {

  let team = teamDetails.map( member => {return ( <ProfileCard details={ member }> </ProfileCard> )})
  let teTeam = prernaSthhall.map( member => {return ( <ProfileCard details={ member }> </ProfileCard> )})

  return (
    <div className="webTeam">
        {team}
        <h1>Guided By</h1>
        {teTeam}
    </div>
  );
};

export default webTeam;
