import React from 'react';
import'./Coupon.css';

const coupon=(props) => {
    return (
        <div className="Coupon">
            <p className="question" onClick={props.showModal}><u>Have a Coupon?</u></p>
        </div>
    )
}

export default coupon;