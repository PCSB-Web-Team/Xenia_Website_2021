export const LOGGEDIN = "logedin";
export const LOGGEDOUT = "logedout";
export const ADDTOCART = 'addtocart';
export const REMOVEFROMCART = 'removefromcart';
export const POPLOGIN = 'poplogin';
export const POPSIGNUP = 'popsignup';
export const CLOSELOGIN = 'closelogin';
export const CLOSESIGNUP = 'closesignup';

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

export const addToCart = (eveName) => {
    return {
        type: ADDTOCART,
        payload: {
            eveName: eveName
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