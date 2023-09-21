import React, { useState } from "react";
import { Link } from "react-router-dom";
import astro from "../../Assets/Images/astronaut.png";
import Themebutton from "../Button/button";
import { forgotPassword } from "../Config/api/User";
import "./forgot.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, seterror] = useState(null);
  const [message, setmessage] = useState();

  const ValidateEmail = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email);
  };

  const handleSubmit = async () => {
    if (ValidateEmail()) {
      const response = await forgotPassword({ email });
      if (response.data.ok) {
        setmessage("Please Check Your Mail!");
        seterror("");
      } else {
        setmessage("");
        seterror(response.data.error);
      }
    } else {
      seterror("Invalid Email");
      setmessage("");
    }
  };

  const imageStyles = {
    padding: "5px",
    height: "90px",
    width: "90px",
    marginTop: "-30px",
    borderRadius: "30px",
    borderColor: "white",
    borderWidth: "1px",
  };

  return (
    <div className="forgot-password">
      <div className="form-box">
        <div className="title">
          <img src={astro} style={imageStyles} alt=""></img>
          <p>Enter your email</p>
        </div>
        <input
          type="email"
          placeholder="Email"
          id="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="alerts">
          <span className="error">{error}</span>
          <span className="message">{message}</span>
        </div>
        <div className="button-group">
          <Link to="/">
            <Themebutton value="Cancel" />
          </Link>
          <Themebutton value="Send Mail" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Form;
