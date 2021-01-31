import React from 'react';
import logo1 from './logo192.png';

class Events extends React.Component{

    render(){

        let TE1={name: 'CodeStrike', logo: '', Fees: '', Slot: '', Contact: '', id: '1'};
        let TE2={name: 'NinjaCoding', logo: '', Fees: '', Slot: '', Contact: '', id: '2'};
        let TE3={name: 'Design Maestro', logo: '', Fees: '', Slot: '', Contact: '', id: '3'};
        let TE4={name: 'MineCraft Battles', logo: '', Fees: '', Slot: '', Contact: '', id: '4'};
        let TE5={name: 'Circuit Creation', logo: '', Fees: '', Slot: '', Contact: '', id: '5'};
        let TE6={name: 'Project Presentation', logo: '', Fees: '', Slot: '', Contact: '', id: '6'};
        let TE7={name: 'Data Cup', logo: '', Fees: '', Slot: '', Contact: '', id: '7'};
        let TE8={name: 'Automation Bots', logo: '', Fees: '', Slot: '', Contact: '', id: '8'};

        let NTE1={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '9'};
        let NTE2={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '10'};
        let NTE3={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '11'};
        let NTE4={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '12'};
        let NTE5={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '13'};
        let NTE6={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '14'};
        let NTE7={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '15'};
        let NTE8={name: 'NonTech', logo: '', Fees: '', Slot: '', Contact: '', id: '16'};
        
        

        let tech = [TE1,TE2,TE3,TE4,TE5,TE6,TE7,TE8];
        let nonTech = [NTE1,NTE2,NTE3,NTE4,NTE5,NTE6,NTE7,NTE8];

        let allEvents = (this.props.eventType==='Tech' ? tech : nonTech);

        const cards = allEvents.map(eve => {
            return(
                <div id = {eve.id} className='card'>
                    <img src={logo1} className="rounded float-start logo"></img>
                    <span className='title'>{eve.name}</span>
                    <div><button type="button" class="btn btn-outline-primary">MoreInfo</button></div>
                    <div><button type="button" class="btn btn-outline-primary">Register</button></div>
                </div>
            )
        })

        return(
            <div>
                {cards}
            </div>
        )
        
    }
}

export default Events;