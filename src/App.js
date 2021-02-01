import React from 'react';
import reactLogo from './logo.svg';
import './App.css';
import MoreInfo from './MoreInfo';

let TE1= {name: 'CodeStrike', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 1};
let TE2= {name: 'NinjaCoding', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 2};
let TE3= {name: 'Design Maestro', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 3};
let TE4= {name: 'MineCraft Battles', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 4};
let TE5= {name: 'Circuit Creation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 5};
let TE6= {name: 'Project Presentation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 6};
let TE7= {name: 'Data Cup', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 7};
let TE8= {name: 'Automation Bots', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 8};

let NTE1= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 9};
let NTE2= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 10};
let NTE3= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 11};
let NTE4= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 12};
let NTE5= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 13};
let NTE6= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 14};
let NTE7= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 15};
let NTE8= {name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: 16};

let tech= [TE1,TE2,TE3,TE4,TE5,TE6,TE7,TE8];
let nonTech= [NTE1,NTE2,NTE3,NTE4,NTE5,NTE6,NTE7,NTE8] ;  

class App extends React.Component {

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
            <div id = {eve.id} className='card'>
                <div className="logo"><img src={eve.logo} alg='logo' ></img></div>
                <div className='title'>{eve.name}</div>
                <div className="card-buttons">
                    <div><button onClick={()=>{this.setState({view: 'moreInfo', currEvent: eve})}} className="btn btn-outline-primary">MoreInfo</button></div>
                    <div><button className="btn btn-outline-primary" onClick={this.handleRegister}>Register</button></div>
                </div>
            </div>
        )
    });

  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12" ><button onClick={this.handleTab.bind(this)} id='tech-tab' className="btn btn-outline-primary">Tech</button></div>
        <div className="col-lg-6 col-md-12" ><button  onClick={this.handleTab.bind(this)} id='non-tech-tab' className="btn btn-outline-primary">Non-Tech</button></div>
      </div>
      
      <div>
      { this.state.view==='cards' ?         
        cards
        :
        <MoreInfo close={this.handleClose.bind(this)} details={this.state.currEvent} />
      }
      </div>
    </div>
  );
  
}
}

export default App;
