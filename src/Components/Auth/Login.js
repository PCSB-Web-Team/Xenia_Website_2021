import React, { useState } from "react";
import sendEmail from "./sendEmail";
import './Login.css';
// import axios from "axios";
import validInfo from "./validInfo";
import { Modal } from "react-bootstrap";
import astronaut from "../../Assets/Images/astronaut.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginFail, loginSuccess } from "../Notifications/Notification";
import { login, getLoggedInUser } from "../Config/api/User";
import Themebutton from '../Button/button';
import {
  loggedIn,
  storeToken,
  openLogin,
  closeLogin,
  toggleLogin,
} from "../../Store/Actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  if (errors !== null) {
    setTimeout(() => setErrors(null), 5000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validInfo({ email, password }, false));
    const user = { email, password };

    if (errors === null) {
      let res = await login(user);

      if (res.data.ok === true) {
        const token = res.data.data.token;
        res = await getLoggedInUser(token);

        localStorage.setItem("xeniaUserToken", token);

        props.loggedIn(res.data.data);
        props.storeToken(token);

        loginSuccess();
        props.closeLogin();
        // setError("");
      } else {
        loginFail();
        // setError("Invalid Credentials");
      }

      setEmail("");
      setPassword("");
      setErrors(null);
    }
  };

  const handleHide = () => {
    // if (error === "Invalid Credentials") {
    //   return props.closeLogin();
    // } else {
    //   return null;
    // }
  };

  const forgotPassword = () => {
    sendEmail();
    props.closeLogin();
  };

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.popLogin}
        onHide={props.closeLogin}
      >
        <Modal.Header
          style={{
            paddingLeft: "50px",
            background: "black",
            color: "#ffff",
          }}
          closeButton
        >
          <Modal.Title>
            <div className="d-flex flex-column text-center">
              <img
                alt="welcome-back"
                src={astronaut}
                className="img-fluid"
                style={styles.imageStyles}
              />{" "}
              <span
                style={styles.title_text}
                className="text-uppercase font-weight-bold"
              >
                {" "}
                Welcome back
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#131313", color: "#ffff" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-envelope text-warning"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {errors !== null && errors.email !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.email}`}
                </span>
              )}
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-lock text-success"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {errors !== null && errors.password !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.password}`}
                </span>
              )}
            </div>
            <div className="loginButtonNew">
              <Themebutton
                onClick={handleSubmit}
                value='Login'
              />
            </div>
            <div className="text-center my-2">
              Don't have an account ?{" "}
              <span
                style={{ fontWeight: "bold", color: "blue", cursor: "pointer" }}
                onClick={props.toggleLogin}
              >
                Sign Up
              </span>
            </div>
            <div className="text-center">
              <Link to="/forgot-password">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={forgotPassword}
                >
                  Forgot Password
                </span>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const styles = {
  imageStyles: {
    padding: "5px",
    height: "90px",
    width: "90px",
    marginTop: "-50px",
    marginLeft: "150px",
    borderRadius: "30px",
    borderColor: "white",
    borderWidth: "1px",
  },
  title_text: {
    letterSpacing: "5px",
    marginLeft: "60px",
    marginTop: "20px",
  },
};

const mapStateToProps = (state) => {
  return {
    popLogin: state.openLogin,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loggedIn: (userData) => {
      dispatch(loggedIn(userData));
    },
    storeToken: (token) => {
      dispatch(storeToken(token));
    },
    openLogin: () => {
      dispatch(openLogin());
    },
    toggleLogin: () => {
      dispatch(toggleLogin());
    },
    closeLogin: () => {
      dispatch(closeLogin());
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
