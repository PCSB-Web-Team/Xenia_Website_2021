import React from 'react';
import './Cards/Card.css';
import MoreInfo from './MoreInfo/MoreInfo';
import './Events.css';
import Card from './Cards/Card';
import SideEvents from './SideEvents/SideEvents';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import * as allEvents from '../Event Details/AllEvents';

let tech    = allEvents.tech;
let nonTech = allEvents.nonTech;

class Events extends React.Component {
  
  constructor(props){
    
    super(props);
    this.state={
        eventType: 'tech',

        view: 'cards',
        
        currEventList: tech,

        currEvent: null,
      }
  }

  handleMoreInfo = (eventSelected) => {
    this.setState({view: 'moreInfo', currEvent: eventSelected});
  }

  handleClose = (e) => {
    this.setState({view: 'cards'})
  }

  handleTab = (e) => {
    if(e.target.id==='tech-tab') this.setState({eventType: 'tech', currEventList: tech});
    else this.setState({eventType: 'non-tech', currEventList: nonTech})
    this.setState({view: 'cards'})
  }

  handleRegister = (e) =>{
    alert("You WIll Be Redirected to Payments Portal")
  }

  readMore = (e) => {
    
  }

  render(){
    
  const techCards = tech.map(eve => {
    return(
      <div className="card-div">
          <Card props={eve} allEvents={tech} readmore={()=>{this.setState({view: 'moreInfo', currEvent: eve})}}/>        
      </div>
  )
  });
  
  const nonTechCards = nonTech.map(eve => {
    return(
      <div className="card-div">
          <Card props={eve} allEvents={nonTech} readmore={()=>{this.setState({view: 'moreInfo', currEvent: eve})}}/>        
      </div>
  )
  });

  return (

    <div className="events-dashboard">
      { 
        this.state.view==='cards' 
        ?         
        <div className="card-container">
          {
          <div className="tabs">
            <button className={this.state.eventType==='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={this.handleTab} id='tech-tab'>Tech</button>
            <button className={this.state.eventType!=='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={this.handleTab} id='non-tech-tab'>Non-Tech</button>
          </div>
          }

          
          {this.state.eventType === 'tech' ? techCards    : null}
          {this.state.eventType !== 'tech' ? nonTechCards : null}

          <SideEvents/>
        </div>
        :
        <MoreInfo eventType={this.state.eventType} logedIn={this.props.logedIn} close={this.handleClose.bind(this)} handleRegister={this.handleRegister} details={this.state.currEvent} />
      }
    </div>
  );
  
}
}

export default Events;
