import React, { Component } from 'react'
import './MyProf.css';
import user from './user.png';
import logo from '../../src/logo.svg';
import Store from '../Store/Store';
import WebTeam from  '../WebTeam/WebTeam';


class MyProf extends Component {
    
    render() {

        let regEves = Store.getState().cart;
        
        let list = regEves.map(eve => {return(
            <div className="Regdiv">
                <h3 className="RegP" data-aos="flip-right" data-aos-duration="1000">{eve.name}</h3>
            </div>
        )});

        return (
            <div className="ProfCard">
                <div className="blurbg"></div>
                <div className="ProfContainer">
                    
                    <div className="Prof">
                        <h1 className="Profh1">USERNAME</h1>
                        <div className="Profimgdiv" data-aos="flip-right" data-aos-duration="1000">
                            <img src={logo} className="Profimg"  />
                        </div>
                        <div className="personalinfo">
                            <div className="emailid" data-aos="flip-right" data-aos-duration="1000">
                                <p>Email </p>
                                <p><span>dummy@gmail.com</span></p>
                            </div>
                            <div className="phnno" data-aos="flip-right" data-aos-duration="1000">
                                <p>Phone </p>
                                <p><span>9999999999</span></p>
                            </div>
                            <div className="College" data-aos="flip-right" data-aos-duration="1000">
                                <p>College</p>
                                <p><span >PICT</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Reg">
                        <h1 className="Regh1">Registered Events</h1>
                        <div className="RegContainer">
                            {regEves.length!==0 ? list : <div className='not-registered-msg'>You Havent Registered in Any Event</div>}
                        </div>
                    </div>
                
                </div>
                <button className='btn btn-lg text-success' onClick={this.props.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default MyProf;