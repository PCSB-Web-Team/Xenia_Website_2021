import React from "react";
// import Logo from "../../Assets/Images/logo.svg";
import "./Sponsors.css";
// import Sponsor from "../../Assets/Images/main_bg.jpg";
// import Tata from "../../Assets/Images/SponsorImages/Tata.jpg";
// import Vodafone from "../../Assets/Images/SponsorImages/Vodafone.jpg";
// import sponsor from "../../Assets/Images/logo.svg";
// import LG from "../../Assets/Images/SponsorImages/Lg.jpg";
// import Microsoft from "../../Assets/Images/SponsorImages/Microsoft.jpg";
import VanillaTilt from "vanilla-tilt";
import { useRef, useEffect } from "react";
// import {Link} from 'react-router-dom'
import IDBI from '../../Assets/Images/SponsorImages/idbi_intech.jpg';
import SWE from '../../Assets/Images/SponsorImages/swe.png';
import HobbyTribe from '../../Assets/Images/SponsorImages/hobby tribe.jpg';
import GFG from '../../Assets/Images/SponsorImages/gfg.png';
import Replit from '../../Assets/Images/SponsorImages/replit.jpg';
import SAPS from '../../Assets/Images/SponsorImages/saps.jpg';
import Sipna from '../../Assets/Images/SponsorImages/sipna.jpeg';
import Sanjeevni from '../../Assets/Images/SponsorImages/sanjeevani.jpeg';
import SkillCoup from '../../Assets/Images/SponsorImages/skillcoup.jpg';
import SoapRepublic from '../../Assets/Images/SponsorImages/thesoaprepublic.jpg';
import Axis from '../../Assets/Images/SponsorImages/axis.jpg';

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

  const titleSponsors = [
    {
      name: "IDBI Intech",
      logo: IDBI,
      url: 'https://www.idbiintech.com/',
    }
  ]

  const coSponsors = [
    {
      name: "Society of Women Engineers",
      logo: SWE,
      url: 'https://swe.org/',
    },
    {
      name: "Hobby Tribe",
      logo: HobbyTribe,
      url: 'https://www.thehobbytribe.com/',
    }
  ]

  const associateSponsors = [
    {
      name: "Geeks for Geeks",
      logo: GFG,
      url: 'https://www.geeksforgeeks.org/',
    },
    {
      name: "Replit",
      logo: Replit,
      url: 'https://replit.com/',
    },
    {
      name: "SAPS Products",
      logo: SAPS,
      url: 'https://www.sapsproducts.com/',
    }
  ]

  const communitySponsors = [
    {
      name: "Sipna College of Engineering, Amravati",
      logo: Sipna,
      url: 'https://www.geeksforgeeks.org/',
    },
    {
      name: "Sanjeevani College of Engineering, Kopargaon",
      logo: Sanjeevni,
      url: 'https://replit.com/',
    }
  ]

  let sponsors = [
    {
      name: "Vedant",
      logo: IDBI,
      url: "https://www.pictcsi.com/",
    },
    {
      name: "Pranil",
      logo: IDBI,
      url: "https://www.pictcsi.com/",
    },
    {
      name: "Gaurav",
      logo: IDBI,
      url: "https://www.pictcsi.com/",
    },
    {
      name: "Atharva",
      logo: IDBI,
      url: "https://www.pictcsi.com/",
    },
    {
      name: "Siddhesh",
      logo: IDBI,
      url: "https://www.pictcsi.com/",
    },
  ];

  const getList = ( sponsorsArray ) => {
    const list = sponsorsArray.map((sponsor) => {
      return (
        <a href={sponsor.url} target="_blanck">
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
    return list;
  }

  const getList1 = (sponsorsArray) => {
    const list = sponsorsArray.map(sponsor => {
      return(
        <div className='sponsor-card'>
          <div className='logo-container'>
            <img src={sponsor.logo}/>
          </div>
          <a href={sponsor.url} className='sponsor-name'>
            {sponsor.name}
          </a>
        </div>
      )
    });
    return list;
  }

  const titleSponsorsList = getList1(titleSponsors);
  const coSponsorsList = getList(coSponsors);
  const associateSponsorsList = getList(associateSponsors);
  const communitySponsorsList = getList(communitySponsors);

  let list = sponsors.map((sponsor) => {
    return (
      <a href={sponsor.url} target="_blanck">
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
    
    // <>
    //   <header className="page-headers">
    //     <h1 className="header-name">Sponsors</h1>
    //   </header>
    //   <div className="sponsors-coming-soon-container">
    //     <div className="coming-soon"> Coming Soon . . . </div>
    //   </div>
    // </>

    <div className="maincontainer">
      <div className="sponsors">

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Title Sponsors </h1>
        </header>
        <div className="sponsors-list">{titleSponsorsList}</div>

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Co-Sponsors </h1>
        </header>
        <div className="sponsors-list">{coSponsorsList}</div>

        <header className="sponsors-headers">
          <h1 className="sponsors-head"> Associate Sponsors </h1>
        </header>
        <div className="sponsors-list">{associateSponsorsList}</div>

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
        <div className="sponsors-list">{communitySponsorsList}</div>

      </div>
    </div>
  );
};

export default Sponsors;
