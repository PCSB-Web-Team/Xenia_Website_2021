import React from 'react';

import earth from './Images/earth.png';
import neptune from './Images/neptune.png';
import mars from  './Images/mars.png';
import uranus from './Images/uranus.png';
import mercury from './Images/mercury.png';
import venus from  './Images/venus.svg';
import jupiter from './Images/jupiter.svg';
import saturn from './Images/saturn.svg';

import './CSS/mars.css';
import './CSS/earth.css';
import './CSS/mercury.css';
import './CSS/venus.css';
import './CSS/jupiter.css';
import './CSS/saturn.css';
import './CSS/neptune.css';
import './CSS/uranus.css';

import './planets.css';


export default function planets() {
    return (
        <div className='planets'>

            <div class="starContainer">
              <div id="star1"></div>
              <div id="star2"></div>
              <div id="star3"></div>
              <div id="star4"></div>
              <div id="star5"></div>
              <div id="star6"></div>
              <div id="star7"></div>
              <div id="star8"></div>
              <div id="star9"></div>
              <div id="star10"></div>
            </div>

            <div className='earth' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={earth}></img>
            </div>
        
            <div className='neptune' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={neptune}></img>
            </div>

            <div className='mars' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={mars}></img>
            </div>

            <div className='uranus' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={uranus}></img>
            </div>

            <div className='mercury' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={mercury}></img>
            </div>

            <div className='venus' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={venus}></img>
            </div>       

             <div className='jupiter' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={jupiter}></img>
            </div>   

            <div className='saturn' id='planet-card'>
                <span className='eve-name'>Event Name</span>
                <img src={saturn}></img>
            </div>      

        </div>
    )
}
