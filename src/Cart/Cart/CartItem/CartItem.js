import React from 'react';
import styles from './CartItem.css';
import cross from './cross.png';
import logo from '../../../logo.svg';
import Button from '@material-ui/core/Button';
import Store from '../../../Store/Store';

const cartItem=(props)=> {
    return (
        <div className='cartItem'>
            
            <div className='cartItemImg'>
                <img src={props.details.logo} width="90%" height="100%" style={{float:'right',background:'rgba(0,0,0,0.14)',borderRadius:'5px'}} />
            </div>
            <div className='cartItemInfo'>
                <h3 className='cartItemName'> {props.details.name} </h3>
                <p className='cartItemPrice'> ₹{props.details.fees} </p>
                <Button variant="contained" color="secondary" className='rem' onClick={props.RFC} id={props.details.name}>Remove</Button>
            </div>

            
        </div>
    )
}



export default cartItem;