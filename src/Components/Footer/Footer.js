import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import BackToTop from "./BackToTop/BacktoTop";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <BackToTop></BackToTop>

      <MDBFooter className="pageFooter pt-0">
        <MDBContainer className="mt-2 mb-2 text-center">
          <MDBRow className="footerRow p-4 d-flex mx-auto">
            <div className="block1 d-flex mx-auto">
              <div className="column1 mx-auto">
                <h6 className="text-center text-uppercase ">
                  <strong>PCSB - Xenia</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "80px" }}
                />
                <div className="nav-content">
                  About our Xenia event. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </div>
              </div>
              <div className="column2 mx-auto">
                <h6 className="text-uppercase ">
                  <strong>Events</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "50px" }}
                />
                <div className="nav-content">
                  <a href="#!">Technical</a>
                </div>
                <div className="nav-content">
                  <a href="#!">Non-Technical</a>
                </div>
              </div>
            </div>
            <div className="block2 d-flex mx-auto">
              <div className="column3 mx-auto">
                <h6 className="text-uppercase ">
                  <strong>Useful links</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "80px" }}
                />
                <div className="nav-content">
                  <a href="#!">Your Account</a>
                </div>
                <div className="nav-content">
                  <a href="#!">Log In</a>
                </div>
                <div className="nav-content">
                  <a href="#!">Help</a>
                </div>
              </div>
              <div className="column4 mx-auto">
                <h6 className="text-uppercase ">
                  <strong>Contact</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <div className="nav-content">
                  <i className="fa fa-home mr-3" />
                  Dhanakawadi, Katraj, Pune
                </div>
                <div className="nav-content">
                  <i className="fa fa-envelope mr-3" />
                  pictcsi@gmail.com
                </div>
                <div className="nav-content">
                  <i className="fa fa-phone mr-3" />
                  +91 1234567890
                </div>
              </div>
            </div>
          </MDBRow>
          <div className="text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-lg btn-ldi mx-1">
                  <i
                    className="footerIcon fa fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-lg btn-tw mx-1">
                  <i
                    className="footerIcon fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-lg btn-itg mx-1">
                  <i
                    className="footerIcon fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </MDBContainer>

        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "#000" }}
        >
          <MDBContainer fluid style={{ color: "#fff" }}>
            &copy; {new Date().getFullYear()} PICT CSI Student
            Branch. Designed & Developed with ♥ by{" "}
            <Link onClick={document.documentElement.scrollTop=0} to='/webteam' className="footerWebTeam" >
              PCSB Web Team
            </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
