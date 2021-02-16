import React from 'react';
import styles from './Event.css';

const event = props =>{
    return (
        <div className='Event'>
            <p style={{fontFamily:'planetns'}}><img width="50"></img>{props.name}</p>
        </div>
    );
}

export default event;