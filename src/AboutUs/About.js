import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "./main_bg.jpg";
import about from "./hero.jpg";
import data from "./datamastro.jpg";
import code from "./sudocode.jpg";
import { motion } from "framer-motion";
import FAQ from "./FAQ";
const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeTop = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section about-us">
      <div className="row hero p-5" style={{ padding: "20px" }}>
        <div className="col-lg-12 content">
          <motion.h1
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            style={{ fontSize: "75px" }}
          >
            <span className="firstChild">X</span>ENIA
          </motion.h1>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            className="events"
          >
            <span
              style={{ fontSize: "20px" }}
              className="typewriter-text1 major"
            >
              Do participate
            </span>
            <span
              style={{ fontSize: "20px" }}
              className="typewriter-text2 major"
            >
              {" "}
              Test your skill
            </span>
          </motion.div>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.5 }}
            style={{ textAlign: "justify", color: "#ffff" }}
          >
            <strong>
              Modi quas. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Unde omnis, ducimus, deserunt enim corrupti
            </strong>
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
            style={{ zIndex: 1200 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="btn btn-outline-light btn-lg"
          >
            Register Now
          </motion.button> */}
        </div>
        {/* <div className="col-lg-8 d-none d-lg-block">
          <motion.img
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            src={main}
            className="img-fluid my-5 "
          />
        </div> */}
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
          className="col-lg-8 text-center  d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={data}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
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
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={about}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
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
          className="col-lg-8 text-center d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <motion.img
            src={code}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="450px"
            width="450px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
          />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default About;
