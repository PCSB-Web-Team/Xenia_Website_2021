import React from 'react';
import './Navbar.css'
import logo from './logo1.jpeg'; 
import * as RBS from "react-bootstrap";

function Navbar() {
    return (
        <div className="NavBar">
          <RBS.Navbar className="nav" collapseOnSelect sticky="top" expand="md" variant="dark">
            <RBS.Navbar.Brand href="#home">
              <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="logo"  //"d-inline-block align-top"
              />
              <span className="brandName">PCSB</span>
            </RBS.Navbar.Brand>
            <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <RBS.Navbar.Collapse id="responsive-navbar-nav">
              <RBS.Nav className="mr-auto">
                <RBS.Nav.Link className="navlink-hover" href="#Home">Home</RBS.Nav.Link>
                <RBS.Nav.Link className="navlink-hover" href="#Events">Events</RBS.Nav.Link>
                <RBS.Nav.Link className="navlink-hover" href="#Team">Team</RBS.Nav.Link>
                <RBS.Nav.Link className="navlink-hover" href="#About-Us">About Us</RBS.Nav.Link>
                <RBS.Nav.Link className="navlink-hover" href="#Contact-us">Contact Us</RBS.Nav.Link>
              </RBS.Nav>
            </RBS.Navbar.Collapse>
          </RBS.Navbar>
        </div>
      );
}

export default Navbar;