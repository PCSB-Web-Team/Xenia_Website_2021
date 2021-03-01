import React from 'react';
import styles from './CartSummary.css';
import Button from '@material-ui/core/Button';
import Store from '../../../Store/Store';

let sum=0;

function getTotalValue() {
    sum=0;

    let cart=Store.getState().cart;

    for(let i = 0; i<cart.length; i++){
        sum+=cart[i].fees;
    }   

    return sum;
}

let discount=0;

const cartSummary=(props)=> {
    
    return (
        <div className='cartSummary'>
            <div className='paymentHeading'>
                <p className='priceSummary'>Price Summary</p>
            </div>
            <div className='paymentBox'>
                <div className='paymentInner'>
                    <p>Total value</p>
                    <p>{sum}</p>
                </div>
                <div className='paymentInner'>
                    <p>Promocode Discount</p>
                    <p>{discount}</p>
                </div>
                <div className='paymentInner'>
                    <p>Cart Subtotal</p>
                    <p>{discount+sum}</p>
                </div>
            </div>
            <div className='pmtsBox'>
                <div className='pmtsWrap'>
                    <div className='pmtsPr'>
                        <span>Total</span>
                        <p>{getTotalValue()}</p>
                    </div>
                    <Button variant="contained" color="primary" style={{outline:'0'}} className= "payBtn">
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default cartSummary;