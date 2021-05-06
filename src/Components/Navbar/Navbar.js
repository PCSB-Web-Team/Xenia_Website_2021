import React, { useState } from "react";
import { connect } from "react-redux";
import {
  NavLink,
} from "react-router-dom";
//Images
// import logo from "../../Assets/Images/logo1.jpeg";
// import down from "../../Assets/Images/down.png";
import cart from "../../Assets/Images/cart.png";
// import pcsbLogo from "../../Assets/Images/PCSBlogo.jpeg";
//components
import "./Navbar.css";
import LoginModal from "../Auth/Login";
import RegisterModal from "../Auth/Register";
import { openLogin } from '../../Store/Actions';

const Navbar = (props) => {
  const [view, setView] = useState("down");

  const handleNavView = (e) => {
    if (view === "down") setView("up");
    else setView("down");
  };

  //States For Login/Signup PopUp
  // const [viewLogin, setLogin] = useState(false);
  // const [viewRegister, setRegister] = useState(false);

  // const openLogin = () => setLogin(true);

  // const toggleView = () => {
  //   console.log("toggle");

  //   if (viewLogin) {
  //     setLogin(false);
  //     setRegister(true);
  //   } else {
  //     setLogin(true);
  //     setRegister(false);
  //   }
  // };

  // const closeView = () => {
  //   setLogin(false);
  //   setRegister(false);
  // };

  return (
    <div>
      {/* <div className="NavBar" id="navBar">
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
              onClick={props.openLogin}
              id="contact"
              href="#Contact-us"
            >
              {" "}
              Login{" "}
            </div>
          ) : null}
        </div>

        <div id="nav-arrow" onClick={handleNavView}>
          <img src={down} alt='' className={view}></img>
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

            <NavLink
              to="/sponsors"
              activeClassName="active-nav"
              className="nav-tabs"
              onClick={handleNavView}
            >
              {" "}
              Sponsors{" "}
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

            {!props.isLoggedIn ? <div className="nav-tabs" onClick={props.openLogin} id='contact' href="#Contact-us"> Login   </div> : null}

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
              <img src={cart} alt=''></img>
              <span> {props.cart.length} </span>
            </div>
          ) : null}
        </NavLink>
      </div> */}

      <LoginModal
      // view={viewLogin}
      // close={closeView}
      // toggle={toggleView}
      ></LoginModal>
      <RegisterModal
      // view={viewRegister}
      // close={closeView}
      // toggle={toggleView}
      ></RegisterModal>

      <header className='Header'>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">

            <span className="navbar-brand">XENIA</span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-black"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <NavLink className='nav-item' activeClassName='active-nav' exact to='/'> Home </NavLink>
                <NavLink className='nav-item' activeClassName='active-nav' to='/schedule'> Schedule </NavLink>
                <NavLink className='nav-item' activeClassName='active-nav' to='/events'> Events </NavLink>
                <NavLink className='nav-item' activeClassName='active-nav' to='/about-us'> About Us </NavLink>
                <NavLink className='nav-item' activeClassName='active-nav' to='/sponsors'> Sponsors </NavLink>
                <div className='nav-item' activeClassName='active-nav' onClick={props.openLogin}> Login </div>

                {props.isLoggedIn ? (
                  <NavLink
                    to="/profile"
                    activeClassName="active-nav"
                    className="nav-item"
                    onClick={handleNavView}
                  >
                    {" "}
                Slots{" "}
                  </NavLink>
                ) : null}

                <NavLink to="/cart">
                  {props.isLoggedIn ? (
                    <div
                      className="cart-logo"
                      id="cart"
                      onClick={() => {
                        setView("down");
                      }}
                    >
                      <img src={cart} alt=''></img>
                      <span> {props.cart.length} </span>
                    </div>
                  ) : null}
                </NavLink>

              </ul>
            </div>

          </div>
        </nav>
      </header>

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

const mapActionsToProps = (dispatch) => {
  return {
    openLogin: () => { dispatch(openLogin()) },
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar);