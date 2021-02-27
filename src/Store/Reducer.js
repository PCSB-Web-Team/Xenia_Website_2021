import * as actions from './Actions';
import defaultState from './DefaultState';
import allEvents from '../Event Details/AllEvents';

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
            let eventToAdd=action.payload.event;

            for(let i=0 ; i < state.cart.length ; i++)
            {
                if(state.cart[i]===eventToAdd){
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

            console.log(eventObject);

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