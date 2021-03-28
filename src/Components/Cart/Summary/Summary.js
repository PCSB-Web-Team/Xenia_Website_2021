import React, { Component } from 'react';
import './Summary.css';
import CartSummary from './CartSummary/CartSummary';

const Summary = (props) => {
    return (
        <div className="Summary">
            
            <div className="Coupon">
                <p className="question" onClick={props.showCoupon}><u>Have a Coupon?</u></p>
            </div>
            
            <CartSummary />
        
        </div>
    )
}

export default Summary;