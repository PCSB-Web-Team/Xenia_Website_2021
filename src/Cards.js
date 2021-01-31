import React from 'react';
import reactLogo from './logo192.png';
import MoreInfo from './MoreInfo';

class Events extends React.Component{

    constructor(props){
        super(props);
        this.state={
            view: 'cards',
            currEventID: '1'
        }
    }

    render(){

        let TE1={name: 'CodeStrike', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '1'};
        let TE2={name: 'NinjaCoding', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '2'};
        let TE3={name: 'Design Maestro', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '3'};
        let TE4={name: 'MineCraft Battles', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '4'};
        let TE5={name: 'Circuit Creation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '5'};
        let TE6={name: 'Project Presentation', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '6'};
        let TE7={name: 'Data Cup', logo: '', Fees: reactLogo, Slot: '', Contact: '', id: '7'};
        let TE8={name: 'Automation Bots', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '8'};

        let NTE2={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '10'};
        let NTE1={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '9'};
        let NTE3={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '11'};
        let NTE4={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '12'};
        let NTE5={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '13'};
        let NTE6={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '14'};
        let NTE7={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '15'};
        let NTE8={name: 'NonTech', logo: reactLogo, Fees: '', Slot: '', Contact: '', id: '16'};

        let tech = [TE1,TE2,TE3,TE4,TE5,TE6,TE7,TE8];
        let nonTech = [NTE1,NTE2,NTE3,NTE4,NTE5,NTE6,NTE7,NTE8];

        let allEvents = (this.props.eventType==='Tech' ? tech : nonTech);

        const cards = allEvents.map(eve => {
            return(
                <div id = {eve.id} className='card'>
                    <div className="logo"><img src={eve.logo} alg='logo' ></img></div>
                    <span className='title'>{eve.name}</span>
                    <div>
                        <div><button onClick={()=>{this.setState({view: 'moreInfo', currEventID: eve})}} type="button" className="btn btn-outline-primary">MoreInfo</button></div>
                        <div><button type="button" className="btn btn-outline-primary" onClick={(e)=>{e.preventDefault(); alert("You WIll Be Redirected to Payments Portal")}}>Register</button></div>
                    </div>
                </div>
            )
        })
        
        return(
            <div>
                {this.state.view=== 'cards' ? cards : <MoreInfo close={(()=>{this.setState({view: 'cards'})}).bind(this)} eventID={this.state.currEventID}></MoreInfo>}
            </div>
        )
        
    }
}

export default Events;