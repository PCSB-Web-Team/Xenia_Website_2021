export const LOGGEDIN = "LOGGEDIN";
export const LOGGEDOUT = "LOGGEDOUT";
export const ADDTOREGISTERED = 'ADDTOCART';
export const GETEVENTDATA = 'GETEVENTDATA';
export const STORETOKEN  =  'STORETOKEN';
export const SETREGISTEREDBUILDUPEVENTS = 'SETREGISTEREDBUILDUPEVENTS';

export const OPENLOGIN = 'OPENLOGIN';
export const OPENSIGNUP = 'OPENSIGNUP';
export const TOGGLELOGIN = 'TOGGLELOGIN';
export const CLOSELOGIN = 'CLOSELOGIN';

export const PAYMENTDETAILS = "PAYMENTDETAILS";

export const loggedIn = (userData) => {

    return {
        type: LOGGEDIN,
        payload : userData
    }

}

export const storeToken = (token) => {
    return {
        type: STORETOKEN,
        payload: token
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
        payload: eveData
    }
}

export const addToRegistered = (eveData) => {
    return {
        type: ADDTOREGISTERED,
        payload: eveData
    }
}

export const setRegisteredBuildUpEvents = (events) => {
    return{
        type: SETREGISTEREDBUILDUPEVENTS,
        payload: events
    }
}

export const openLogin = () => {
    return {
        type: OPENLOGIN
    }
}

export const openSignUp = () => {
    return {
        type: OPENSIGNUP
    }
}

export const toggleLogin = () => {
    return {
        type: TOGGLELOGIN
    }
}

export const closeLogin = () => {
    return {
        type: CLOSELOGIN
    }
}

export const paymentDetails = (details) => {
    return {
        type: PAYMENTDETAILS,
        details: details
    }
}