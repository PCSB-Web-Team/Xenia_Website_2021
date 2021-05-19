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

  const toggleHeaderHeight = () => {
    
    // let header = document.getElementsByTagName("header")

    // header[0].classList.toggle("open-mobile-nav")

  }

  return (
    <div>

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
              <span onClick={toggleHeaderHeight} className="navbar-toggler-icon text-black"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <div><NavLink className='nav-item' activeClassName='active-nav' exact to='/'> Home </NavLink></div>
                <div><NavLink className='nav-item' activeClassName='active-nav' to='/schedule'> Schedule </NavLink></div>
                <div><NavLink className='nav-item' activeClassName='active-nav' to='/events'> Events </NavLink></div>
                <div><NavLink className='nav-item' activeClassName='active-nav' to='/about-us'> About Us </NavLink></div>
                <div><NavLink className='nav-item' activeClassName='active-nav' to='/sponsors'> Sponsors </NavLink></div>
                {props.isLoggedIn ? null : <div className='nav-item' activeClassName='active-nav' onClick={props.openLogin}> Login </div> }

                {props.isLoggedIn ? (
                  <div>
                  <NavLink
                    to="/profile"
                    activeClassName="active-nav"
                    className="nav-item"
                  >
                    {" "}
                Slots{" "}
                  </NavLink>
                  </div>
                ) : null}

                {props.isLoggedIn ? (
                  <div>
                  <NavLink to='/cart'
                    className="nav-item nav-cart"
                    activeClassName='active-nav'
                    id="cart"
                  >
                    <img src={cart} alt=''></img>
                    {/* <span> {props.cart.length} </span> */}
                    
                    <i
                      className="footerIcon fa fa-cart"
                      aria-hidden="true"
                    ></i>
                  
                  </NavLink>
                  </div>
                ) : null}

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