import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {changedSuccessFully} from '../Notifications/Notification';
import "./reset.css";
import ThemeButton from '../Button/button';


const Form = () => {

    const [error, seterror] = useState(null);
    const [success, setSuccess] = useState(false);
    const [view1, setView1] = useState(false);
    const [view2, setView2] = useState(false);

    const ValidatePasswords = () => {

        let pass1 = document.getElementById("pass1")
        let pass2 = document.getElementById("pass2")

        if (pass1.value === pass2.value) {
            return true;
        }
        else {
            return false
        }
    }


    // const toggle1 = () => {

    //     let pass1 = document.getElementById("pass1")
    //     let pass2 = document.getElementById("pass2")

    //     if (pass1.type === "password") {
    //         pass1.type = "text";
    //     }
    //     else {
    //         pass1.type = "password";
    //     }
    // }

    // const toggle2 = () => {

    //     let pass1 = document.getElementById("pass1")
    //     let pass2 = document.getElementById("pass2")

    //     if (pass2.type === "password") {
    //         pass2.type = "text";
    //     }
    //     else {
    //         pass2.type = "password";
    //     }
    // }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (ValidatePasswords()) {
            setSuccess(true);
            changedSuccessFully();
        }
        else {
            seterror("Passwords Do Not Match")
        }

    }

    return (

        <div className='reset-password'>

            <div className='form-box'>
                {
                    success
                        ?

                        <div>
                            <Redirect to='/'/>
                        </div>

                        :

                        <div>
                            <label>New Password</label>
                            <div>
                                <input type={!view1 ? 'password' : 'text'} id='pass1' ></input>
                                <i class={!view1 ? "fa fa-eye" : "fa fa-eye-slash"} onClick={ () => setView1(!view1) }></i>
                            </div>
                            <label>Confirm Password</label>
                            <div>
                                <input type={!view2 ? 'password' : 'text'} id='pass2' ></input>
                                <i class={!view2 ? "fa fa-eye" : "fa fa-eye-slash"} onClick={ () => setView2(!view2) }></i>
                            </div>

                            <div className='alerts'>
                                <span className='error'>{error}</span>
                            </div>

                            <div className='button-group'>
                                <Link to='/'><ThemeButton value='Cancel' /></Link>
                                <ThemeButton onClick={ handleSubmit } value='Submit'/>
                            </div>
                        </div>
                }
            </div>

        </div>

    );
};

export default Form;
