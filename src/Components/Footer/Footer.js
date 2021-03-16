import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import BacktoTop from "./BackToTop/BacktoTop";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <BacktoTop></BacktoTop>

      <MDBFooter className="pageFooter pt-0">
        <MDBContainer className="mt-2 mb-2 text-center">
          <MDBRow className="footerRow p-3 d-flex mx-auto">
            <div className="block1 d-flex mx-auto">
              <div className="column1 mx-auto">
                <h6 className="text-center text-uppercase font-weight-bold">
                  <strong>PCSB - Xenia</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "80px" }}
                />
                <p className="nav-content">
                  About our Xenia event. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </div>
              <div className="column2 mx-auto">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Events</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "50px" }}
                />
                <p className="nav-content">
                  <a href="#!">Technical</a>
                </p>
                <p className="nav-content">
                  <a href="#!">Non-Technical</a>
                </p>
              </div>
            </div>
            <div className="block2 d-flex mx-auto">
              <div className="column3 mx-auto">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Useful links</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
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
              </div>
              <div className="column4 mx-auto">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p className="nav-content">
                  <i className="fa fa-home mr-3" />
                  Dhanakawadi, Katraj, Pune
                </p>
                <p className="nav-content">
                  <i className="fa fa-envelope mr-3" />
                  pictcsi@gmail.com
                </p>
                <p className="nav-content">
                  <i className="fa fa-phone mr-3" />
                  +91 1234567890
                </p>
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
            &copy; {new Date().getFullYear()} Copyright: PICT CSI Student
            Branch. All Rights Reserved. Designed & Developed with ♥ by{" "}
            <Link to='/webteam' className="footerWebTeam">
              PCSB Web Team
            </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
