import React from "react";
import "./LandingPage.css";
// import bg from "../../Assets/Images//LandingPage/layer3.jpg";
import bg from "../../Assets/Images//LandingPage/xeniabg9.jpg";
import astranout2 from "../../Assets/Images//LandingPage/astranout.png";
// import shuttle from "../../Assets/Images//LandingPage/spaceshuttle.png";
import astranout1 from "../../Assets/Images//LandingPage/xeniabg10.png";
// import layer3 from "../../Assets/Images//LandingPage/jupiter.jpg";
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Slide';
import XeniaLogo from '../../Assets/Images/Xenia 21 Final.png';
import Stars from './LandingPageStars/LandingPageStars';

const LandingPage = () => {

  const handleMove = (e) => {

    const box = document.querySelector(".astranout");

    let x = e.pageX;
    let y = e.pageY;

    // let transX = e.target.offsetWidth * 0.005 - x * 0.05;
    // let transY = e.target.offsetHeight * 0.005 - y * 0.05;
    // box.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    // const layer3 = document.querySelector(".layer3");

    // let transXL = e.target.offsetHeight * 0.005 + x * 0.1;
    // let transYL = e.target.offsetHeight * 0.005 + y * 0.1;
    // layer3.style.transform = `translateX(${transXL}px) translateY(${transYL}px)`;

    const background = document.querySelector(".ast-container");

    let transXBG = e.target.offsetWidth * 0.005 - x * 0.03;
    let transYBG = e.target.offsetHeight * 0.005 - y * 0.03;

    background.style.transform = `translateX(${transXBG}px) translateY(${transYBG}px)`;

  };

  return (
    <div className="landing-page">
      <div className="landing-container" onMouseMove={handleMove}>

        <div className="bg">
          <img src={bg} alt=''></img>
        </div>

        <div className="lake">
          <div className='ast-container'>
            <img className='main-ast' src={astranout1} alt=''></img>
          </div>
        </div>

        <div className='landing-page-stars'>
            <Stars/>      
        </div>
{/* 
        <div className="astranout">
          <img src={astranout2} alt=''></img>
        </div> */}

        <Fade cascade>
        <div className='logo-div'>
          <div className='logo-container'>
            <img src={XeniaLogo} />
            <div className='event-date'>25 - 27 June</div>
          </div>
        </div>
        </Fade>

      </div>
    </div>
  );
}

export default LandingPage;
