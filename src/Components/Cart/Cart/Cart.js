import React, { Component } from "react";
import './Cart.css';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart/EmptyCart';
import {connect} from 'react-redux';
import {removeFromCart} from '../../../Store/Actions';

class Mycart extends Component {

  render() {

    let cartEvents= this.props.cart.map( eve => <CartItem RFC={() => {this.props.RFC(eve.name)} } details={eve}></CartItem>)

    return (
      <div className="Cart">
          {cartEvents.length == 0 ? <EmptyCart /> : cartEvents}
      </div>
    );

  }
}

const mapStatesToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapActionsToProps = dispatch => {
  return {
    RFC: (eventName) => { dispatch(removeFromCart(eventName)) }
  }
}

export default connect(mapStatesToProps, mapActionsToProps)(Mycart);
