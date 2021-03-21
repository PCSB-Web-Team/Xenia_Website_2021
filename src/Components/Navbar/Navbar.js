import React, { useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
//Images
import logo from "../../Assets/Images/logo1.jpeg";
import down from "../../Assets/Images/down.png";
import cart from "../../Assets/Images/cart.png";
import pcsbLogo from "../../Assets/Images/PCSBlogo.jpeg";
//components
import styles from "./Navbar.css";
import LoginModal from "../Auth/Login";
import RegisterModal from "../Auth/Register";

const Navbar = (props) => {
  const [view, setView] = useState("down");

  const handleNavView = (e) => {
    if (view === "down") setView("up");
    else setView("down");
  };

  //States For Login/Signup PopUp
  const [viewLogin, setLogin] = useState(false);
  const [viewRegister, setRegister] = useState(false);

  const openLogin = () => setLogin(true);

  const toggleView = () => {
    console.log("toggle");

    if (viewLogin) {
      setLogin(false);
      setRegister(true);
    } else {
      setLogin(true);
      setRegister(false);
    }
  };

  const closeView = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <div>
      <div className="NavBar" id="navBar">
        <div className="brand" style={{ float: "left" }}>
          <Link className="nav-brand" to="/">
            <img alt="" src={logo} width="40" height="40" className="logo" />
            <span className="brandName">PCSB - Xenia</span>
          </Link>
        </div>

        <div className="items">
          <NavLink
            to="/"
            exact
            activeClassName="active-nav"
            className="nav-tabs"
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink
            to="/schedule"
            activeClassName="active-nav"
            className="nav-tabs"
          >
            {" "}
            Schedule{" "}
          </NavLink>
          <NavLink
            to="/events"
            activeClassName="active-nav"
            className="nav-tabs"
          >
            {" "}
            Events{" "}
          </NavLink>
          <NavLink
            to="/about-us"
            activeClassName="active-nav"
            className="nav-tabs"
          >
            {" "}
            About Us{" "}
          </NavLink>
          <NavLink
            to="/sponsors"
            activeClassName="active-nav"
            className="nav-tabs"
          >
            {" "}
            Sponsors{" "}
          </NavLink>

          {props.isLoggedIn ? (
            <NavLink
              to="/profile"
              activeClassName="active-nav"
              className="nav-tabs"
            >
              {" "}
              Slots{" "}
            </NavLink>
          ) : null}

          {!props.isLoggedIn ? (
            <div
              className="nav-tabs"
              onClick={openLogin}
              id="contact"
              href="#Contact-us"
            >
              {" "}
              Login{" "}
            </div>
          ) : null}
        </div>

        <div id="nav-arrow" onClick={handleNavView}>
          <img src={down} className={view}></img>
        </div>
        {view === "up" ? (
          <div className="MobileNav">
            <NavLink
              to="/"
              exact
              activeClassName="active-nav"
              className="nav-tabs"
              onClick={handleNavView}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to="/schedule"
              activeClassName="active-nav"
              className="nav-tabs"
              onClick={handleNavView}
            >
              {" "}
              Schedule{" "}
            </NavLink>
            <NavLink
              to="/events"
              activeClassName="active-nav"
              className="nav-tabs"
              onClick={handleNavView}
            >
              {" "}
              Events{" "}
            </NavLink>
            <NavLink
              to="/about-us"
              activeClassName="active-nav"
              className="nav-tabs"
              onClick={handleNavView}
            >
              {" "}
              About Us{" "}
            </NavLink>

            {props.isLoggedIn ? (
              <NavLink
                to="/profile"
                activeClassName="active-nav"
                className="nav-tabs"
                onClick={handleNavView}
              >
                {" "}
                Slots{" "}
              </NavLink>
            ) : null}

            {!props.isLoggedIn ? <div className="nav-tabs"  onClick={ openLogin }  id='contact' href="#Contact-us"> Login   </div> : null}
            
            {/* {!props.isLoggedIn ? (
              <div
                className="nav-tabs"
                onClick={openLogin}
                id="contact"
                href="#Contact-us"
              >
                {" "}
                Login{" "}
              </div>
            ) : null} */}

            <div className="navLogos">
              <div className="xeniaLogo">
                <Link to="/" onClick={handleNavView}>
                  <img
                    alt=""
                    src={logo}
                    width="140"
                    height="140"
                    className="moblogo2"
                  />
                </Link>
              </div>
              <div className="pcsbLogo">
                <a
                  href="https://www.pictcsi.com/"
                  target="_blank"
                  onClick={handleNavView}
                >
                  <img
                    alt=""
                    src={pcsbLogo}
                    width="140"
                    height="140"
                    className="moblogo1"
                  />
                </a>
              </div>
            </div>


          </div>
        ) : null}

        <NavLink to="/cart">
          {" "}
          {props.isLoggedIn ? (
            <div
              className="cart-logo"
              id="cart"
              onClick={() => {
                setView("down");
              }}
            >
              <img src={cart}></img>
              <span> {props.cart.length} </span>
            </div>
          ) : null}
        </NavLink>
      </div>

      <LoginModal
        view={viewLogin}
        close={closeView}
        toggle={toggleView}
      ></LoginModal>
      <RegisterModal
        view={viewRegister}
        close={closeView}
        toggle={toggleView}
      ></RegisterModal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popLogin: state.popLogin,
    isLoggedIn: state.login,
    cart: state.userData.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
