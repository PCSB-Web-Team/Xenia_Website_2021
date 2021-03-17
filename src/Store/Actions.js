export const LOGGEDIN = "LOGGEDIN";
export const LOGGEDOUT = "LOGGEDOUT";
export const ADDTOCART = 'ADDTOCART';
export const REMOVEFROMCART = 'REMOVEFROMCART';
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