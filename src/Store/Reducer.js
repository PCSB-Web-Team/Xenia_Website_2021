import * as actions from './Actions';
import defaultState from './DefaultState';

export default function (state=defaultState,action){

    switch(action.type)
    {
        case(actions.logged_in):
            return {
                ...state,
                login: false,
                userData: action.payload
            }

        case(actions.logged_out):
            return defaultState

        case(actions.cart_added):
            return {
                ...state,
                cart: [...state.cart, action.payload.event]
            }
        default:
            return {
                ...state
            }    
            
    }
}