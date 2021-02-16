import React from "react";
import styles from "./App.css";
import "./Navbar/Navbar.css";
import Cards from "./Events/Events.js";
import Registrations from "./Registrations/Registrations/Registrations.js";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/About";
import Contact from "./Contact/Contact";
import BG from './bg1.jpg';
import LightSpeed from "react-reveal/LightSpeed";
import Domains from './Domains/Domains';
import Planet from './LandingPage2/plane';
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
        {this.state.view!=='home' ? <div className='bg-div'><img className='main-bg' src={BG}></img></div> : null}
        <Navbar changeTab={this.handleView.bind(this)} />
        {this.state.view === "home" ? (
          <div>
            <LandingPage />
            {/*<Registrations />*/}
            
          </div>
        ) : null}
        {this.state.view === "events" ? <Cards /> : null}
        {this.state.view === "aboutus" ? <AboutUs /> : null}
        {this.state.view === "contact" ? <Contact/> : null}
        {this.state.view!=='home' ? <Footer /> : null }
      
      </div>
    );
  }
}

export default App;
