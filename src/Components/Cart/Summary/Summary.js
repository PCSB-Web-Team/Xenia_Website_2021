import React, { Component } from 'react';
import './Summary.css';
import Coupon from './Coupon/Coupon';
import CartSummary from './CartSummary/CartSummary';

class Summary extends Component {
    render() {
        return (
            <div className="Summary">
                <Coupon showModal={this.props.couponShowHandler} show={this.props.showState} />
                <CartSummary />
            </div>
        )
    }
}

export default Summary;