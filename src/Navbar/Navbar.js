import React from 'react';
import logo from './logo1.jpeg'; 
import * as RBS from "react-bootstrap"; 

function Navbar(props) {
    return (
        <div className="NavBar" id="navBar">         
          
          {/* <input type="checkbox" id="check" />
          <label className="nav-label" for="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
          </label> */}
          <button className="nav-btn">Nav</button>

          <div className="brand" style={{float: "left"}}>
            <a className="nav-brand" href="#home">
                <img
                  alt=""
                  src= {logo}
                  width="40"
                  height="40"
                  className="logo"  //"d-inline-block align-top"
                />
                <span className="brandName">PCSB</span>
            </a>
          </div>

          <div className="items" >
            <div className="nav-tabs" onClick={props.changeTab} id='home' href="#Home">Home</div>
            <div className="nav-tabs" onClick={props.changeTab} id='events' href="#Events">Events</div>
            <div className="nav-tabs" onClick={props.changeTab} id='teams' href="#Team">Team</div>
            <div className="nav-tabs" onClick={props.changeTab} id='aboutus' href="#About-Us">About Us</div>
            <div className="nav-tabs" onClick={props.changeTab} id='contact' href="#Contact-us">Contact Us</div>
          </div>

        </div>
      );
}

export default Navbar;