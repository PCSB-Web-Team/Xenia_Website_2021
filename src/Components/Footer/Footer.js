import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import BacktoTop from "./BackToTop/BacktoTop";

const Footer = () => {
  return (
    <div>
      <BacktoTop></BacktoTop>

      <MDBFooter className="page-footer font-small pt-0">
        <MDBContainer className="mt-2 mb-2 text-center">
          <MDBRow className="nav-col p-3">
            <MDBCol md="3" lg="4" className="p-2">
              <h6 className="text-center text-uppercase font-weight-bold">
                <strong>PCSB - Xenia</strong>
              </h6>
              <hr
                className="#ffffff white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px" }}
              />
              <p className="nav-content">
                About our Xenia event. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="p-2">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Events</strong>
              </h6>
              <hr
                className="#ffffff white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "50px" }}
              />
              <p className="nav-content">
                <a href="#!">Technical</a>
              </p>
              <p className="nav-content">
                <a href="#!">Non-Technical</a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="p-2">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="#ffffff white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px" }}
              />
              <p className="nav-content">
                <a href="#!">Your Account</a>
              </p>
              <p className="nav-content">
                <a href="#!">Log In</a>
              </p>
              <p className="nav-content">
                <a href="#!">Help</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="p-2">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="#ffffff white mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p className="nav-content">
                <i className="fa fa-home mr-3" /> Dhanakawadi, Katraj, Pune
              </p>
              <p className="nav-content">
                <i className="fa fa-envelope mr-3" /> pictcsi@gmail.com
              </p>
              <p className="nav-content">
                <i className="fa fa-phone mr-3" /> +91 1234567890
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "#000" }}
        >
          <MDBContainer fluid style={{ color: "#fff" }}>
            &copy; {new Date().getFullYear()} Copyright: PICT CSI Student
            Branch. All Rights Reserved. Designed & Developed with ♥ by PCSB Web
            Team
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
