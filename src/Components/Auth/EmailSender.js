import React, { useState } from "react";
import sendEmail from "./sendEmail";
// import axios from "axios";
import { Modal } from "react-bootstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");

  const handleHide = () => {
    if (error === "Invalid Credentials") {

    } else {
      return null;
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.openForgot}
        onHide={props.closeForgot}
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
                alt="welcome-back"
                src={astronaut}
                className="img-fluid"
                style={styles.imageStyles}
              />{" "}
              <span
                style={styles.title_text}
                className="text-uppercase font-weight-bold"
              >
                Enter Your Email
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
            </div>
            <button
              onClick={handleHide}
              className="btn btn-outline-light btn-block"
            >
                Send Mail
            </button>
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

export default Login;
