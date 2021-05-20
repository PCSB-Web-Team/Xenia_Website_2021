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

  const openNavBar = () => {

    let cross = document.getElementsByClassName("nav-close");
    let list = document.getElementsByClassName("nav-list");

    list[0].classList.toggle("mob-nav")
    list[0].classList.toggle("list")

    cross[0].style.display = "block"

  }

  const closeNavBar = () => {

    let cross = document.getElementsByClassName("nav-close");
    let list = document.getElementsByClassName("nav-list");

    list[0].classList.toggle("mob-nav")
    list[0].classList.toggle("list")

    cross[0].style.display = "none"

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

        <div className='navBar'>

          <div className='brand'> XENIA </div>

          <div className='list nav-list'>
            <div><NavLink className='navItem' activeClassName='active-nav' exact to='/'> Home </NavLink></div>
            <div><NavLink className='navItem' activeClassName='active-nav' to='/schedule'> Schedule </NavLink></div>
            <div><NavLink className='navItem' activeClassName='active-nav' to='/events'> Events </NavLink></div>
            <div><NavLink className='navItem' activeClassName='active-nav' to='/side-events'> Side Events </NavLink></div>
            <div><NavLink className='navItem' activeClassName='active-nav' to='/sponsors'> Sponsors </NavLink></div>
            {props.isLoggedIn ? null : <div className='navItem' activeClassName='active-nav' onClick={props.openLogin}> Login </div>}

            {props.isLoggedIn ? (
              <div>
                <NavLink
                  to="/profile"
                  activeClassName="active-nav"
                  className="navItem"
                >
                  {" "}
                Slots{" "}
                </NavLink>
              </div>
            ) : null}

            {props.isLoggedIn ? (
              <div>
                <NavLink to='/cart'
                  className="navItem nav-cart"
                  activeClassName='active-nav'
                  id="cart"
                >
                  <img src={cart} alt=''></img>

                  <i
                    className="footerIcon fa fa-cart"
                    aria-hidden="true"
                  ></i>

                </NavLink>
              </div>
            ) : null}
          </div>

          <div><div onClick={openNavBar} className="navbar-toggler">&#9776; </div></div>
          <div onClick={closeNavBar} className='nav-close'>X</div>

        </div>

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