import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import logo from  "../../Assets/images/logo1.jpeg";
import {connect} from 'react-redux';
import {loggedIn, popLogin, closeLogin} from '../../Store/Actions';

class Login extends Component {
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

    this.props.closeStoreLogin()

    const { username, password, token } = this.state;
    
    e.preventDefault();

    axios
      .post("https://xenia-backend.herokuapp.com/api/user/login", {email: username, password })
      .then((res) => {
        let userdata = res.data.data;

        console.log(res)
        
        

        if (res.data.status === "ok") {

          this.props.loggedIn(userdata);

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
          show    = {this.props.popStoreLogin}
          onHide  = {this.props.closeStoreLogin}
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
                onClick={this.handleSubmit}
                className="btn btn-outline-light btn-block"
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

const mapStateToProps = state => {
  return {
    popStoreLogin: state.popLogin,
  }
}

const mapActionsToProps = dispatch => {
  return {

    openStoreLogin: () => { dispatch(popLogin()) },
    closeStoreLogin: () => { dispatch(closeLogin()) },
    loggedIn: (userData) => { dispatch(loggedIn(userData)) }
  
  }
}

export default connect( mapStateToProps, mapActionsToProps ) (Login);