import React, { useState, useRef } from "react";
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
import ReCaptcha from "react-google-recaptcha";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ isError: true });
  const [loading, setLoading] = useState(false);

  const reRef = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const err = validInfo({
        name,
        email,
        password,
        password2,
        phone,
        college,
      });
      await setErrors(err);

      if (!err.isError) {
        setLoading(true);

        const captchaToken = await reRef.current.executeAsync();
        reRef.current.reset();

        const user = {
          name,
          password,
          college,
          email,
          phone,
          captchaToken,
        };
        const res = await register(user);

        // console.log(res);

        if (res.data.ok) {
          setLoading(false);
          signUpSuccess();
          props.toggleLogin();
        } else {
          // console.log("heelo");
          setLoading(false);
          signUpFail();
        }
        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setCollege("");
        setPhone("");
        setErrors({ isError: false });
      } else {
        setTimeout(() => {
          setErrors({ isError: true });
          setLoading(false);
        }, 3000);
      }
      setLoading(false);
    } catch (error) {
      setTimeout(() => {
        setErrors({ isError: true });
        setLoading(false);
      }, 3000);
      setLoading(false);
      signUpFail();
    }
  };

  return (
    <div>
      <ReCaptcha
        sitekey="6LdP8iobAAAAAHHXrhWEJLuoQWruhsQiLq1AywMg"
        size="invisible"
        ref={reRef}
      />
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
              {errors !== null && errors.name !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.name}`}
                </span>
              )}
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
              {errors !== null && errors.password2 !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.password2}`}
                </span>
              )}
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
                  min="7000000000"
                  max="9999999999"
                  placeholder="Mobile (Without Country Code)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {errors !== null && errors.phone !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.phone}`}
                </span>
              )}
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
              {errors !== null && errors.college !== undefined && (
                <span className="text-danger pl-5 font-weight-bold">
                  {`* ${errors.college}`}
                </span>
              )}
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
