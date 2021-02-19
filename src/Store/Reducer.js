import * as actions from './Actions';
import defaultState from './DefaultState';

export default function (state=defaultState,action){

    switch(action.type)
    {
        case(actions.logged_in):
            return {
                ...state,
                login: false,
                userDate: action.payload
            }

        case(actions.logged_out):
            return defaultState

        case(actions.cart_added):
            return {
                ...state,
                cart: [...state.cart, action.event]
            }

        default:
            return {
                ...state
            }    
    }
}