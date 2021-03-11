import React from 'react';
import logo from './logo1.jpeg'; 
import down from './down.png';
import cart from './cart.png';
import styles from './Navbar.css';

import {popLogin,closeLogin, popSignUp, closeSignUp} from '../../Store/Actions';

import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";
import {connect} from 'react-redux';

class Navbar extends React.Component {

    constructor(props){
      super(props);
      this.state={
        view: 'down'
      }
  
    }

    handleNavDisplay = (e) => {
      if(this.state.view==='down')  this.setState({view: 'up'})
      else this.setState({view: 'down'})
    }

    handleNavView=()=>{
      if(this.state.view==='down')  this.setState({view: 'up'})
      else this.setState({view: 'down'})
    }

   render(){
    return (
    <div>
      <div className="NavBar" id='navBar'>         
        
        <div className="brand" style={{float: "left"}}>
          <a className="nav-brand" href="#home">
              <img  alt=""  src= {logo}  width="40"  height="40"  className="logo" />
              <span className="brandName">PCSB - Xenia</span>
          </a>
        </div>

        <div className="items" >

          <NavLink to="/"      exact activeClassName='active-nav' className='nav-tabs'>  Home        </NavLink>
          <NavLink to='/schedule'    activeClassName='active-nav' className='nav-tabs'>  Schedule    </NavLink>
          <NavLink to='/events'      activeClassName='active-nav' className='nav-tabs'>  Events      </NavLink>
          <NavLink to='/about-us'    activeClassName='active-nav' className='nav-tabs'>  About Us    </NavLink>
          <NavLink to='/contact-us'  activeClassName='active-nav' className='nav-tabs'>  Contact Us  </NavLink>
          
          {this.props.isLoggedIn ? 
          <NavLink to='/profile'     activeClassName='active-nav' className='nav-tabs'>  Profile    </NavLink> : null }
          
          {!this.props.isLoggedIn ? <div className="nav-tabs" onClick={this.props.openLogin}  id='contact' href="#Contact-us">Login</div> : null}
          {!this.props.isLoggedIn ? <div className="nav-tabs" onClick={this.props.openSignUp} id='contact' href="#Contact-us">Sign Up</div> : null }

        </div>

      <a id='nav-arrow' onClick={this.handleNavDisplay}><img src={down} className={this.state.view}></img></a>
      {
        this.state.view==='up'
        ?
        <div className="MobileNav" >
        
          <NavLink to="/"      exact activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Home       </NavLink>
          <NavLink to='/schedule'    activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Schedule   </NavLink>
          <NavLink to='/events'      activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Events     </NavLink>
          <NavLink to='/about-us'    activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  About Us   </NavLink>
          <NavLink to='/contact-us'  activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Contact Us </NavLink>
          
          {this.props.isLoggedIn ? 
          <NavLink to='/profile'     activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Profile    </NavLink>
          : null }
          
          {!this.props.isLoggedIn ? <div className="nav-tabs"  onClick={this.props.openLogin}  id='contact' href="#Contact-us"> Login   </div> : null}
          {!this.props.isLoggedIn ? <div className="nav-tabs"  onClick={this.props.openSignUp} id='contact' href="#Contact-us"> Sign Up </div> : null }
        
        </div>
          :
          null
      }
      
      <NavLink to='/cart'>  { this.props.isLoggedIn  ?
          <div className='cart-logo' id='cart' onClick={() => {this.setState({view: 'down'})}}>
              <img src={cart}></img>
              <span>{this.props.cart.length}</span>
          </div>
          :
          null
        }
      </NavLink>

      </div>

      </div>
    );
   }
}

const mapStateToProps = state => {
  return{
    popLogin: state.popLogin,
    isLoggedIn: state.login,
    cart: state.cart
  }
}

const mapActionsToProps = dispatch => {
  return{
    openLogin: () => { dispatch( popLogin()) },
    closeLogin: () => { dispatch( closeLogin()) },
    openSignUp: () => { dispatch( popSignUp()) }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Navbar);