import React from 'react';
import './CouponModal.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cross from '../../../Cart/CartItem/cross.png';

const couponModal=(props)=> {

    const classes = props.showState ? "couponModalOpen CouponModal" : "couponModalHide CouponModal";
    return (
        <div className={classes}>
            <section className="modalMain">
                <div className="couponHeading">
                    <p className="couponQuestion">Have a Coupon?</p>
                    <img className="couponCross" src={cross} onClick={props.couponHideHandler} />
                </div>    
                <TextField id="couponCode" label="ENTER COUPON CODE" />
                <div className="errMsg">
                    <p className="msg"></p>
                </div>
                <Button variant="contained" color="primary" className="applyCoupon">
                    APPLY COUPON
                </Button>
            </section>
        </div>
    )
}

export default couponModal;