import React,{useEffect,useState} from 'react';
import './Cards/Card.css';
import MoreInfo from './MoreInfo/MoreInfo';
import './Events.css';
import Card from './Cards/Card';
import SideEvents from './SideEvents/SideEvents';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import * as allEvents from '../../Event Details/AllEvents';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom';
import {getEventData} from '../../Store/Actions';
import axios from 'axios';

const Events = (props) => {
  
  const [eventType, setEventType] = useState('tech');
  const [view, setView] = useState('cards');
  const [techEvents, setTech] = useState([]);
  const [nonTechEvents, setNonTech] = useState([]);

  useEffect(() => { fetchData() }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://xenia-backend.herokuapp.com/api/events')

      if(response.data.ok){

        let tech = [];
        let nonTech =[];

        tech = response.data.data.filter(  eve => eve.isTechnical )
        nonTech = response.data.data.filter( eve => !eve.isTechnical )

        setTech(tech);
        setNonTech(nonTech);
        
      }

    }
    catch(err) {
      console.log(err)
    }
  }

  const changeEventType = () => {
    if (eventType === 'tech') setEventType('nonTech')
    else setEventType('tech')
  }

  return (
    <div className="events-dashboard">
      <div className="card-container">
          
          <div className="tabs">
            <button className={eventType==='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={changeEventType} id='tech-tab'>Tech</button>
            <button className={eventType!=='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={changeEventType} id='non-tech-tab'>Non-Tech</button>
          </div>
          
          <div className="card-container">
            {eventType ==='tech' ? techEvents.map( eve => (<div className='card-div'>    <Link key={eve._id} to={`/events/${eve._id}`}><Card details = {eve} ></Card></Link> </div>) ) : null}
            {eventType !=='tech' ? nonTechEvents.map( eve => (<div className='card-div'> <Link key={eve._id} to={`/events/${eve._id}`}><Card details = {eve} ></Card></Link> </div>) ) : null}
          </div>

      </div>
    </div>
  )
}

/*
class Events extends React.Component {

  constructor(props){
    
    super(props);
    this.state = {
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

  render() {



  let techEvents=[];
  let nonTechEvents=[];

  let eventData = this.props.eventData;

  for(let i=0; i < 15; i++) {

    let element=eventData[i];

    if(element.isTechnical) {
      techEvents[techEvents.length] = <div className='card-div'> <Card details = {element} readmore = { () => {console.log('clicked')} }></Card> </div>
    }
    else {
      nonTechEvents [nonTechEvents.length] = <div className='card-div'> <Card details = {element} readmore = { () => {console.log('clicked')} }></Card> </div>
    }
  }


  const techCards = tech.map(eve => {
    return(
      <div className="card-div">
            <Card details={eve} allEvents={tech} readmore={()=>{this.setState({view: 'moreInfo', currEvent: eve})}}/>        
      </div>
  )
  });
  
  const nonTechCards = nonTech.map(eve => {
    return(
      <div className="card-div">
            <Card details={eve} allEvents={nonTech} readmore={()=>{this.setState({view: 'moreInfo', currEvent: eve})}}/>        
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

          {this.state.eventType === 'tech' ? techEvents : null}
          {this.state.eventType !== 'tech' ? nonTechEvents : null}

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
*/

const mapStatesToProps = state => {

  return {
    eventData: state.eventData
  }

}

const mapActionsToProps = dispatch => {
  return {
    storeEventData: (details) => { dispatch( getEventData( details ) ) }
  }
}

export default connect( mapStatesToProps, mapActionsToProps )( Events );
