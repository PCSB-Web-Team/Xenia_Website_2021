export const LOGGEDIN = "LOGGEDIN";
export const LOGGEDOUT = "LOGGEDOUT";
export const ADDTOCART = 'ADDTOCART';
export const REMOVEFROMCART = 'REMOVEFROMCART';
export const POPLOGIN = 'POPLOGIN';
export const POPSIGNUP = 'POPSIGNUP';
export const CLOSELOGIN = 'CLOSELOGIN';
export const CLOSESIGNUP = 'CLOSESIGNUP';
export const GETEVENTDATA = 'GETEVENTDATA';

export const loggedIn = (userData) => {

    return {
        type: LOGGEDIN,
        payload: {
            userData: userData,
        }
    }
}

export const loggedOut = () => {
    return {
        type: LOGGEDOUT
    }
}

export const getEventData = (eveData) => {
    return {
        type: GETEVENTDATA,
        payload: {
            data: eveData, 
        }
    }
}

export const addToCart = (eveData) => {
    return {
        type: ADDTOCART,
        payload: {
            eveData: eveData
        }
    }
}

export const removeFromCart = (eventName) => {
    return {
        type: REMOVEFROMCART,
        payload: {
            eveName: eventName
        }
    }
}

export const popLogin = () => {
    return {
        type: POPLOGIN,
    }
}

export const closeLogin = () => {
    return {
        type: CLOSELOGIN,
    }
}

export const popSignUp = () => {
    return {
        type: POPSIGNUP,
    }
}

export const closeSignUp = () =>{
    return {
        type: CLOSESIGNUP,
    }
}