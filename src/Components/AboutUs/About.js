import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import main from "../../Assets/Images/main_bg.jpg";
import about from "../../Assets/Images/hero.jpg";
import data from "../../Assets/Images/datamastro.jpg";
import code from "../../Assets/Images/sudocode.jpg";
import { motion } from "framer-motion";
import Sponsors from "./Sponsors/Sponsors";

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
      <div className="row text-center hero">
        <div className="col-lg-12 content1 px-5">
          <motion.h1
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            style={{ fontSize: "75px" }}
          >
            <span className="firstChild">X</span>ENIA
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            style={{ textAlign: "left", color: "#ffff" }}
          >
            Xenia is the annual technical festival organised by the PICT CSI
            Student Branch. This is a technical event with the view to find out
            the best of each and everyone and grow their skills. Xenia not only
            aims to develop the coding skills but also develop your aptitude
            skills.
            <br />
            <br />
            Xenia gives you the chance to discover your talents through its
            various events. The events like campus to corporate gives the
            experience for interviews for placement activities. You will
            discover your coding skills with events like Code strike, Ninja
            Coding Contest and Data Cup. This is the unique opportunity for the
            students to think beyond their regular academics and find out their
            best . The pneuma of learning new things has inspired the PICT CSI
            Branch to present Xenia in order to nurture and cultivate the
            talent.
          </motion.p>
        </div>
      </div>

      <div className="row text-center hero">
        <div className="col-lg-12 content2 px-5">
          <motion.h1
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            style={{ fontSize: "75px" }}
          >
            <span className="firstChild">P</span>csb
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            style={{ textAlign: "left", color: "#ffff" }}
          >
            Xenia is the annual technical festival organised by the PICT CSI
            Student Branch. This is a technical event with the view to find out
            the best of each and everyone and grow their skills. Xenia not only
            aims to develop the coding skills but also develop your aptitude
            skills.
            <br />
            <br />
            Xenia gives you the chance to discover your talents through its
            various events. The events like campus to corporate gives the
            experience for interviews for placement activities. You will
            discover your coding skills with events like Code strike, Ninja
            Coding Contest and Data Cup. This is the unique opportunity for the
            students to think beyond their regular academics and find out their
            best . The pneuma of learning new things has inspired the PICT CSI
            Branch to present Xenia in order to nurture and cultivate the
            talent.
          </motion.p>
        </div>
      </div>

      <div className="row mx-auto eventContent">
        <div
          className="col-lg-6"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-5">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 text-center  d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={data}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="300px"
            width="300px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
          />
        </div>
      </div>

      <div className="row mx-auto eventContent">
        <div
          className="col-lg-6 order-2"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-5">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={about}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="300px"
            width="300px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
          />
        </div>
      </div>

      <div className="row mx-auto mb-5 eventContent">
        <div
          className="col-lg-6"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <div className="event-info mt-5">
            <h3 className="font-weight-bold display-5">Event Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              veritatis error impedit neque harum asperiores provident sunt sint
              quis architecto. Nemo impedit commodi fuga natus sunt magnam id
              quos mollitia.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 text-center d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <motion.img
            src={code}
            style={{ objectFit: "contain" }}
            className="img-fluid ml-5"
            height="300px"
            width="300px"
            style={{ boxShadow: "2px 2px 30px  #131313", borderRadius: "18px" }}
          />
        </div>
      </div>
      <Sponsors />
    </div>
  );
};

export default About;
