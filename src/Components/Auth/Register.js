import React, { useState } from "react";
import "./Register.css";
import { Modal } from "react-bootstrap";
import validInfo from "./validInfo";
// import axios from "axios";
import astronaut from "../../Assets/Images/astronaut.png";
import { register } from "../Config/api/User";
import { connect } from "react-redux";
import Themebutton from "../Button/button";
import { toggleLogin, openSignUp, closeLogin } from "../../Store/Actions";
import { signUpSuccess, signUpFail } from "../Notifications/Notification";
import Recaptcha from 'react-recaptcha';

const Register = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  // For captcha
  const [userVerified, setUserVerified] = useState(false);

  if (errors !== null) {
    setTimeout(() => {
      setErrors(null);
      setLoading(false);
    }, 5000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!userVerified) {
      alert("Please Verify You are Human!")
      return;
    }

    setErrors(null);
    setErrors(() =>
      validInfo({
        name,
        email,
        password,
        password2,
        phone,
        college,
      })
    );
    console.log(errors);
    if (errors !== null && !errors.errorFound) {
      setLoading(true);

      const user = { name, password, college, email, phone };
      const res = await register(user);

      console.log(res.data);

      if (res.data.ok) {
        signUpSuccess();
        props.toggleLogin();
      } else {
        signUpFail();
      }

      setEmail("");
      setPassword("");
      setCollege("");
      setPhone("");
      setErrors(null);
      setLoading(false);
    }
  };



  const recaptchaLoaded = () => {
    console.log("recaptch loaded")
  }

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.popSignUp}
        onHide={props.closeLogin}
      >
        <Modal.Header
          style={{
            paddingLeft: "120px",
            background: "#131313",
            color: "#fff",
          }}
          closeButton
        >
          <Modal.Title>
            <div className="d-flex flex-column text-center">
              <img
                alt="sign-up"
                src={astronaut}
                className="img-fluid"
                style={styles.imageStyles}
              />{" "}
              <span
                style={styles.title_text}
                className="text-uppercase font-weight-bold"
              >
                {" "}
                Sign Up
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
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors !== null &&
                errors.errorFound &&
                errors.name !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.name}`}
                </span>
              ) : null}
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-envelope text-warning"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="Email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors !== null &&
                errors.errorFound &&
                errors.email !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.email}`}
                </span>
              ) : null}
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
              {errors !== null &&
                errors.errorFound &&
                errors.password !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.password}`}
                </span>
              ) : null}
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
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
              </div>
              {errors !== null &&
                errors.errorFound &&
                errors.password2 !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.password2}`}
                </span>
              ) : null}
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="phone"
                  type="number"
                  min='7000000000'
                  max='9999999999'
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>{" "}
              {errors !== null &&
                errors.errorFound &&
                errors.phone !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.phone}`}
                </span>
              ) : null}
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-university"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="college"
                  type="text"
                  placeholder="College"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              {errors !== null &&
                errors.errorFound &&
                errors.college !== undefined ? (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.college}`}
                </span>
              ) : null}
            </div>

            {loading ? (
              <div className="loginButtonNew my-5">
                <div className="spinner-border text-info aqua" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>

                <div className="signupButtonNew">
                  <Themebutton onClick={handleSubmit} value="Sign up" />
                </div>
                <div className="text-center my-2">
                  Already have an account ?{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={props.toggleLogin}
                  >
                    Login
                  </span>
                </div>
              </>
            )}
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
    marginLeft: "80px",
    borderRadius: "30px",
    borderColor: "white",
    borderWidth: "1px",
  },
  title_text: {
    letterSpacing: "5px",
    marginLeft: "50px",
    marginTop: "20px",
  },
};

const mapSatesToProps = (state) => {
  return {
    popSignUp: state.openSignUp,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    openSignUp: () => {
      dispatch(openSignUp());
    },
    closeLogin: () => {
      dispatch(closeLogin());
    },
    toggleLogin: () => {
      dispatch(toggleLogin());
    },
  };
};

export default connect(mapSatesToProps, mapActionsToProps)(Register);
