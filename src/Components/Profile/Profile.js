import React, {useCallback } from "react";
import "./Profile.css";
import {loggedOut as notifyLoggedOut} from '../Notifications/Notification';

import { connect } from "react-redux";
import { loggedOut  } from "../../Store/Actions";
import { Link } from "react-router-dom";

const MyProf = (props) => {
  const showDetails = useCallback((e) => {
    const cont = document.querySelector(".registeredEventInfo");

    cont.innerHTML = `<div class="slotDetails">
                <h1 class="registeredEventInfoName">${e.target.textContent}</h1>
                <div class="slotAndType">
                    <h1 class="slotAndTypeItem">Slot Details </h1><h1 class="slotAndTypeItem">Event Type</h1>
                </div>
            </div>`;
  }, []);

  let list = props.cart.map((eve) => {
    return (
      <div className="Regdiv" key={eve._id}>
        <h3 className="RegP" onMouseEnter={showDetails}>
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
            <h1 className="usernameHeading">No Registered Events</h1>
          )}
        </div>
        <div className="registeredEventInfo">
          {props.cart.length === 0 ? (
            <h1 className="usernameHeading">No Event Registered</h1>
          ) : (
            <div className="slotDetails">
              <h1 className="registeredEventInfoName">{props.cart[0].name}</h1>
              <div className="slotAndType">
                <h1 className="slotAndTypeItem">Slot Details </h1>
                <h1 className="slotAndTypeItem">Event Type</h1>
              </div>
            </div>
          )}
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
