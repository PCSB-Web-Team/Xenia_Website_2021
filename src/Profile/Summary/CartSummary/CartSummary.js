import React from 'react';
import styles from './CartSummary.css';
import Button from '@material-ui/core/Button';

const cartSummary=(props)=> {
    return (
        <div className='cartSummary'>
            <div className='paymentHeading'>
                <p className='priceSummary'>Price Summary</p>
            </div>
            <div className='paymentBox'>
                <div className='paymentInner'>
                    <p>Total value</p>
                    <p>100</p>
                </div>
                <div className='paymentInner'>
                    <p>Promocode Discount</p>
                    <p>0</p>
                </div>
                <div className='paymentInner'>
                    <p>Cart Subtotal</p>
                    <p>100</p>
                </div>
            </div>
            <div className='pmtsBox'>
                <div className='pmtsWrap'>
                    <div className='pmtsPr'>
                        <span>Total</span>
                        <p>100</p>
                    </div>
                    <Button variant="contained" color="primary" style={{outline:'0'}}>
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default cartSummary;