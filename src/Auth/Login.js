import React, { Component } from "react";
import axios from "axios";

import { Modal } from "react-bootstrap";
import logo from "./logo1.jpeg";
import Store from "../Store/Store";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

      username: "",
      password: "",
      token: "",
    };
  }

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };
  
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, password, token } = this.state;
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then((res) => {
        let k = res.data.data;

        if (res.data.status === "ok") {
          Store.dispatch({
            type: "logedin",
            payload: k,
          });

          {
            this.props.handleLogedin();
          }

          localStorage.setItem('xeniausername', username);
          localStorage.setItem('xeniapassword', password);
        }
      })
      .catch((err) => console.log(err.message));
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show    = {this.props.openLogin}
          onHide  = {this.props.closeLogin}
          style   = {{
            background: 'transparent',
          }}
        >
          <Modal.Header
            style={{
              paddingLeft: "50px",
              background: 'black',
              color: "#ffff",
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
                Welcome back
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
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUserName}
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
              <button
                onClick={this.props.closeLogin}
                className="btn btn-outline-light btn-block"
              >
                Login
              </button>
            </form>
            <span> Don't have an account ? <a onClick={this.props.toggleLoginSignup}> SignUp Here </a> </span>

          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
