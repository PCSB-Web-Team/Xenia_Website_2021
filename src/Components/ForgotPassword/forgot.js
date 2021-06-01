import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgot.css";

const Form = () => {

  const [error, seterror] = useState(null);
  const [message, setmessage] = useState(null);

  const ValidateEmail = () => {

    const input = document.getElementById("input-email")

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    console.log(input.value);

    if (input.value.match(validRegex)) {

      seterror(null);
      return true;

    } else {

      seterror("Invalid email address!");
      input.focus();
      return false;

    }
  }

  const handleSubmit = () => {

    if (ValidateEmail()) {
      setmessage("Please Check Your Mail!")
    }
    else {
      console.log(error)
    }
  }

  return (
    <div className='forgot-password'>
      <div className='form-box'>
        <div className='title'>Enter Your Email</div>
        <input type='email' placeholder='abc@gmail.com' id='input-email' ></input>
        <div className='alerts'>
          <span className='error'>{error}</span>
          <span className='message'>{message}</span>
        </div>
        <div className='button-group'>
          <Link to='/'><button className='cancel'>Cancel</button></Link>
          <button className='send' onClick={handleSubmit}>Send Mail</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
