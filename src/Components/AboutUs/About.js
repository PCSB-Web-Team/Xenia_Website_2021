// import React, { useEffect } from "react";
import "./About.css";
//import main from "../../Assets/Images/main_bg.jpg";
import about from "../../Assets/Images/hero.jpg";
import data from "../../Assets/Images/datamastro.jpg";
import code from "../../Assets/Images/sudocode.jpg";
// import Sponsors from "./Sponsors/Sponsors";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <div className="section about-us">
      <div className="row text-center hero">
        <div className="col-lg-12 content1 px-sm-5">
          <Fade top duration={1000}>
            <h1 style={{ fontSize: "75px" }}>
              <span className="firstChild">XENIA</span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={600}>
            <p style={{ textAlign: "left", color: "#ffff" }}>
              Xenia is the annual technical festival organised by the PICT CSI
              Student Branch. This is a technical event with the view to find
              out the best of each and everyone and grow their skills. Xenia not
              only aims to develop the coding skills but also develop your
              aptitude skills.
              <br />
              <br />
              Xenia gives you the chance to discover your talents through its
              various events. The events like campus to corporate gives the
              experience for interviews for placement activities. You will
              discover your coding skills with events like Code strike, Ninja
              Coding Contest and Data Cup. This is the unique opportunity for
              the students to think beyond their regular academics and find out
              their best . The pneuma of learning new things has inspired the
              PICT CSI Branch to present Xenia in order to nurture and cultivate
              the talent.
            </p>
          </Fade>
        </div>
      </div>

      <div className="row text-center hero">
        <div className="col-lg-12 content2 px-sm-5">
          <Fade top duration={1000}>
            <h1 style={{ fontSize: "75px" }}>
              <span className="firstChild">PCSB</span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={600}>
            <p style={{ textAlign: "left", color: "#ffff" }}>
              Xenia is the annual technical festival organised by the PICT CSI
              Student Branch. This is a technical event with the view to find
              out the best of each and everyone and grow their skills. Xenia not
              only aims to develop the coding skills but also develop your
              aptitude skills.
              <br />
              <br />
              Xenia gives you the chance to discover your talents through its
              various events. The events like campus to corporate gives the
              experience for interviews for placement activities. You will
              discover your coding skills with events like Code strike, Ninja
              Coding Contest and Data Cup. This is the unique opportunity for
              the students to think beyond their regular academics and find out
              their best . The pneuma of learning new things has inspired the
              PICT CSI Branch to present Xenia in order to nurture and cultivate
              the talent.
            </p>
          </Fade>
        </div>
      </div>

      <div className="row mx-sm-auto eventContent">
        <div className="col-lg-6">
          <Reveal effect="fadeInDown" duration={1500}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 text-center  d-none d-lg-block">
          <Fade up duration={1500}>
            <img
              alt='img'
              src={data}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain",
                boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>

      <div className="row mx-auto eventContent">
        <div className="col-lg-6 order-2">
          <Reveal effect="fadeInDown" duration={1500}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <Fade up duration={1500}>
            <img
              alt='img'
              src={about}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain" ,
                boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>

      <div className="row mx-auto mb-5 eventContent">
        <div className="col-lg-6">
          <Reveal effect="fadeInDown" duration={1500}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 text-center d-none d-lg-block">
          <Fade up duration={1500}>
            <img
              alt='img'
              src={code}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain",
                boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>
      {/* <Sponsors /> */}
    </div>
  );
};

export default About;
