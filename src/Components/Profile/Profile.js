import React from "react";
import "./Profile.css";
import { loggedOut as notifyLoggedOut } from '../Notifications/Notification';

import { connect } from "react-redux";
import { loggedOut } from "../../Store/Actions";
import { Link } from "react-router-dom";

const MyProf = (props) => {

  // const [isTechnical, setIsTechnical] = useState(true);
  // const [eveLogo, setEveLogo] = useState('');

  // const handleMouse = (logo, isTechnical) => {

  //   setIsTechnical(isTechnical);
  //   setEveLogo(logo);

  // }


  let list = props.registeredEvents.map((eve, i) => {
    return (
      <div className="Regdiv row" key={eve._id}>
        <h3 className="RegP col-md-6 col-12">
          {eve.name}
        </h3>
        <div className='col-md-6 col-12'> {eve.platformLink ? <a className='platform-link' href={eve.platformLink} target='_blanck'> Platform Link </a> : null} </div>
      </div>
    );
  });

  let workshopList = props.registeredWorkshops.map((eve, i) => {
    return (
      <div className="Regdiv row" key={eve._id}>
        <h3 className="RegP col-md-6 col-12">
          {eve.workshopDetails.name}
        </h3>
         {eve.workshopDetails.attendanceLink ? <div className='col-md-3 col-12'> <a className='platform-link' href={eve.workshopDetails.attendanceLink} target='_blanck'> Attendance Link </a> </div> : null}
         {eve.workshopDetails.platformLink ? <div className='col-md-3 col-12'> <a className='platform-link' href={eve.workshopDetails.platformLink} target='_blanck'> Platform Link </a>  </div> : null}
      </div>
    );
  });

  let buildUpList = props.registeredBuildUpEvents.map((eve, i) => {
    return (
      <div className="Regdiv row" key={eve._id}>
        <h3 className="RegP col-md-6 col-12">
          {eve.name}
        </h3>
        <div className='col-md-6 col-12'> {eve.platformLink ? <a className='platform-link' href={eve.platformLink} target='_blanck'> Platform Link </a> : null} </div>
      </div>
    );
  });

  return (

    <div className="ProfCard">
      <header className='page-headers'><h1 className='header-name'> {props.userName} </h1></header>

      <div className="profile-inner">
        <div className="profile-left">
          <h1>Events</h1>
          <div className="registered-events-list">
            {list.length===0 ?   <p className="no-registered">No Registered Events</p> : list}
          </div>
        </div>
        <div className="profile-left">
          <h1>Industry Talks</h1>
          <div className="registered-workshops-list">
          {workshopList.length===0 ?   <p className="no-registered">No Registered Industry Talks</p> : workshopList}
          </div>
        </div>
        <div className="profile-left">
          <h1>Build Up Events</h1>
          <div className="registered-workshops-list">
          {buildUpList.length===0 ?   <p className="no-registered">No Registered Build Up Events</p> : buildUpList}
          </div>
        </div>
      </div>

      {/* {
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
      } */}

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
    registeredWorkshops: state.userData.registeredWorkshops,
    registeredBuildUpEvents: state.userData.registeredBuildUpEvents,
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