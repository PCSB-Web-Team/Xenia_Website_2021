import React, { Component } from 'react'
import styles from './MyProf.css';
import user from './user.png';

class MyProf extends Component {
    render() {
        return (
            <div className={styles.ProfCard}>
                <div className={styles.imgContainer}>
                    <img className={styles.ProfIcon} src={user}/>
                </div>
                <div className={styles.username}>
                    <h4>Username</h4>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userEmail}><p>email</p></div>
                    <div className={styles.userPhone}><p>phone</p></div>
                    <div className={styles.userCollege}><p>college</p></div>
                </div>
            </div>
        )
    }
}

export default MyProf;