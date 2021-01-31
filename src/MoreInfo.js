import React from 'react';

class MoreInfo extends React.Component{

    render(){
        return(
            <div>
                <div> <img src={this.props.eventID.logo}></img> </div>
                <div>{this.props.eventID.name}</div>
                <div>Conplete Info: {this.props.eventID.info}</div>
                <div>Fees: {this.props.eventID.fees}</div>
                <div>Contact Details: {this.props.eventID.contact}</div>
                <div><button onClick={this.props.close}>close</button></div>
            </div>
        )
    }
}

export default MoreInfo;