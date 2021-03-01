import React from 'react';

import earth from './Images/earth.png';
import neptune from './Images/neptune.png';
import mars from  './Images/mars.png';
import uranus from './Images/uranus.svg';
import mercury from './Images/mercury.png';
import venus from  './Images/venus.svg';
import jupiter from './Images/jupiter.gif';
import saturn from './Images/saturn.png';

import './CSS/mars.css';
import './CSS/earth.css';
import './CSS/mercury.css';
import './CSS/venus.css';
import './CSS/jupiter.css';
import './CSS/saturn.css';
import './CSS/neptune.css';
import './CSS/uranus.css';

import './planets.css';

function getplanet(name){
    if(name==='neptune')    return neptune;
    else if(name==='mars')  return mars;
    else if(name==='earth') return null;
    else if(name==='mercury') return mercury;
    else if(name==='venus') return venus;
    else if(name==='saturn') return saturn;
    else if(name==='uranus') return uranus;
    else if(name==='jupiter') return jupiter;
}

export default function planets({details,readmore}) {

    return (
        <div className={details.planet} id='planet-card'>
            <div className='planet-details' onClick={readmore}>
                <img className='logo' src={details.logo}></img>
                <span className='eve-name'>{details.name}</span>
            </div>
            <img className='planet-img' src={getplanet(details.planet)}></img>
        </div>


    /*<div className='planets'> 
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
                <div className='planet-details' onClick={props.readmore}>
                    <img className='logo' src={list[0].logo} value={list[0]}></img>
                    <span className='eve-name'>{list[0].name}</span>
                </div>
                <img src={earth}></img>
            </div>
        
            <div className='neptune' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[1].logo}></img>
                    <span className='eve-name'>{list[1].name}</span>
                </div>
                <img src={neptune}></img>
            </div>

            <div className='mars' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[2].logo}></img>
                    <span className='eve-name'>{list[2].name}</span>
                </div>
                <img src={mars}></img>
            </div>

            <div className='uranus' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[3].logo}></img>
                    <span className='eve-name'>{list[3].name}</span>
                </div>
                <img src={uranus}></img>
            </div>

            <div className='mercury' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[4].logo}></img>
                    <span className='eve-name'>{list[4].name}</span>
                </div>
                <img src={mercury}></img>
            </div>

            <div className='venus' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[5].logo}></img>
                    <span className='eve-name'>{list[5].name}</span>
                </div>
                <img src={venus}></img>
            </div>       

             <div className='jupiter' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[6].logo}></img>
                    <span className='eve-name'>{list[6].name}</span>
                </div>
                <img src={jupiter}></img>
            </div>   

            <div className='saturn' id='planet-card'>
                <div className='planet-details'>
                    <img className='logo' src={list[7].logo}></img>
                    <span className='eve-name'>{list[7].name}</span>
                </div>
                <img src={saturn}></img>
            </div>      

        </div>
                    */
    )
}
