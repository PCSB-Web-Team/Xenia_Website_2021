import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import astronaut from "./astronaut.png";
import { connect } from "react-redux";
import { loggedIn, popLogin, closeLogin, popSignUp } from "../../Store/Actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
    };
  }

  handleUserName = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

//  handleSubmit = async (e) => {
//    const { email, password } = this.state;
//
//    e.preventDefault();
//
//    const user = { email, password };
//    const res = await login(user);
//    const userdata = res.data.data;
//    console.log(res.data.ok);
//    console.log(userdata);
//
//    if (res.data.ok === true) {
//      Store.dispatch({
//        type: "logedin",
//        payload: userdata,
//      });
//
//      // {
//      //   this.props.handleLogedin(userdata);
//      // }
//
//      // this.props.loggedIn(userdata);
//
//      localStorage.setItem("xeniaemail", email);
//      localStorage.setItem("xeniapassword", password);
//    }
//
    // axios
    //   .post("http://localhost:5000/api/login", { username, password })
    //   .then((res) => {
    //     let userdata = res.data.data;

    //     if (res.data.status === "ok") {
    //       Store.dispatch({
    //         type: "logedin",
    //         payload: userdata,
    //       });

    //       {
    //         this.props.handleLogedin(userdata);
    //       }

    //       this.props.loggedIn(userdata);

    //       localStorage.setItem('xeniausername', username);
    //       localStorage.setItem('xeniapassword', password);

    //     }
    //   })
    //   .catch((err) => console.log(err.message));
  //};

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.popStoreLogin}
          onHide={this.props.closeStoreLogin}
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
                    value={this.state.email}
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
                onClick={this.props.closeStoreLogin}
                className="btn btn-outline-light btn-block"
              >
                Login
              </button>
              <div className="text-center my-2">
                Don't have an account ?{" "}
                <a
                  style={{ fontWeight: "bold", color: "blue" }}
                  onClick={this.props.handleToggle}
                >
                  Sign Up
                </a>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

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
    openStoreLogin: () => {
      dispatch(popLogin());
    },
    closeStoreLogin: () => {
      dispatch(closeLogin());
    },
    loggedIn: (userData) => {
      dispatch(loggedIn(userData));
    },
    handleToggle: () => {
      dispatch(closeLogin());
      dispatch(popSignUp());
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
