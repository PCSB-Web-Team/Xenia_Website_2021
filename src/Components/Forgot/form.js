import React, { useState } from "react";
import "./form.css";
import { Button } from "react-bootstrap";
const Eye = <i className="show fas fa-eye"></i>;
const EyeSlash = <i className="show fas fa-eye-slash"></i>;

const Form = () => {
  const [formdata, setformdata] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { newPassword, confirmPassword } = formdata;

  const [type1, settype1] = useState("password");
  const [type2, settype2] = useState("password");

  const [error, seterror] = useState("");

  const change = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
      seterror("Passwords do not match");
    } else {
      seterror("");
      setformdata({
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  const toggleView1 = () => {
    if (type1 === "password") {
      settype1("text");
    } else {
      settype1("password");
    }
  };

  const toggleView2 = () => {
    if (type2 === "password") {
      settype2("text");
    } else {
      settype2("password");
    }
  };

  const myStyle = {
    color: "red",
    paddingBottom: "10px",
  };

  return (
    <div>
      <form>
        <div className="grid">
          <div className="topic">Reset Password</div>
          <div className="label">New Password:</div>
          <div className="eye">
            <input
              id="pass1"
              type={type1}
              placeholder="Enter new Password"
              value={newPassword}
              name="newPassword"
              onChange={change}
            ></input>

            {type1 === "password" ? (
              <i onClick={toggleView1}>{EyeSlash}</i>
            ) : (
              <i onClick={toggleView1}>{Eye}</i>
            )}
          </div>

          <div className="label">Confirm New Password:</div>
          <div className="eye">
            <input
              id="pass2"
              type={type2}
              placeholder="Confirm new Password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={change}
            ></input>

            {type2 === "password" ? (
              <i onClick={toggleView2}>{EyeSlash}</i>
            ) : (
              <i onClick={toggleView2}>{Eye}</i>
            )}
          </div>
          <span style={myStyle}>{error}</span>
          <div className="buttons">
            <div className="submitButton">
              <Button className="bclass" onClick={submit}>
                SUBMIT
              </Button>
            </div>
            <div className="cancelButton">
              <Button className="bclass">CANCEL</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
