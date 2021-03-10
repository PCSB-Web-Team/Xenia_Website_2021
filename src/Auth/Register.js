import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import logo from "./logo1.jpeg";

import {connect} from 'react-redux';

import {popSignUp, closeSignUp, loggedIn} from '../Store/Actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      college: "",
      phone: "",
    };
  }

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  
  handleCollege = (e) => {
    this.setState({ college: e.target.value });
  };
  
  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, password, college, email, phone } = this.state;
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        username,
        password,
        college,
        email,
        phone,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.popSignUp}
          onHide={this.props.closeSignUp}
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
              <img
                src={logo}
                className="img-fluid text-center"
                height="50px"
                width="50px"
                style={{ padding: "5px" }}
              />{" "}
              <span
                style={{ letterSpacing: "5px" }}
                className="text-uppercase font-weight-bold"
              >
                {" "}
                Sign Up
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#131313", color: "#ffff" }}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user text-danger"></i>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    type="text"
                    onChange={this.handleUserName}
                  />
                </div>
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
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </div>
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
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="college"
                    type="test"
                    placeholder=""
                  />
                </div>
              </div> */}
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
                    type="text"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handlePhone}
                  />
                </div>
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
                    value={this.state.college}
                    onChange={this.handleCollege}
                  />
                </div>
              </div>

              <button
                onClick={this.props.closeSignUp}
                className="btn btn-outline-light btn-block"
              >
                Sign Up
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapSatesToProps = state => {
  return {
    popSignUp: state.popSignUp
  }
}

const mapActionsToProps = dispatch => {
  return {
    openSignUp: () => { dispatch(popSignUp()) },
    closeSignUp: () => { dispatch(closeSignUp()) }
  }
}

export default connect(mapSatesToProps, mapActionsToProps)(Register);