import React from 'react';
import {connect} from 'react-redux';

import styles from './CartSummary.css';
import Button from '@material-ui/core/Button';
import Store from '../../../../Store/Store';

const cartSummary=(props)=> {
    
    let sum = 0;
    let discount = 0;

    props.cart.map( eve => { return (sum+=parseInt(eve.fees)) } )

    
    let totalValue = sum+discount;

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
                        <p>{totalValue}</p>
                    </div>
                    <Button variant="contained" color="primary" style={{outline:'0'}} className= "payBtn">
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStatesToProps = state => {
    return{
        cart: state.userData.cart,
    }
}

export default connect(mapStatesToProps)(cartSummary);