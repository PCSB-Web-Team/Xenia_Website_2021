import React from 'react';

class MoreInfo extends React.Component{

    render(){
        return(
            <div>
                <div> <img className="moreInfoLogo" src={this.props.details.logo}></img> </div>
                <div>{this.props.details.name}</div>
                <div>Conplete Info: {this.props.details.info}</div>
                <div>Fees: {this.props.details.fees}</div>
                <div>Contact Details: {this.props.details.contact}</div>
                <div><button onClick={this.props.close}>close</button></div>
            </div>
        )
    }
}

export default MoreInfo;