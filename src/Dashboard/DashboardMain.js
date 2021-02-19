import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myprofile from "./pages/Myprofile";
import Mycart from "./pages/Mycart";
import Myevents from "./pages/Myevents";

function DashboardMain() {
  return (
    <div>
      {console.log("Dashboard View")}
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/myprofile" exact component={Myprofile} />
          <Route path="/mycart" component={Mycart} />
          <Route path="/myevents" component={Myevents} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default DashboardMain;
