import React from "react";
import styles from "./App.css";
import "./Navbar/Navbar.css";
import Cards from "./Events/Dashboard.js";
import Registrations from "./Home/Registrations/Registrations.js";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./Home/LandingPage/LandingPage";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/About";
import Contact from "./Contact/Contact";
import BG from './bg1.jpg';
import LightSpeed from "react-reveal/LightSpeed";
import Domains from '../src/Home/Domains/Domains';
// import Contact from './Contact/Contact';

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
        <div className='bg-div'><img className='main-bg' src={BG}></img></div>
        <Navbar changeTab={this.handleView.bind(this)} />
        {this.state.view === "home" ? (
          <div>
            <LandingPage />
            <Registrations />
            <Domains />
          </div>
        ) : null}
        {this.state.view === "events" ? <Cards /> : null}
        {this.state.view === "aboutus" ? <AboutUs /> : null}
        {this.state.view === "contact" ? <Contact/> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
