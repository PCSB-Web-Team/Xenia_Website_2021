import React from 'react';
import './MoreInfo.css';

class MoreInfo extends React.Component{
    render(){
        return(
            <div className="mi">
                <div className="mi-logo"> <img src={this.props.details.logo}></img> </div>
                <div className="mi-info">
                    <h1 className="mi-title">{this.props.details.name}</h1>
                    <div>Conplete Info: {this.props.details.info}</div>
                    <div>Fees: {this.props.details.fees}</div>
                    <div>Contact Details: {this.props.details.contact}</div>
                    <div className="mi-register"><button onClick={this.props.handleRegister}>Register</button></div>
                    <div className="mi-close"><button onClick={this.props.close}>close</button></div>
                </div>
            </div>
        )
    }
}

export default MoreInfo;