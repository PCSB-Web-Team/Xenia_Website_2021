import React, { Component } from 'react'
import './MyProf.css';
import user from './user.png';
import logo from '../../../src/logo.svg';
import Store from '../../Store/Store';


class MyProf extends Component {
    
    render() {

        let regEves = Store.getState().cart;
        
        let list = regEves.map(eve => {return(
            <div className="Regdiv">
                <h3 className="RegP">{eve.name}</h3>
            </div>
        )});

        return (
            <div className="ProfCard">
                <div className="blurbg"></div>
                <div className="ProfContainer">
                    <div className="Prof">
                        <h1 className="Profh1">USERNAME</h1>
                        <div className="Profimgdiv">
                            <img src={logo} className="Profimg" />
                        </div>
                        <div className="personalinfo">
                            <h3 className="emailid">Email : dummy@gmail.com</h3>
                            <h3 className="phnno">Phone no : 9999999999</h3>
                            <h3 className="College">College : PICT</h3>
                        </div>
                    </div>
                    <div className="Reg">
                        <h1 className="Regh1">Registered Events</h1>
                        <div className="RegContainer">
                            {regEves.length!==0 ? list : <div className='not-registered-msg'>You Havent Registered in Any Event</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProf;