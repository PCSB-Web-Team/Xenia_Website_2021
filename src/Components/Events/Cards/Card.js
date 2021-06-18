import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
// import eventLogo from '../../../Assets/Images/icon4.png';
import { connect } from 'react-redux';

const ImgMediaCard = ({ details, readmore, isLogedin, eveList }) => {

  let found = false;

  const checkRegistered = (id) => {
    eveList.forEach(eve => {
      if (eve._id === id)
        found = true;
      return
    })
    return found;
  }

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
        {isLogedin ? (checkRegistered(details._id) ? <div className='card-already-registered'> Registered </div> : null) : null}
      </div>
    </div>
  );
}

const mapStatesToProps = state => {
  return {
    isLogedin: state.login,
    eveList: state.userData.registeredEvents,
  }
}

export default connect(mapStatesToProps)(ImgMediaCard);