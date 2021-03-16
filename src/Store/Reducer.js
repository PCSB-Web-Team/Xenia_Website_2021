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
            let eventToAdd=action.payload.eveData;

            for(let i=0 ; i < state.cart.length ; i++)
            {
                if(state.cart[i].name === eventToAdd.name){
                    duplicate=true;
                    break;
                }
            }

            console.log(eventToAdd);

            if(!duplicate)
                return {
                    ...state,
                    cart: [...state.cart, eventToAdd]
                }    

            else    return {...state}
            
        case(actions.GETEVENTDATA): {
            return {
                ...state,
                eventData: action.payload.data, 
            }
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