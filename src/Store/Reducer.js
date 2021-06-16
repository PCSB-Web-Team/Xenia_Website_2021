import * as actions from './Actions';
import defaultState from './DefaultState';

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.LOGGEDIN:
			return {
				...state,
				login: true,
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
				userData: {
					registeredBuildUpEvents: [],
					registeredEvents: [],
					registeredWorkshops: [],
				},
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
			return {
				...state,
				openLogin: false,
				openSignUp: false,
			}

		case actions.GETEVENTDATA:
			return {
				...state,
				eventData: action.payload,
			};

		case actions.ADDTOREGISTERED:
			return {
				...state,
				userData: {
					...state.userData,
					registeredEvents: [...state.userData.registeredEvents, action.payload],
				},
			};

		case actions.REGISTERWORKSHOP:
			return{
				...state,
				userData: {
					...state.userData,
					registeredWorkshops: [ ...state.userData.registeredWorkshops, action.payload],
				},
			}
		
		case actions.SETREGISTEREDBUILDUPEVENTS:
			return {
				...state,
				userData: {
					...state.userData,
					registeredBuildUpEvents: [...state.userData.registeredBuildUpEvents, action.payload]
				}
			}

		case actions.PAYMENTDETAILS:
			return {
				...state,
				paymentDetails: action.details
			}

		default:
			return {
				...state,
			};
	}
};

export default reducer;
