import * as actions from './Actions';
import defaultState from './DefaultState';
import allEvents from '../Event Details/AllEvents';

export default function (state=defaultState,action){

    switch(action.type)
    {
        case(actions.logged_in):
            return {
                ...state,
                userData: action.payload
            }

        case(actions.logged_out):
            return defaultState

        case(actions.cart_added):

            let duplicate=false;
            let eventToAdd=action.payload.event;

            for(let i=0 ; i < state.cart.length ; i++)
            {
                if(state.cart[i].name === eventToAdd){
                    duplicate=true;
                    break;
                }
            }

            let eventObject;

            for(let i=0;i < allEvents.length ; i++){

                if(eventToAdd===allEvents[i].name){
                    eventObject=allEvents[i];
                    break;
                }

            }

            if(!duplicate){
                return {
                    ...state,
                    cart: [...state.cart, eventObject]
                }    
            }

            else{
                return {...state}
            }
            
        case(actions.cart_removed):
        {

            let newCart = state.cart.filter(eve => eve.name !== action.payload.event);

            return {
                ...state,
                cart: newCart
            }
        }

        default:
            return {
                ...state
            }    
            
    }
}