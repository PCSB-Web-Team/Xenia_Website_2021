import React, {useCallback } from "react";
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

  let list = props.cart.map((eve) => {
    return (
      <div className="Regdiv" key={eve._id}>
        <h3 className="RegP">
          {eve.name}{" "}
        </h3>
      </div>
    );
  });

  return (
    <div className="ProfCard">
      <div className="usernameHeading">
        <h1>USERNAME</h1>
      </div>
      <div className="registeredEventsContainer">
        <div className="registeredEvents">
          {list.length > 0 ? (
            list
          ) : (
            <h1 className="noRegistered">No Registered Events</h1>
          )}
        </div>
        <div className="registeredEventsDashboard">
          <h1>DASHBOARD</h1>
          <div className="dashboardTech">
            <p>Technical Events : <span>1</span></p>
            <p>Non Technical Events : <span>1</span></p>
          </div>
          <div className="dashboardNonTech">

          </div>
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
    cart: state.userData.cart,
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
