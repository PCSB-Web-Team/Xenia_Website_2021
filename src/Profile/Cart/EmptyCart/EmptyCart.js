import React from 'react';
import './EmptyCart.css';
import empty from './emptyCart.png';

const emptyCart=(props) => {
    return (
        <div className="EmptyCart">
            <div className="feelsLight">
                <h1>Your Cart feels light</h1>
            </div>
            <img src={empty} className="emptyCartimg" />
        </div>
    )
}

export default emptyCart;