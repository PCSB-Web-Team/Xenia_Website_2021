import React from 'react';
import styles from './Video.css'
import Galaxy from '../../LandingPage/galaxy.mp4';

const vid = (props) =>{
    return(
        <video autoPlay={true} muted loop className={styles.vid}>
            <source src={Galaxy} type="video/mp4"></source>
        </video>
    );
}

export default vid;