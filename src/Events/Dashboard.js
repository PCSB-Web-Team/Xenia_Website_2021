import React from 'react';
import reactLogo from './logo.svg';
import './Card.css'
import MoreInfo from './MoreInfo';
import './Dashboard.css';
import Card from './Card';
import Zoom from 'react-reveal/Zoom';


let TE1= {name: 'CodeStrike', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e1', date: '00/00/00'};
let TE2= {name: 'NinjaCoding', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e2', date: '00/00/00'};
let TE3= {name: 'Design Maestro', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e3', date: '00/00/00'};
let TE4= {name: 'MineCraft Battles', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e4', date: '00/00/00'};
let TE5= {name: 'Circuit Creation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e5', date: '00/00/00'};
let TE6= {name: 'Project Presentation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e6', date: '00/00/00'};
let TE7= {name: 'Data Cup', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e7', date: '00/00/00'};
let TE8= {name: 'Automation Bots', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 'e8', date: '00/00/00'};

let NTE1= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne1', date: '00/00/00'};
let NTE2= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne2', date: '00/00/00'};
let NTE3= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne3', date: '00/00/00'};
let NTE4= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne4', date: '00/00/00'};
let NTE5= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne5', date: '00/00/00'};
let NTE6= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne6', date: '00/00/00'};
let NTE7= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne7', date: '00/00/00'};
let NTE8= {name: 'Event Name', logo: reactLogo, Fees: 'Event Registration Fee', Slot: '', Contact: 'Contact Details', id: 'ne8', date: '00/00/00'};

let tech= [TE1,TE2,TE3,TE4,TE5,TE6,TE7,TE8];
let nonTech= [NTE1,NTE2,NTE3,NTE4,NTE5,NTE6,NTE7,NTE8] ;  


class Events extends React.Component {


  constructor(props){
    
    super(props);
    this.state={
        eventType: 'tech',

        view: 'cards',
        
        currEvent: null,
        
        allEvents: tech
      }
  }

  handleMoreInfo = (eventSelected) => {
    this.setState({view: 'moreInfo', currEvent: eventSelected});
  }

  handleClose=(e)=>{
    this.setState({view: 'cards'})
  }

  handleTab = (e) => {
    if(e.target.id==='tech-tab') this.setState({eventType: 'tech', allEvents: tech});
    else this.setState({eventType: 'non-tech', allEvents: nonTech})
    this.setState({view: 'cards'})
  }

  handleRegister = (e) =>{
    alert("You WIll Be Redirected to Payments Portal")
  }

  render(){

    const cards = this.state.allEvents.map(eve => {
      return(
        <div className="card-div">
            <Zoom>
            <Card props={eve} readmore={()=>{this.setState({view: 'moreInfo', currEvent: eve})}}/>
            </Zoom>
        </div>
    )
    });

  return (
    <div className="dashboard">
      <div>
      { 
        this.state.view==='cards' ?         
        <div className="card-container">
          <div className="tabs">
            <button className={this.state.eventType==='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={this.handleTab} id='tech-tab'>Tech</button>
            <button className={this.state.eventType!=='tech' ? 'tabs-btn active-tab' : 'tabs-btn'} onClick={this.handleTab} id='non-tech-tab'>Non-Tech</button>
          </div>
          {cards}
        </div>
        :
        <MoreInfo close={this.handleClose.bind(this)} handleRegister={this.handleRegister} details={this.state.currEvent} />
      }
      </div>
    </div>
  );
  
}
}

export default Events;
