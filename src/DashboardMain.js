import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myprofile from "./pages/Myprofile";
import Mycart from "./pages/Mycart";
import Myevents from "./pages/Myevents";

function DashboardMain() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/myprofile" exact component={Myprofile} />
          <Route path="/mycart" component={Mycart} />
          <Route path="/myevents" component={Myevents} />
        </Switch>
      </Router>
    </>
  );
}

export default DashboardMain;
