import * as actions from './Actions';
import defaultState from './DefaultState';
import allEvents from '../Event Details/AllEvents';

export default function (state=defaultState,action){

    switch(action.type)
    {
        case(actions.LOGGEDIN):

            return {
                ...state,
                login: true,
                userData: action.payload.userData
            }

        case(actions.LOGGEDOUT):
            return defaultState

        case(actions.POPLOGIN):
            return {
                ...state,
                popLogin: true
            }

        case(actions.CLOSELOGIN):
            return {
                ...state,
                popLogin: false
            }
        
        case(actions.POPSIGNUP):
            return {
                ...state,
                popSignUp: true
            }

        case(actions.CLOSESIGNUP): 
            return {
                ...state,
                popSignUp: false
            }

        case(actions.ADDTOCART):

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
            
        case(actions.REMOVEFROMCART):
        {
            let newCart = state.cart.filter(eve => eve.name !== action.payload.eveName);

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