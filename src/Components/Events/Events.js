import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom';
import Loader from '../Loader/Loader';

import './Cards/Card.css';
import './Events.css';
import Card from './Cards/Card';
import SideEvents from './SideEvents/SideEvents';
import {getEventData, openLogin, closeLogin, toggleLogin} from '../../Store/Actions';

const Events = (props) => {
  
  const [eventType, setEventType] = useState('tech');
  const [view, setView] = useState('cards');
  const [techEvents, setTech] = useState([]);
  const [nonTechEvents, setNonTech] = useState([]);
  const [loading, setLoading] = useState(true);

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

    setLoading(false);
  }

  const changeEventType = () => {
    if (eventType === 'tech') setEventType('nonTech')
    else setEventType('tech')
  }

  return (

    <div className="events-dashboard">

    {loading ? <Loader/> : 

      <div className="card-container">
          <div className="tabs">
            <button className={eventType==='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={changeEventType} id='tech-tab'>Tech</button>
            <button className={eventType!=='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={changeEventType} id='non-tech-tab'>Non-Tech</button>
          </div>
          
            {eventType ==='tech' ? techEvents.map( eve => (<div className='card-div'>    <Link key={eve._id} to={`/events/${eve._id}`}><Card details = {eve} ></Card></Link> </div>) ) : null}
            {eventType !=='tech' ? nonTechEvents.map( eve => (<div className='card-div'> <Link key={eve._id} to={`/events/${eve._id}`}><Card details = {eve} ></Card></Link> </div>) ) : null}
      </div>

    }
    
    </div>
  )
}

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
