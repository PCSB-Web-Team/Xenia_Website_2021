import React,{useState} from 'react';

import Login from './Login';
import Register from './Register';

const LoginRegister = () => {

    
    const [viewLogin,setLogin] = useState(true);
    const [viewRegister, setRegister] = useState(false);

    
    const toggleView = () => {

        console.log("toggle")

        if( viewLogin ) {
            setLogin(false)
            setRegister(true)
        }
        else {
            setLogin(true)
            setRegister(false)
        }
    }

    const closeView = () => {
        setLogin(false);
        setRegister(false);
    }
    
    return(
        <div>
            <Login view={viewLogin} toggle={toggleView} close={closeView}></Login>
            <Register view={viewRegister} toggle={toggleView} close={closeView}></Register>
        </div>
    )    
}

export default LoginRegister;