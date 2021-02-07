import React from 'react';
import './Navbar.css'
import logo from './logo1.jpeg'; 
import * as RBS from "react-bootstrap";

function Navbar() {
    return (
        <div className="App">
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
                <RBS.Nav.Link className="navlink-hover" href="#home">Home</RBS.Nav.Link>
                <RBS.Nav.Link className="navlink-hover" href="#about-us">About Us</RBS.Nav.Link>
                <RBS.NavDropdown title="Events" id="collasible-nav-dropdown">
                  <RBS.NavDropdown.Item href="#action/3.1">Action</RBS.NavDropdown.Item>
                  <RBS.NavDropdown.Item href="#action/3.2">Another action</RBS.NavDropdown.Item>
                  <RBS.NavDropdown.Item href="#action/3.3">Something</RBS.NavDropdown.Item>
                  {/* <RBS.NavDropdown.Divider />
                  <RBS.NavDropdown.Item href="#action/3.4">Separated link</RBS.NavDropdown.Item> */}
                </RBS.NavDropdown>
                <RBS.Nav.Link className="navlink-hover" href="#team">Team</RBS.Nav.Link>
                {/* <RBS.Nav.Link href="#gallery">Gallery</RBS.Nav.Link> */}
                <RBS.Nav.Link className="navlink-hover" href="#contact-us">Contact Us</RBS.Nav.Link>
              </RBS.Nav>
            </RBS.Navbar.Collapse>
          </RBS.Navbar>
        </div>
      );
}

export default Navbar;