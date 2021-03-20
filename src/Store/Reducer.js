import * as actions from './Actions';
import defaultState from './DefaultState';

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

        case(actions.STORETOKEN): {
            return {
                    ...state,
                    token: action.payload.token
            }
        }
        
        case(actions.ADDTOCART): {
            let duplicate=false;
            let eventToAdd=action.payload.eveData;

            for(let i=0 ; i < state.userData.cart.length ; i++)
            {
                if(state.userData.cart[i].name === eventToAdd.name) {
                    duplicate=true;
                    break;
                }
            }

            if(!duplicate) {

                let newCart = [state.userData.cart, eventToAdd]

                let newUserData = {...state.userData, cart: newCart}

                return {
                    ...state,
                    userData: newUserData
                }    

            }

            else    return {...state}
        }
         
        case(actions.GETEVENTDATA): {
            return {
                ...state,
                eventData: action.payload.data, 
            }
        }

        case(actions.REMOVEFROMCART): {

            let newCart = state.userData.cart.filter(eve => eve._id !== action.payload.id);

            let newUserData = {
                ...state.userData,
                cart: newCart
            }

            return {
                ...state,
                userData: newUserData
            }
        }

        default:
            return {
                ...state
            }    
            
    }
}