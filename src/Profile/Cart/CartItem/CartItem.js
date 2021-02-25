import React from 'react';
import styles from './CartItem.css';
import cross from './cross.png';
import logo from '../../../logo.svg';
import Button from '@material-ui/core/Button';

const cartItem=(props)=> {
    return (
        <div className='cartItem'>
            <div className='cartItemInfo'>
                <h3 className='cartItemName'>Event name</h3>
                <p className='cartItemPrice'>100</p>
                <Button variant="contained" color="secondary" className='rem' style={{float:'left'}}>Remove</Button>
            </div>
            <div className='cartItemImg'>
                <img src={logo} width="50%" height="90%" style={{float:'right',background:'rgba(0,0,0,0.14)',borderRadius:'5px'}} />
            </div>
        </div>
    )
}

export default cartItem;