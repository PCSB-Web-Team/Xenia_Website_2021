import React from 'react';
import './WebTeam.css';
import logo from '../logo.svg';

const webTeam = (props) => {
    return (
        <div className = "webTeam">

              <div class="teamcontainer">
                <div class="teambg"></div>
                <img class="teammain" src={logo} />
              </div>

              <div class="teamcontainer">
                <div class="teambg"></div>
                <img class="teammain" src={logo} />
              </div>
              
              <div class="teamcontainer">
                <div class="teambg"></div>
                <img class="teammain" src={logo} />
              </div>
              
              <div class="teamcontainer">
                <div class="teambg"></div>
                <img class="teammain" src={logo} />
              </div>
              
              <div class="teamcontainer">
                <div class="teambg"></div>
                <img class="teammain" src={logo} />
              </div>
              
        </div>
    )
}

export default webTeam;