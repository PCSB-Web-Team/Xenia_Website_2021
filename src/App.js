<<<<<<< HEAD

import React from "react";
import styles from "./App.css";

import "./Navbar/Navbar.css";
import Cards from "./Events/Dashboard.js";
import Registrations from "./Registrations/Registrations.js";
import Navbar from "./Navbar/Navbar";
import About from "./AboutUs/About";
=======
import React from 'react';
import styles from './App.css';
import './Navbar/Navbar.css';
import Cards from './Events/Dashboard.js';
import Registrations from './Home/Registrations/Registrations.js';
import Navbar from './Navbar/Navbar';
import LandingPage from './Home/LandingPage/LandingPage';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/About';
import LightSpeed from 'react-reveal/LightSpeed';
>>>>>>> 4b1cc0e2a2cf858b45e10f0b1133b950fce7f4f3

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      view: 'home',
    };
  }

  handleView=(e)=>{
    this.setState({
      view: e.target.id
    })
  }

  render(){
    return(
      <div className="Xenia">
        <Navbar changeTab={this.handleView.bind(this)} />
        {this.state.view==='home' ?<div><LandingPage/><Registrations/></div>: null}
        {this.state.view==='events' ? <Cards/> : null}
        {this.state.view==='aboutus' ? <AboutUs/>: null}
        <Footer/>
      </div>
    )
  }
}

export default App;
