import React, { useState } from "react";
import "./Profile.css";
import { loggedOut as notifyLoggedOut } from '../Notifications/Notification';

import { connect } from "react-redux";
import { loggedOut } from "../../Store/Actions";
import { Link } from "react-router-dom";

import NonTechLogo from '../../Assets/Images/nonTech.svg';
import TechLogo from '../../Assets/Images/tech.svg';

const MyProf = (props) => {

  const [isTechnical, setIsTechnical] = useState(true);
  const [eveLogo, setEveLogo] = useState('');

  const handleMouse = (logo, isTechnical) => {

    setIsTechnical(isTechnical);
    setEveLogo(logo);

  }


  let list = props.registeredEvents.map((eve, i) => {
    return (
      <div className="Regdiv row" key={eve._id}>
        <h3 className="RegP col-12" onMouseEnter={() => handleMouse(eve.logo, eve.isTechnical)}>
          {eve.name}
        </h3>
      </div>
    );
  });

  return (

    <div className="ProfCard">
      <header className='page-headers'><h1 className='header-name'> {props.userName} </h1></header>

      {
        list.length === 0
          ?
          <h1 className="noRegistered">No Registered Events</h1>
          :
          <div className='row container-fluid col-container'>
            <div className='col-lg-4 col-0 event-type'>
              <div className='row'>
                <div className='col-lg-12 title'> {isTechnical ? "Technical Event" : "Non Technical Event"} </div>
                <img className='col-lg-12 logo' src={isTechnical ? TechLogo : NonTechLogo} alt='' />
              </div>
            </div>
            <div className='col-lg-4 col-12 event-list'> {list.length > 0 ? (
              list
            ) : (
              <h1 className="noRegistered">No Registered Events</h1>
            )} </div>
            <div className='col-lg-4 col-0 event-logo'> <img src={eveLogo} alt=''></img> </div>
          </div>
      }

      {/* <div className="registeredEventsContainer">
        <div className="registeredEvents">
          {list.length > 0 ? (
            list
          ) : (
            <h1 className="noRegistered">No Registered Events</h1>
          )}
        </div>
        <div className="registeredEventsDashboard">
          <h1>SLOT DETAILS</h1>
          <div className="dashboardTech">
          <p id="eveDetailsName" />
          <p id="slotTime">Coming Soon . . .</p>
          </div>
          <div className="dashboardNonTech">

          </div>
        </div>
      </div> */}

      {/* 
      <div className='profile-table'>
            <div className='row'>
              <div className='col-2'>No</div>
              <div className='col-6'>Event Name</div>
              <div className='col-4'>Slot</div>
            </div>
      </div> */}

      <Link
        to="/"
        exact
        className="btn btn-lg lgout"
        onClick={() => { notifyLoggedOut(); props.logout() }}
      >
        Logout
      </Link>

    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    registeredEvents: state.userData.registeredEvents,
    userName: state.userData.name
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    logout: () => {
      localStorage.setItem("xeniaUserToken", null);
      dispatch(loggedOut());
    },
  };
};

export default connect(mapStatesToProps, mapActionsToProps)(MyProf);
