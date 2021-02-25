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

            let duplicate=false;

            for(let i=0 ; i < state.cart.length ; i++)
            {
                if(state.cart[i]===action.payload.event){
                    duplicate=true;
                    break;
                }
            }

            console.log(duplicate);

            if(!duplicate){
                return {
                    ...state,
                    cart: [...state.cart, action.payload.event]
                }    
            }

            else{
                return {...state}
            }
            
        case(actions.cart_removed):
            return {
                ...state,
                cart: state.cart.filter(eve => eve !== action.payload.event)
            }

        default:
            return {
                ...state
            }    
            
    }
}