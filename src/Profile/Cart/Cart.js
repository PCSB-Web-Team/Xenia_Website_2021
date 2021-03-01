import React, { Component } from "react";
import del from './delete_icon.png';
// import Store from "../../Store/Store"
import './Cart.css';
import CartItem from './CartItem/CartItem';
import Promocode from './Promocode/Promocode';
import Store from '../../Store/Store';
import EmptyCart from './EmptyCart/EmptyCart';

class Mycart extends Component {

  RFC = (e) => {

    Store.dispatch({
        type: 'removefromcart',
        payload: {
            event: e.target.id,
        }
    })
  
    this.setState({cartEvents: Store.getState().cart.map( eve => <CartItem RFC={this.RFC} details={eve}></CartItem>)})
  
  }

  constructor(props){
    super();
  
    this.state = {
      cart: Store.getState().cart,
      cartEvents: Store.getState().cart.map( eve => <CartItem RFC={this.RFC} details={eve}></CartItem>)
    }
  }

  render() {
    
    return (
      <div className="Cart">
          {this.state.cartEvents.length == 0 ? <EmptyCart /> : this.state.cartEvents}
      </div>
    );
  }
}

export default Mycart;
