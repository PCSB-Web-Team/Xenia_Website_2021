import React from "react";
// import Logo from "../../Assets/Images/logo.svg";
import "./Sponsors.css";
// import Sponsor from "../../Assets/Images/main_bg.jpg";
// import Tata from "../../Assets/Images/SponsorImages/Tata.jpg";
// import Vodafone from "../../Assets/Images/SponsorImages/Vodafone.jpg";
import sponsor from "../../Assets/Images/logo.svg";
import LG from "../../Assets/Images/SponsorImages/Lg.jpg";
import Microsoft from "../../Assets/Images/SponsorImages/Microsoft.jpg";
import VanillaTilt from "vanilla-tilt";
import { useRef, useEffect } from "react";
// import {Link} from 'react-router-dom'

const Sponsors = () => {
  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const options = {
    scale: 1.2,
    speed: 200,
    max: 25,
    reverse: true,
  };

  let sponsors = [
    {
      name: "Vedant",
      logo: sponsor,
      url: 'https://www.pictcsi.com/'
    },
    {
      name: "Pranil",
      logo: LG,
      url: 'https://www.pictcsi.com/'
    },
    {
      name: "Gaurav",
      logo: Microsoft,
      url: 'https://www.pictcsi.com/'
    },
    {
      name: "Atharva",
      logo: LG,
      url: 'https://www.pictcsi.com/'
    },
    {
      name: "Siddhesh",
      logo: sponsor,
      url: 'https://www.pictcsi.com/'
    },
  ];

  let list = sponsors.map((sponsor) => {
    return (
      <a href={sponsor.url} target='_blanck'>
      <Tilt
        className="tilt"
        options={options}
        style={{ backgroundImage: `url(${sponsor.logo})` }}
      >
        <p>{sponsor.name}</p>
      </Tilt>
      </a>
    );
  });

  return (
    <div className="maincontainer">
      <div className="sponsors">
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Title Sponsors </h1>
        </header>
        <div className="sponsors-list">{list}</div>

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Co-Sponsors </h1>
        </header>
        <div className="sponsors-list">{list}</div>

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Associate Sponsors </h1>
        </header>
        <div className="sponsors-list">{list}</div>
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Event Sponsors </h1>
        </header>
        <div className="sponsors-list">{list}</div>

        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Knowledge Partners </h1>
        </header>
        <div className="sponsors-list">{list}</div>

        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Eco System Partner </h1>
        </header>
        <div className="sponsors-list">{list}</div>
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Digital Marketing Partner </h1>
        </header>
        <div className="sponsors-list">{list}</div>
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Media Partner </h1>
        </header>
        <div className="sponsors-list">{list}</div>
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Goodies Partner </h1>
        </header>
        <div className="sponsors-list">{list}</div>
        
        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Certification & Awards Partner </h1>
        </header>
        <div className="sponsors-list">{list}</div>

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Community Partners </h1>
        </header>
        <div className="sponsors-list">{list}</div>

      </div>
    </div>
  );
};

export default Sponsors;