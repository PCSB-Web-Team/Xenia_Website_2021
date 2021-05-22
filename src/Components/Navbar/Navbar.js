import React from "react";
import { connect } from "react-redux";
import {
  NavLink,
} from "react-router-dom";
import cart from "../../Assets/Images/cart.png";
import "./Navbar.css";
import LoginModal from "../Auth/Login";
import RegisterModal from "../Auth/Register";
import { openLogin } from '../../Store/Actions';
import { Zoom } from 'react-reveal'

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

      <header className='Header'>

        <div className='navBar'>

          <div className='brand'> XENIA </div>

          <Zoom bottom cascade duration={500}>

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
                Profile{" "}
                  </NavLink>
                </div>
              ) : null}

              {props.isLoggedIn ? (
                <div>
                  <NavLink to='/cart'
                    className="nav-cart"
                    id="cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </NavLink>
                </div>
              ) : null}

            </div>

            <div><div onClick={openNavBar} className="navbar-toggler">&#9776; </div></div>
            <div onClick={closeNavBar} className='nav-close'><i class="fa fa-close"></i></div>
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
    cart: state.userData.cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    openLogin: () => { dispatch(openLogin()) },
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar);