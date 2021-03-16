import React, { useState } from 'react';
import Cart from './CartEvents/CartEvents';
import './MainCart.css';
import Summary from './Summary/Summary';
import CouponModal from './CouponModal/CouponModal';
import {connect} from 'react-redux'; 

const MainCart = (props) => {

    const [couponView,setCouponView] = useState(false);

    const toggleCoupon = () => {
        if(couponView === true)   setCouponView(false)
        else setCouponView(true)
    }  

    return (
        <div className="Profile">
            <CouponModal view={couponView} closeCoupon={toggleCoupon} />
            <Cart />
            <Summary     showCoupon={toggleCoupon} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(MainCart);

