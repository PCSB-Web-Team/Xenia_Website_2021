import React, { Component } from "react";
import del from './delete_icon.png';
// import Store from "../../Store/Store"
import styles from './Cart.css';
import CartItem from './CartItem/CartItem';
import Promocode from './Promocode/Promocode';
import Store from '../../Store/Store';

class Mycart extends Component {
  state = {
    techs: Store.getState().cart
  }


  render() {

    let cartEvents = this.state.techs.map( eve => <CartItem details={eve}></CartItem>);
    
    return (
      <div className={styles.myCart}>
          {cartEvents}
      </div>
    );
  }
}

export default Mycart;
