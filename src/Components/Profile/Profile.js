import React, { Component } from 'react'
import './Profile.css';
import user from '../../Assets/images/user.png';
import logo from '../../Assets/images/logo.svg';
import WebTeam from  '../WebTeam/WebTeam';
import {motion} from 'framer-motion';

import { connect } from 'react-redux';
import { loggedOut } from '../../Store/Actions';
import { Link } from 'react-router-dom';

const MyProf = (props) => {
    
    let list = props.cart.map( eve => { return(
        <div className="Regdiv">
            <h3 className="RegP">{eve.name} </h3>
        </div>
    )});
    
    return (
        <div className="ProfCard">
            
            
            
            <div className="ProfContainer">
                
                <div className="Prof">
                
                    <h1 className="Profh1">USERNAME</h1>
                
                    <div className="Profimgdiv">
                        <img src={logo} className="Profimg"  />
                    </div>
                    
                    <div className="personalinfo">
                        <div className="emailid">
                            <p>Email </p>
                            <p><span>dummy@gmail.com</span></p>
                        </div>
                        <div className="phnno">
                            <p>Phone </p>
                            <p><span>9999999999</span></p>
                        </div>
                        <div className="College">
                            <p>College</p>
                            <p><span >PICT</span></p>
                        </div>
                    </div>
                
                </div>
                
                <div className="Reg">
                    <h1 className="Regh1">Registered Events</h1>
                    <div className="RegContainer">
                        {props.cart.length!==0 ? list : <div className='not-registered-msg'>You Havent Registered in Any Event</div>}
                    </div>
                </div>
            
            </div>
    
            <Link to='/' exact className='btn btn-lg text-success' onClick={() => props.logout()}> Logout </Link>
        
        </div>
    )
}

const mapStatesToProps = state => {
    return {
        cart: state.cart
    }
}

const mapActionsToProps = dispatch => {
    return {
        logout: () => { dispatch(loggedOut()) },
    }
}

export default connect( mapStatesToProps, mapActionsToProps )( MyProf );