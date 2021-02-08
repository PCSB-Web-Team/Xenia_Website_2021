
import React from "react";
import styles from "./App.css";

import "./Navbar/Navbar.css";
import Cards from "./Events/Dashboard.js";
import Registrations from "./Registrations/Registrations.js";
import Navbar from "./Navbar/Navbar";
import About from "./AboutUs/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }

  handleView = (e) => {
    this.setState({
      view: e.target.id,
    });
  };

  render() {
    return (
      <div className="Xenia">
        <Navbar changeTab={this.handleView.bind(this)} />
        {this.state.view === "home" ? <Registrations /> : null}
        {this.state.view === "events" ? <Cards /> : null}
        {this.state.view === "aboutus" ? <About /> : null}
      </div>
    );
  }
}

export default App;
