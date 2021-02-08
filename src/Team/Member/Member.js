import React from 'react';
import styles from './Member.css';
import Logo from '../../logo192.png';

const member = props=>{

    return (
        <div className={styles.Member}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className={styles.photo} src={Logo} />
            <div className={styles.linkedin}></div>
            <p className={styles.name}>{props.name}</p>
        </div>
    );
}

export default member;