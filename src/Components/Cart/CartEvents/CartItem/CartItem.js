import React from 'react';
import { connect } from 'react-redux';
import styles from './CartItem.css';
//import cross    from '../../../../Assets/images/cross.png';
import logo from '../../../../Assets/Images/logo.svg';
import Button from '@material-ui/core/Button';
import { removeFromCartBackend } from '../../../Config/api/User';
import { removeFromCart } from '../../../../Store/Actions';

const cartItem = (props) => {
	const handleRemoveFromCart = async (data, token) => {
		let res = await removeFromCartBackend(data, token);
		if(res.data.ok) {
            props.removeFromCart(props.details._id)
        }
	};
	return (
		<div className="cartItem">
			<div className="cartItemImg">
				<img
					src={logo}
					width="90%"
					height="100%"
					style={{ float: 'right', borderRadius: '5px' }}
				/>
			</div>

			<div className="cartItemInfo">
				<div className="nameprice">
					<h3 className="cartItemName"> {props.details.name} </h3>
					<p className="cartItemPrice"> ₹{props.details.fees} </p>
				</div>
				<Button
					variant="contained"
					color="secondary"
					className="rem"
					onClick={() => handleRemoveFromCart(props.details._id, props.token)}
					id={props.details.name}
				>
					Remove
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.token,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		removeFromCart: (eventId) => {
			dispatch(removeFromCart(eventId));
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(cartItem);
