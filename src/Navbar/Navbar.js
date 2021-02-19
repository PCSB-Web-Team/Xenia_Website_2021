import React from 'react';
import logo from './logo1.jpeg'; 
import down from './down.png';
import Store from '../Store/Store';
import store from '../Store/Store';
class Navbar extends React.Component {

    constructor(props){
  
      super(props);
  
      this.state={
        login: Store.getState().login,
        view: 'down'
      }
  
    }

    handleNavView=(e)=>{
  
      if(this.state.view==='down')  this.setState({view: 'up'})
      else this.setState({view: 'down'})
  
    }

   render(){
    return (
      <div className="NavBar" id='navBar'>         

        <div className="brand" style={{float: "left"}}>
          <a className="nav-brand" href="#home">
              <img
                alt=""
                src= {logo}
                width="40"
                height="40"
                className="logo"  //"d-inline-block align-top"
              />
              <span className="brandName">Xenia</span>
          </a>
        </div>

        <div className="items" >
          <div className={this.props.activeTab==='home'    ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab} id='home' href="#Home">Home</div>
          <div className={this.props.activeTab==='events'  ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab} id='events' href="#Events">Events</div>
          <div className={this.props.activeTab==='aboutus' ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab} id='aboutus' href="#About-Us">About Us</div>
          <div className={this.props.activeTab==='contact' ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab} id='contact' href="#Contact-us">Contact Us</div>

          {!this.props.login ? <div className="nav-tabs" onClick={this.props.handleLogin}  id='contact' href="#Contact-us">Login</div> : null}
          {!this.props.login ? <div className="nav-tabs" onClick={this.props.handleSignUp} id='contact' href="#Contact-us">Sign Up</div> : null }
          
          {this.props.login  ? <div className={this.props.activeTab==='profile'  ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab} id='profile' href="#Contact-us">Profile</div> : null }
          {this.props.login  ? <div className="nav-tabs" onClick={this.props.handleLogout}  id='contact' href="#Contact-us">Logout</div> : null }
        </div>


      <a onClick={this.handleNavView}><img src={down} className={this.state.view}></img></a>
      {
        this.state.view==='up'
        ?
        <div className="list-items" >
        
          <div className={this.props.activeTab==='home'    ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab}  id='home' href="#Home">Home</div>
          <div className={this.props.activeTab==='events'  ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab}  id='events' href="#Events">Events</div>
          <div className={this.props.activeTab==='aboutus' ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab}  id='aboutus' href="#About-Us">About Us</div>
          <div className={this.props.activeTab==='contact' ? "nav-tabs active-nav" : "nav-tabs"} onClick={this.props.changeTab}  id='contact' href="#Contact-us">Contact Us</div>

          {!this.props.login ?  <div className="nav-tabs" onClick={this.props.handleLogin}  id='contact' href="#Contact-us">Login</div> : null}
          {!this.props.login ? <div className="nav-tabs"  onClick={this.props.handleSignUp} id='contact' href="#Contact-us">Sign Up</div> : null }
          
          {this.props.login  ? <div className={this.props.activeTab==='profile'  ? "nav-tabs active-nav" : "nav-tabs"}  onClick={this.props.changeTab} id='profile' href="#Contact-us">Profile</div> : null }
          {this.props.login  ? <div className="nav-tabs"  onClick={this.props.handleLogout}  id='contact' href="#Contact-us">Logout</div> : null }
        
        </div>
          :
          null
      }
      </div>
    );
   }
}

export default Navbar;