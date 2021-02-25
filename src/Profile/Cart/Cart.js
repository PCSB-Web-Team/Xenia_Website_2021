import React, { Component } from "react";
import del from './delete_icon.png';
// import Store from "../../Store/Store"
import styles from './Cart.css';
import CartItem from './CartItem/CartItem';
import Promocode from './Promocode/Promocode';
class Mycart extends Component {
  state = {
    techs: [
      {
        name: "CodeStrike",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 1,
        date: "00/00/00",
        icon: del
      },
      {
        name: "NinjaCoding",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 2,
        date: "00/00/00",
        icon:del
      },
      {
        name: "Design Maestro",
        logo: "reactLogo",
        Fees: "",
        Slot: "",
        Contact: "",
        group: "tech",
        id: 3,
        date: "00/00/00",
        icon:del
      },
    ],
  };

  render() {

    
    return (
      <div className={styles.myCart}>
          <CartItem />
          <CartItem />
          <CartItem />
      </div>
    );
  }
}

export default Mycart;
