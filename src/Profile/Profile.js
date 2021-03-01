import React, { Component } from 'react';
import Cart from './Cart/Cart';
import RegEves from './RegEves/RegEves';
import MyProf from './MyProf/MyProf';
import './Profile.css';
import Summary from './Summary/Summary';
import CouponModal from './Summary/Coupon/CouponModal/CouponModal';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };    
    render() {
        return (
          <div>
            <div className="Profile">
                <CouponModal showState={this.state.show} couponHideHandler={this.hideModal} />
                <Cart />
                <Summary couponShowHandler={this.showModal} />
            </div>
            <MyProf />
          </div>
        )
    }
}

export default Profile;

