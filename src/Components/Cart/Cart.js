import React, { Component } from 'react';
import Cart from './Cart/Cart';
import './Cart.css';
import Summary from './Summary/Summary';
import CouponModal from './Summary/Coupon/CouponModal/CouponModal';
import {connect} from 'react-redux'; 

class MainCart extends Component {

    constructor() {
        
        super();
        
        this.state = {
          show: false,
        };
        
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal = () => {  this.setState({ show: true }); };
    
    hideModal = () => {  this.setState({ show: false }); };    
    
    render() {

        return (
            <div className="Profile">
                <CouponModal showState={this.state.show} couponHideHandler={this.hideModal} />
                <Cart />
                <Summary     couponShowHandler={this.showModal} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(MainCart);

