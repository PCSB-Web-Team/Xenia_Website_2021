import React from "react";
import "./Profile.css";
import {loggedOut as notifyLoggedOut} from '../Notifications/Notification';

import { connect } from "react-redux";
import { loggedOut  } from "../../Store/Actions";
import { Link } from "react-router-dom";

const MyProf = (props) => {
  // const showDetails = useCallback((e) => {
  //   const cont = document.querySelector(".registeredEventInfo");

  //   cont.innerHTML = `<div class="slotDetails">
  //               <h1 class="registeredEventInfoName">${e.target.textContent}</h1>
  //               <div class="slotAndType">
  //                   <h1 class="slotAndTypeItem">Slot Details </h1><h1 class="slotAndTypeItem">Event Type</h1>
  //               </div>
  //           </div>`;
  // }, []);

  const handleMouse = (name)=>{
    const listEves = document.querySelector('.RegP');
    const evename = document.getElementById('eveDetailsName');
    console.log(listEves);
    if(listEves.length!=0){
      evename.textContent===''?   evename.textContent=listEves.textContent : evename.textContent = name;
    }
  }

  let list = props.registeredEvents.map((eve) => {
    return (
      <div className="Regdiv" key={eve._id}>
        <h3 className="RegP" onMouseEnter={()=>handleMouse(eve.name)}>
          {eve.name}
        </h3>
      </div>
    );
  });

  return (
    <div className="ProfCard">
      <header className='page-headers'><h1 className='header-name'> {props.userName} </h1></header>
      <div className="registeredEventsContainer">
        <div className="registeredEvents">
          {list.length > 0 ? (
            list
          ) : (
            <h1 className="noRegistered">No Registered Events</h1>
          )}
        </div>
        <div className="registeredEventsDashboard">
          <h1>SLOT DETAILS</h1>
          {/* <div className="dashboardTech"> */}
            <p id="eveDetailsName"/>
            <p id="slotTime">Coming Soon . . .</p>
          {/* </div> */}
          {/* <div className="dashboardNonTech"> */}

          {/* </div> */}
        </div>
      </div>

      <Link
        to="/"
        exact
        className="btn btn-lg lgout"
        onClick={() => { notifyLoggedOut(); props.logout() }}
      >
        {" "}
        Logout{" "}
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
