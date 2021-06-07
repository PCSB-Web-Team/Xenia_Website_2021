import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import bg from "../../Assets/Images//LandingPage/bg5.png";
import Zoom from "react-reveal/Zoom";
import XeniaLogo from "../../Assets/Images/Xenia 21 Final.png";
import Stars from "./LandingPageStars/LandingPageStars";
import Mountain from '../../Assets/Images/LandingPage/mid.png';
import Moon from './Moon/Moon';
import Shuttle from '../../Assets/Images/LandingPage/shuttle.png';
import Loader from '../Loader/Loader';


const LandingPage = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handleMove = (e) => {
    const box = document.querySelector(".astranout");

    let x = e.pageX;
    let y = e.pageY;

    const background = document.querySelector(".mountain");

    let transXBG = e.target.offsetWidth * 0.005 - x * 0.05;
    let transYBG = e.target.offsetHeight * 0.005 - y * 0.05;

    background.style.transform = `translateX(${transXBG}px) translateY(${transYBG}px)`;
  };

  return (
      loading ?
      <Loader/>
      :
    <div className="landing-page">
      <div className="landing-container" onMouseMove={handleMove}>

        <div className="bg">
          <img src={bg} alt=""></img>
        </div>

        <div className='mountain'>
          <img src={Mountain}></img>
        </div>

        <div className='shuttle'>
          <img src={Shuttle} />
        </div>

        <Moon />

        <div className="landing-page-stars">
          <Stars />
        </div>

        <div className="logo-div">
          <div className="logo-container">
            <Zoom bottom>
              <img src={XeniaLogo} />
              <div className="event-date">25 - 27 June</div>
            </Zoom>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
