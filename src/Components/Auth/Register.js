import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import astronaut from "../../Assets/Images/astronaut.png";
import { register } from "../../config/api/User";
import { connect } from "react-redux";

import {} from "../../Store/Actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      college: "",
      phone: "",
    };
  }

  handleUserName = (e) => {
    this.setState({ name: e.target.value });
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

  handleSubmit = async (e) => {
    const { name, password, college, email, phone } = this.state;
    e.preventDefault();
    const user = { name, password, college, email, phone };
    const res = await register(user);
    console.log(res.data);
    localStorage.setItem("authtoken", res.data.data.token);
    localStorage.setItem("xeniapassword", password);
    this.setState({ name: "" });
    this.setState({ college: "" });
    this.setState({ password: "" });
    this.setState({ email: "" });
    this.setState({ phone: "" });
    // axios
    //   .post("http://localhost:5000/api/register", {
    //     username,
    //     password,
    //     college,
    //     email,
    //     phone,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.view}
          onHide={this.props.close}
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
                    value={this.state.name}
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
                onClick={this.props.close}
                className="btn btn-outline-light btn-block"
              >
                Sign Up
              </button>
              <div className="text-center my-2">
                Already have an account ?{" "}
                <a
                  style={{ fontWeight: "bold", color: "blue" }}
                  onClick={this.props.toggle}
                >
                  Login
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
    popSignUp: state.popSignUp,
  };
};

const mapActionsToProps = (dispatch) => {
  return {};
};

export default connect(mapSatesToProps, mapActionsToProps)(Register);
