import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
// import eventLogo from '../../../Assets/Images/icon4.png';

export default function ImgMediaCard({ details, readmore }) {
  return (
    <div className="event-card" onClick={readmore}>
      <Zoom>
        <img src={details.logo} alt="logo" />
      </Zoom>
      <div style={{ height: "40%" }} className="card-body">
        <Slide left>
          <h2 className="eve-card-name">{details.name}</h2>
        </Slide>
        <Slide right>
          <h1>
            <hr />
          </h1>
        </Slide>
        <Fade>
          <p>{details.details}</p>
        </Fade>
        <span>{details.date}</span>
      </div>
    </div>
  );
}
