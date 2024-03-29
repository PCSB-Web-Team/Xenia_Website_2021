import React from "react";
import "./Footer.css";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openLogin } from "../../Store/Actions";

const Footer = (props) => {
  return (
    <div>
      <div className="backtotop">
        <h4
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          style={{
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          GET BACK TO THE TOP
        </h4>
      </div>

      <MDBFooter className="pageFooter pt-0">
        <MDBContainer className="mt-2 mb-2 text-center">
          <MDBRow className="footerRow p-4 d-flex mx-auto">
            <div className="block1 d-flex mx-auto">
              <div className="column1 mx-auto">
                <h6 className="text-uppercase ">
                  <strong>PCSB - Xenia</strong>
                </h6>
                <hr
                  className="#ffffff white mt-0 d-inline-block mx-auto"
                  style={{ width: "80px" }}
                />
                <div className="nav-content">
                  Where Passion Meets Perfection
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
                  <Link
                    onClick={() => {
                      document.documentElement.scrollTop = 0;
                    }}
                    to="/events"
                  >
                    All Events
                  </Link>
                </div>
                <div className="nav-content">
                  <Link
                    onClick={
                      props.loggedIn
                        ? () => {
                            document.documentElement.scrollTop = 0;
                          }
                        : props.openLogin
                    }
                    to={props.loggedIn ? "/profile" : ""}
                  >
                    Registered Events
                  </Link>
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

                {!props.loggedIn && (
                  <div className="nav-content">
                    <Link onClick={props.openLogin}>Log In</Link>
                  </div>
                )}

                <div className="nav-content">
                  <Link
                    onClick={() => {
                      document.documentElement.scrollTop = 0;
                    }}
                    to="/contact-us"
                  >
                    Help
                  </Link>
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
                  <i className="fa fa-home mr-2" />
                  Dhanakawadi, Katraj, Pune
                </div>
                <div className="nav-content">
                  <i className="fa fa-envelope mr-2" />
                  support@pictcsi.com
                </div>
                <div className="nav-content">
                  <i className="fa fa-phone mr-2" />
                  +91 7028929568
                </div>
              </div>
            </div>
          </MDBRow>
          <div className="text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a
                  href="http://www.linkedin.com/company/pict-csi"
                  className="btn-floating btn-lg btn-ldi mx-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="footerIcon fa fa-linkedin fa-lg"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="http://www.facebook.com/csipict"
                  className="btn-floating btn-lg btn-fb mx-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="footerIcon fa fa-facebook fa-lg"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="http://www.instagram.com/csipict"
                  className="btn-floating btn-lg btn-itg mx-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="footerIcon fa fa-instagram fa-lg"
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
            &copy; {new Date().getFullYear()} PICT CSI Student Branch. Designed
            & Developed with ♥ by{" "}
            <Link
              onClick={() => {
                document.documentElement.scrollTop = 0;
              }}
              to="/webteam"
              className="footerWebTeam"
            >
              PCSB Web Team
            </Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    loggedIn: state.login,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    openLogin: () => {
      dispatch(openLogin());
    },
  };
};

export default connect(mapStatesToProps, mapActionsToProps)(Footer);
