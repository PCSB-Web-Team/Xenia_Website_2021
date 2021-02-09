import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "./main1.jpg";
import about from "./hero.jpg";
import data from "./datamastro.jpg";
import code from "./sudocode.jpg";
import { motion } from "framer-motion";
const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 1200 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="section about-us">
      <div className="row hero p-5" style={{ padding: "20px" }}>
        <div className="col-lg-4 content">
          <motion.h1
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            className="events"
          >
            <span className="typewriter-text1 major">Do participate</span>
            <span className="typewriter-text2 major"> Test your skill</span>
          </motion.div>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aspernatur autem voluptatem iusto aperiam a id. Omnis, molestias
            facere eius totam aspernatur autem itaque commodi accusamus dolor
            officiis modi quas. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde omnis, ducimus, deserunt enim corrupti
            explicabo eos praesentium ex qui rem quo aliquam? Qui molestiae
            saepe perferendis magni, consequatur dicta ipsum!
          </motion.p>

          {/* <motion.button
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            className="btn btn-outline-light btn-lg"
          >
            Register Now
          </motion.button> */}
        </div>
        <div className="col-lg-8 d-none d-lg-block">
          <motion.img
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            src={main}
            className="img-fluid my-5"
          />
        </div>
      </div>

      <div className="row p-5">
        <div
          className="col-lg-4"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-4">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-8  d-none d-lg-block"
          data-aos="slide-right"
          data-aos-duration="2000"
        >
          <img
            src={data}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
          />
        </div>
      </div>
      <div className="row p-5">
        <div
          className="col-lg-4 order-2"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-4">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-8 d-none d-lg-block"
          data-aos="slide-left"
          data-aos-duration="2000"
        >
          <img
            src={about}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
          />
        </div>
      </div>

      <div className="row p-5">
        <div
          className="col-lg-4"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-4">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-8 d-none d-lg-block"
          data-aos="slide-right"
          data-aos-duration="2000"
        >
          <motion.img
            src={code}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
