import React, { useState } from "react";
import sendEmail from "./sendEmail";
import "./Login.css";
// import axios from "axios";
import validInfo from "./validInfo";
import { Modal } from "react-bootstrap";
import astronaut from "../../Assets/Images/astronaut.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginFail, loginSuccess } from "../Notifications/Notification";
import { login, getLoggedInUser } from "../Config/api/User";
import Themebutton from "../Button/button";

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
  const [errors, setErrors] = useState({isError: true});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {

      e.preventDefault();

      const err = validInfo({ email, password }, false);
      await setErrors(err);

      const user = { email, password };

      if (!errors.isError) {

        setLoading(true);

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
          // console.log("login Failed")
          loginFail();
          setLoading(false);
          // setError("Invalid Credentials");
        }

        setEmail("");
        setPassword("");
        setErrors({isError: false});
      }
      else{
				setTimeout(() => {
					setErrors({ isError: true });
					setLoading(false);
				}, 3000);
      }
      setLoading(false);

    } catch (error) {
      loginFail();
      setLoading(false);
    }
  };

  const forgotPassword = () => {
    sendEmail();
    props.closeLogin();
  };

  return (
    <div className='login-modal'>
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
          <Modal.Title className="login-head">
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

            <div className="login-button-group">
              {loading ? (
                <div className="loginButtonNew my-5">
                  <div className="spinner-border text-info aqua" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="loginButtonNew">
                    <Themebutton onClick={handleSubmit} value="Login" />
                  </div>
                  <div className="text-center my-2">
                    Don't have an account ?{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "blue",
                        cursor: "pointer",
                      }}
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
                </>
              )}
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
    borderRadius: "30px",
    borderColor: "white",
    borderWidth: "1px",
  },
  title_text: {
    letterSpacing: "5px",
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