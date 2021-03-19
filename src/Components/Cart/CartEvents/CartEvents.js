import React, { Component } from "react";
import './CartEvents.css';
import CartItem from './CartItem/CartItem';
import {connect} from 'react-redux';
import {removeFromCart} from '../../../Store/Actions';



const Mycart = (props) => {

    const handleRemoveFromCart = (id) => {
      props.removeFromCart(id);
      
    }

    let cartEvents= props.cart.map( eve => <CartItem removeFromCart={() => {props.removeFromCart(eve.name)} } details={eve}></CartItem>)

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
    cart: state.cart,
  }

}

const mapActionsToProps = dispatch => {
  
  return {
    removeFromCart: (eventName) => { dispatch(removeFromCart(eventName)) }
  }
}

export default connect(mapStatesToProps, mapActionsToProps)(Mycart);
