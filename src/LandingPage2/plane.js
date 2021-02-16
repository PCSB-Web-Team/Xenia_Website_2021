import React from "react";
import './planet.css';

export default class Planet extends React.Component{
    render(){
        return(
            <div className='land2'>
            <div class="planet"> 
                <div class="wrap">
                   <div class="background"></div>
                   <div class="clouds"></div>   
                </div>
                <div class="mask"></div>
            </div>
            </div>
        )
    }
}