import React from 'react';
import logo from './logo1.jpeg'; 
import down from './down.png';
import Store from '../Store/Store';
import cart from './cart.png';
import styles from './Navbar.css';

import Home from '../LandingPage/LandingPage';
import Schedule from '../Registrations/Registrations/Registrations';
import Events from '../Events/Events';
import AboutUs from '../AboutUs/About';
import ContactUs from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Cart from '../Profile/Cart';
import Profile from '../MyProf/MyProf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class Navbar extends React.Component {

    constructor(props){
  
      super(props);
  
      this.state={
        login: Store.getState().login,
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
    <Router>
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
          
          {this.props.login ? <NavLink to='/profile'     activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Profile    </NavLink> : null }
          
          {!this.props.login ? <div className="nav-tabs" onClick={this.props.handleLogin}  id='contact' href="#Contact-us">Login</div> : null}
          {!this.props.login ? <div className="nav-tabs" onClick={this.props.handleSignUp} id='contact' href="#Contact-us">Sign Up</div> : null }

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
          
          {this.props.login ? 
          <NavLink to='/profile'     activeClassName='active-nav' className='nav-tabs' onClick={this.handleNavView}>  Profile    </NavLink>
          : null }
          
          {!this.props.login ? <div className="nav-tabs"  onClick={this.props.handleLogin}  id='contact' href="#Contact-us"> Login   </div> : null}
          {!this.props.login ? <div className="nav-tabs"  onClick={this.props.handleSignUp} id='contact' href="#Contact-us"> Sign Up </div> : null }
        
        </div>
          :
          null
      }
      <NavLink to='/cart'>  { this.props.login  ?
          <div className='cart-logo' id='cart' onClick={this.handleNavView}>
              <img src={cart}></img>
              <span>{Store.getState().cart.length}</span>
          </div>
          :
          null
        }
      </NavLink>

      </div>
      <Switch>
        
        <Route path="/schedule">
          <Schedule />
          <Footer/>
        </Route>
        <Route path="/events">
          <Events />
          <Footer/>
        </Route>
        <Route path="/about-us">
          <AboutUs />
          <Footer/>
        </Route>
        <Route path="/contact-us">
          <ContactUs />
          <Footer/>
        </Route>
        <Route path='/cart'>
          <Cart/>
          <Footer/>
        </Route>
        <Route path='/profile'>
          <Profile/>
          <Footer/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      
      </Switch>

      </Router>
    );
   }
}

export default Navbar;