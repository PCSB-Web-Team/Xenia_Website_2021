import React from 'react';
import logo from './logo1.jpeg'; 
import down from './down.png';
import * as RBS from "react-bootstrap"; 
import Slide from 'react-reveal/Slide';

class Navbar extends React.Component {

    constructor(props){
      super(props);
      this.state={
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
              <span className="brandName">PCSB</span>
          </a>
        </div>

        <div className="items" >
          <div className="nav-tabs" onClick={this.props.changeTab} id='home' href="#Home">Home</div>
          <div className="nav-tabs" onClick={this.props.changeTab} id='events' href="#Events">Events</div>
          <div className="nav-tabs" onClick={this.props.changeTab} id='teams' href="#Team">Team</div>
          <div className="nav-tabs" onClick={this.props.changeTab} id='aboutus' href="#About-Us">About Us</div>
          <div className="nav-tabs" onClick={this.props.changeTab} id='contact' href="#Contact-us">Contact Us</div>
        </div>


      <a onClick={this.handleNavView}><img src={down} className={this.state.view}></img></a>
      {
        this.state.view==='up'
        ?
        <div className="list-items" >
          <div className="nav-tabs" onClick={this.props.changeTab}  id='home' href="#Home">Home</div>
          <div className="nav-tabs" onClick={this.props.changeTab}  id='events' href="#Events">Events</div>
          <div className="nav-tabs" onClick={this.props.changeTab}  id='teams' href="#Team">Team</div>
          <div className="nav-tabs" onClick={this.props.changeTab}  id='aboutus' href="#About-Us">About Us</div>
          <div className="nav-tabs" onClick={this.props.changeTab}  id='contact' href="#Contact-us">Contact Us</div>
        </div>
          :
          null
      }
      </div>
    );
   }
}

export default Navbar;