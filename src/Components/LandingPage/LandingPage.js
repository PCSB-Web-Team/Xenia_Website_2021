import React from "react";
import "./LandingPage.css";
import bg from "../../Assets/Images/LandingPage/xeniabg6.jpg";
import astranout from "../../Assets/Images//LandingPage/astranout.png";
// import shuttle from "../../Assets/Images//LandingPage/spaceshuttle.png";
import lake from "../../Assets/Images//LandingPage/lake.png";
// import layer3 from "../../Assets/Images//LandingPage/jupiter.jpg";
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Slide';
import XeniaLogo from '../../Assets/Images/Xenia 21 Final.png';

const LandingPage = () => {

  const handleMove = (e) => {

    const box = document.querySelector(".astranout");

    let x = e.pageX;
    let y = e.pageY;
    let transX = e.target.offsetWidth * 0.005 - x * 0.05;
    let transY = e.target.offsetHeight * 0.005 - y * 0.05;
    box.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    // const layer3 = document.querySelector(".layer3");

    // let transXL = e.target.offsetHeight * 0.005 + x * 0.1;
    // let transYL = e.target.offsetHeight * 0.005 + y * 0.1;
    // layer3.style.transform = `translateX(${transXL}px) translateY(${transYL}px)`;

    // const background = document.querySelector(".bg");

    // let transXBG = e.target.offsetHeight * 0.005 + x * 0.05;
    // let transYBG = e.target.offsetHeight * 0.005 + y * 0.05;
    // background.style.transform = `translateX(${transXBG}px) translateY(${transYBG}px)`;

  };

  return (
    <div className="landing-page">
      <div className="landing-container" onMouseMove={handleMove}>
        {/* <Fade> <h1 id="xenia">XENIA</h1> </Fade> */}
        {/* <span id="date">14 - 16 March</span> */}

        <div className="bg">
          <img src={bg} alt=''></img>
        </div>
        {/* <div className="layer3">
            <img src={layer3} alt=''></img>
          </div> */}
        {/* <div className="lake">
          <img src={lake} alt=''></img>
        </div> */}
        {/* <div className="SpaceShip">
            <img src={shuttle} alt=''></img>
          </div> */}

        <div className="astranout">
          <img src={astranout} alt=''></img>
        </div>

        <Fade cascade>
          <div className='logo-div'>
            <img src={XeniaLogo} />
            <div className='event-date'>14 - 16 March</div>
          </div>
        </Fade>
        
      </div>
    </div>
  );
}

export default LandingPage;
