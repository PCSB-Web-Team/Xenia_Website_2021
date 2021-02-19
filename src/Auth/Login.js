import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
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
        
        let k=res.data.data;

        if(res.data.status==='ok'){

          Store.dispatch({
              type: 'logedin',
              payload: k
            })

            {this.props.handleLogedin()}
          }
      })
      .catch((err) => console.log(err.message));

  };

  render() {
    return (
      <div>
        <Modal show={this.props.openLogin} onHide={this.props.closeLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                  {console.log('Login Form Opened')}
                  <input
                    className="form-control"
                    placeholder="username"
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
                      <i className="fa fa-lock"></i>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
              </div>
              <button
                onClick={this.props.closeLogin}
                className="btn btn-outline-success btn-block"
              >
                Login
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
