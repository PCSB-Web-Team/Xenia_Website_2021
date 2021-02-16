import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import FAQ from "./FAQ/FAQ";

const Contact = () => {
  const fadeTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="contact text-center my-5">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12">
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
              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user text-danger"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Name" />
              </div>

              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-envelope text-warning"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-phone text-success"></i>
                  </span>
                </div>
                <input type="text" class="form-control" placeholder="Phone" />
              </div>

              <div class="input-group input-group-lg mb-3">
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
        </div>
      </div>

      <FAQ/>

    </div>
  );
};

export default Contact;
