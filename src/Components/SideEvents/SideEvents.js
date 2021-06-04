// import React, { useEffect } from "react";
import "./SideEvents.css";
//import main from "../../Assets/Images/main_bg.jpg";
import about from "../../Assets/Images/icon4.png";
import data from "../../Assets/Images/icon4.png";
import code from "../../Assets/Images/icon4.png";
// import Sponsors from "./Sponsors/Sponsors";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <div className="section side-events">

      <header className='page-headers'><h1> SIDE - EVENTS </h1></header>

      <div className="row mx-sm-auto eventContent">
        <div className="col-lg-6">
          <Reveal effect="fadeInDown" duration={1000}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
              <div className='btn'> Register </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 text-center  d-none d-lg-block">
          <Fade up duration={1000}>
            <img
              alt='img'
              src={data}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain",
                // boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>

      <div className="row mx-auto eventContent">
        <div className="col-lg-6 order-2">
          <Reveal effect="fadeInDown" duration={1000}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
              <div className='btn'> Register </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <Fade up duration={1000}>
            <img
              alt='img'
              src={about}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain",
                // boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>

      <div className="row mx-auto mb-5 eventContent">
        <div className="col-lg-6">
          <Reveal effect="fadeInDown" duration={1000}>
            <div className="event-info mt-5">
              <h3 className="font-weight-bold display-5">Event Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veritatis error impedit neque harum asperiores provident sunt
                sint quis architecto. Nemo impedit commodi fuga natus sunt
                magnam id quos mollitia.
              </p>
              <div className='btn'> Register </div>
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 text-center d-none d-lg-block">
          <Fade up duration={1000}>
            <img
              alt='img'
              src={code}
              className="img-fluid ml-5"
              height="300px"
              width="300px"
              style={{
                objectFit: "contain",
                // boxShadow: "2px 2px 30px  #131313",
                borderRadius: "18px",
              }}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;