import React from "react";
import './Footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-0">
      {/* <div style={{ backgroundColor: "#000" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="social-media text-center text-md-right">
              <a className="youtube-ic">
                <i className="fab fa-youtube white-text mx-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mx-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mx-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div> */}
      <MDBContainer className="mt-5 mb-4 text-center d-flex justify-content-between">
        <MDBRow className="nav-col mt-3 p-4">
          <MDBCol md="3" lg="4" className="mb-4 p-3">
            <h6 className="text-center text-uppercase font-weight-bold">
              <strong>PCSB - Xenia</strong>
            </h6>
            <hr className="#ffffff white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px" }} />
            <p className="nav-content">
              About our Xenia event. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 p-3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Events</strong>
            </h6>
            <hr className="#ffffff white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "50px" }} />
            <p className="nav-content">
              <a href="#!">Technical</a>
            </p>
            <p className="nav-content">
              <a href="#!">Non-Technical</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 p-3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="#ffffff white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px" }} />
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
          <MDBCol md="4" lg="3" xl="3" className="mb-4 p-3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="#ffffff white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
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
      <div className="footer-copyright text-center py-3" style={{ backgroundColor: "#000" }}>
        <MDBContainer fluid style={{ color: "#fff"}}>
          &copy; {new Date().getFullYear()} Copyright: PICT CSI Student Branch. All Rights Reserved. Designed & Developed with ♥ by PCSB Web Team
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;