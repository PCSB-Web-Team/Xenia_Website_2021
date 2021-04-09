import React from 'react';
import './CouponModal.css';
import cross from '../../../Assets/Images/cross.png';

const couponModal=(props)=> {

    const classes = props.view ? "couponModalOpen CouponModal" : "couponModalHide CouponModal";
    return (
        <div className={classes}>
            <section className="modalMain">
                <div className="couponHeading">
                    <p className="couponQuestion">Have a Coupon?</p>
                    <img className="couponCross" alt="cross" src={cross} onClick={props.closeCoupon} />
                </div>    
                <div className="containerInput">
                    <div className="material-textfield">
                        <input placeholder=" " type="text" />
                        <label>ENTER COUPON CODE</label>
                    </div>
                </div>
                <div className="errMsg">
                    <p className="msg"></p>
                </div>
                <div className="applyCoupon">
                    <a href="">APPLY COUPON</a>
                </div>
            </section>
        </div>
    )
}

export default couponModal;