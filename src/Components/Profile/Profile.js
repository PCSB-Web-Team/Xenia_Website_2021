import React, { Component } from 'react'
import './Profile.css';
import user from '../../Assets/Images/user.png';
import logo from '../../Assets/Images/logo.svg';
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