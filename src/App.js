import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/LandingPage/LandingPage";
import Schedule from "./Components/Registrations/Registrations";
import Events from "./Components/Events/Events";
import EventDetail from "./Components/Events/MoreInfo/MoreInfo";
import AboutUs from "./Components/AboutUs/About";
import ContactUs from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import WebTeam from "./Components/WebTeam/WebTeam";
import Sponsors from "./Components/Sponsors/Sponsors";
import { getLoggedInUser } from "./Components/Config/api/User";
import NotFound from "./Components/404/404";
import SideEvents from "./Components/SideEvents/SideEvents";
import FAQ from "./Components/Contact/FAQ/FAQ";
import Background from "./Components/BackGround/Background";
import ForgotPassword from "./Components/ForgotPassword/forgot";
import ResetPassword from "./Components/ForgotPassword/reset";
import Sessions from "./Components/Workshops/Workshops";
import SessionInfo from "./Components/Workshops/MoreInfo/Workshops";
import ContactPanel from "./Components/ContactPanel/ContactPanel";

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getEventData, loggedIn, storeToken } from "./Store/Actions";
import { connect } from "react-redux";
import SocliaMediaPanel from "./Components/SocialMediaLinks/Links";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    const getUserData = async () => {
      let userToken = localStorage.getItem("xeniaUserToken");

      const res = await getLoggedInUser(userToken);

      props.storeToken(userToken);

      props.loggedIn(res.data.data);
    };

    setTimeout(() => {
      const PreLoader = document.getElementById("preLoader");
      PreLoader.style.display = "none";
    }, 6000);

    getUserData();
  }, []);

  return (
    <div className="Xenia" id="Xenia">
      <Navbar />
      <Background />
      <SocliaMediaPanel />
      <ContactPanel />

      <Switch>
        <Route exact path="/schedule">
          <Schedule />
          <Footer />
        </Route>

        <Route exact path="/events">
          <Events />
          <Footer />
        </Route>

        <Route exact path="/events/:id">
          <EventDetail />
          <Footer />
        </Route>

        <Route exact path="/build-up-events">
          <SideEvents />
          <Footer />
        </Route>

        <Route exact path="/industry-talks">
          <Sessions />
          <Footer />
        </Route>

        <Route exact path="/industry-talks/:id">
          <SessionInfo />
          <Footer />
        </Route>

        <Route exact path="/sponsors">
          <Sponsors />
          <Footer />
        </Route>

        <Route exact path="/profile">
          {props.login ? (
            <div>
              <Profile />
              <Footer />
            </div>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Route>

        <Route exact path="/contact-us">
          <AboutUs />
          <ContactUs />
          <FAQ />
          <Footer />
        </Route>

        <Route exact path="/webteam">
          <WebTeam />
          <Footer />
        </Route>

        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route exact path="/reset-password/:id/:token">
          <ResetPassword />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    getEventData: (data) => {
      dispatch(getEventData(data));
    },
    loggedIn: (userdata) => {
      dispatch(loggedIn(userdata));
    },
    storeToken: (token) => {
      dispatch(storeToken(token));
    },
  };
};

export default connect(mapStatesToProps, mapActionsToProps)(App);
