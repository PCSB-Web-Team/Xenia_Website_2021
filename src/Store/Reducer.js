import * as actions from './Actions';
import defaultState from './DefaultState';

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.LOGGEDIN:
			return {
				...state,
                login : true,
				userData: action.payload,
			};

		case actions.STORETOKEN:
			return {
				...state,
				token: action.payload,
			};

		case actions.LOGGEDOUT:
			return {
				...state,
				token: '',
				userData: { cart: [] },
				login: false,
			};

		case actions.OPENLOGIN: 
			return {
				...state,
				openLogin: true
			}

		case actions.OPENSIGNUP:
			return {
				...state,
				openSignUp: true
			}

		case actions.TOGGLELOGIN:
			return {
				...state,
				openSignUp: !state.openSignUp,
				openLogin: !state.openLogin,
			}

		case actions.CLOSELOGIN:
			return{
				...state,
				openLogin: false,
				openSignUp: false,
			}

		case actions.GETEVENTDATA:
			return {
				...state,
				eventData: action.payload,
			};

		case actions.ADDTOCART:
			return {
				...state,
				userData: {
					...state.userData,
					cart: [...state.userData.cart, action.payload],
				},
			};

		case actions.REMOVEFROMCART:
			return {
				...state,
				userData: {
					...state.userData,
					cart: state.userData.cart.filter(
						(e) => e._id !== action.payload
					),
				},
			};

		default:
			return {
				...state,
			};
	}
};

export default reducer;
