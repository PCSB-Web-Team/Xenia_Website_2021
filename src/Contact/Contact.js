import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import FAQ from "./FAQ/FAQ";
const Contact = () => {
  const fadeTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };
  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="contact text-center my-5">
      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="display-4"
        className="container p-5"
      >
        <div className="row">
          <div className="col-lg-6">
            <motion.h3
              variants={fadeTop}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="display-4"
            >
              Get In Touch
            </motion.h3>
            <br />
            <form action="">
              <div class="input-group  mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user text-danger"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Name" />
              </div>

              <div class="input-group  mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-envelope text-warning"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="input-group  mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-phone text-success"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Phone" />
              </div>

              <div class="input-group  mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-pencil-alt text-primary"></i>
                  </span>
                </div>
                <textarea
                  class="form-control"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Submit"
                class="btn btn-outline-light btn-block btn-lg"
              />
            </form>
          </div>
          <div className="col-lg-6 my-5">
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white p-3 mx-5 "
              style={{
                borderRadius: "12px",
                boxShadow: "2px 2px 15px #131313",
                opacity: 1,
              }}
            >
              <h4 className="text-center font-weight-bold">Address</h4>
              <hr
                style={{
                  color: "#004d33",
                  textAlign: "center",
                  margin: "4% 20%",
                }}
              />
              <p className="text-dark">
                Survey No. 27, Near, Trimurti Chowk,
                <br />
                Bharati Vidyapeeth Campus, Dhankawadi,
                <br /> Pune, Maharashtra 411043
              </p>
            </motion.div>
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              className="bg-white p-3 m-5 "
              style={{
                borderRadius: "12px",
                boxShadow: "2px 2px 15px #131313",
                opacity: 1,
              }}
            >
              <h4 className="text-center font-weight-bold">Social</h4>
              <hr
                style={{
                  color: "#004d33",
                  textAlign: "center",
                  margin: "4% 20%",
                }}
              />
              <p className="text-dark">
                <a href="">
                  {" "}
                  <i
                    className="fa fa-2x fa-instagram mx-4 text-danger"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-2x fa-facebook-official mx-4 text-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-2x fa-linkedin mx-4"
                    style={{ color: "#0099ff" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <FAQ></FAQ>
    </div>
  );
};

export default Contact;
