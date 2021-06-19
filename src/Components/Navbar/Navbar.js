import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import cart from "../../Assets/Images/cart.png";
import "./Navbar.css";
import LoginModal from "../Auth/Login";
import RegisterModal from "../Auth/Register";
import { openLogin } from "../../Store/Actions";
import { Zoom } from "react-reveal";
import XeniaLogo from "../../Assets/Images/xeniaLogo.png";

const Navbar = (props) => {
  const [navState, setNavState] = useState(false);

  const openNavBar = () => {
    let cross = document.getElementsByClassName("nav-close");
    let list = document.getElementsByClassName("nav-list");

    list[0].classList.toggle("mob-nav");
    list[0].classList.toggle("list");

    cross[0].style.display = "block";

    setNavState(true);
  };

  const closeNavBar = () => {
    let cross = document.getElementsByClassName("nav-close");
    let list = document.getElementsByClassName("nav-list");

    list[0].classList.toggle("mob-nav");
    list[0].classList.toggle("list");

    cross[0].style.display = "none";

    setNavState(false);
  };

  return (
    <div>
      <header className="Header">
        <div className="navBar">
          <NavLink to="/" className="brand">
            {" "}
            <img src={XeniaLogo} alt="img" />{" "}
          </NavLink>

          <Zoom bottom cascade duration={500}>
            <div className="list nav-list">
              <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  exact
                  to="/"
                >
                  {" "}
                  Home{" "}
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/schedule"
                >
                  {" "}
                  Schedule{" "}
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/events"
                >
                  {" "}
                  Events{" "}
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/build-up-events"
                >
                  {" "}
                  Build Up Events{" "}
                </NavLink>
              </div>
              <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/industry-talks"
                >
                  {" "}
                  Industry Talks{" "}
                </NavLink>
              </div>
              {/* <div>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/sponsors"
                >
                  {" "}
                  Sponsors{" "}
                </NavLink>
              </div> */}
              <div className='contact-us-navbar'>
                <NavLink
                  className="navItem"
                  activeClassName="active-nav"
                  onClick={navState ? closeNavBar : null}
                  to="/contact-us"
                >
                  {" "}
                  Contact Us{" "}
                </NavLink>
              </div>

              {props.isLoggedIn ? null : <div className='navItem' activeClassName='active-nav' onClick={props.openLogin}> Login </div>}

              {props.isLoggedIn ? (
                <div>
                  <NavLink
                    to="/profile"
                    activeClassName="active-nav"
                    className="navItem"
                    onClick={navState ? closeNavBar : null}
                  >
                    Profile
                  </NavLink>
                </div>
              ) : null}
            </div>

            <div>
              <div onClick={openNavBar} className="navbar-toggler">
                &#9776;{" "}
              </div>
            </div>
            <div onClick={closeNavBar} className="nav-close">
              <i className="fa fa-close"></i>
            </div>
          </Zoom>
        </div>
      </header>

      <LoginModal />
      <RegisterModal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popLogin: state.popLogin,
    isLoggedIn: state.login,
    // cart: state.userData.cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    openLogin: () => {
      dispatch(openLogin());
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
