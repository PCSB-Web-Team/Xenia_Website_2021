import React, { Component, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import astronaut from "../../Assets/Images/astronaut.png";
import { connect } from "react-redux";

import { login, getLoggedInUser } from "../Config/api/User";
import { loggedIn, storeToken } from "../../Store/Actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    let res = await login(user);
    if (res.data.error) {
      setError("Invalid Credentials");
      console.log(error);
    }

    if (res.data.ok === true) {
      const token = res.data.data.token;
      res = await getLoggedInUser(token);

      localStorage.setItem("xeniaUserToken", token);

      props.loggedIn(res.data.data);
      props.storeToken(token);
      setError("");
    }

    setEmail("");
    setPassword("");
  };

  const handleHide = () => {
    if (error === "Invalid Credentials") {
      return props.close();
    } else {
      return null;
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.view}
        onHide={handleHide}
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
              {error && <span className="text-danger">{error}</span>}
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
            </div>
            <button
              onClick={handleHide}
              className="btn btn-outline-light btn-block"
            >
              Login
            </button>
            <div className="text-center my-2">
              Don't have an account ?{" "}
              <a
                style={{ fontWeight: "bold", color: "blue" }}
                onClick={props.toggle}
              >
                Sign Up
              </a>
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
    popStoreLogin: state.popLogin,
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
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
