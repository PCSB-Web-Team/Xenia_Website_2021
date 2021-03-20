import React, { Component } from "react";
import './CartEvents.css';
import CartItem from './CartItem/CartItem';
import {connect} from 'react-redux';
import {removeFromCart} from '../../../Store/Actions';
import {removeFromCartBackend} from '../../Config/api/User';


const Mycart = (props) => {

    const handleRemoveFromCart = async (data,token) => {
      
      let res = await removeFromCartBackend(data,token) 
      props.removeFromCart(data._id);

      console.log(res)
    }

    let cartEvents= props.cart.map( eve => <CartItem removeFromCart={() => {handleRemoveFromCart(eve, props.token)} } details={eve}></CartItem>)

    return (
      <div className="Cart">
          {cartEvents.length == 0 ? 
            <div className="EmptyCart">
                <div className="feelsLight">
                    <h1>Your Cart feels light</h1>
                </div>
            </div> 
            
            : 
            
            cartEvents}
      </div>
    );

}

const mapStatesToProps = state => {
  
  return {
    token: state.token,
    cart: state.userData.cart,
  }

}

const mapActionsToProps = dispatch => {
  return {
    removeFromCart: (eventId) => { dispatch(removeFromCart(eventId)) }
  }
}

export default connect(mapStatesToProps, mapActionsToProps)(Mycart);
