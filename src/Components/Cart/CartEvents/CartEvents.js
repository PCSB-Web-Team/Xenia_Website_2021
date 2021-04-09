import React from 'react';
import './CartEvents.css';
import CartItem from './CartItem/CartItem';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../Store/Actions';

const Mycart = (props) => {


	let cartEvents = props.cart.map((eve) => (
		<CartItem
			key={eve}
			details={eve}
		></CartItem>
	));

	return (
		<div className="Cart">
			{cartEvents.length === 0 ? (
				<div className="EmptyCart">
					<div className="feelsLight">
						<h1>Your Cart feels light</h1>
					</div>
				</div>
			) : (
				cartEvents
			)}
		</div>
	);
};

const mapStatesToProps = (state) => {
	return {
		token: state.token,
		cart: state.userData.cart,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		removeFromCart: (eventId) => {
			dispatch(removeFromCart(eventId));
		},
	};
};

export default connect(mapStatesToProps, mapActionsToProps)(Mycart);
