// import React, { useEffect } from "react";
import "./SideEvents.css";
//import main from "../../Assets/Images/main_bg.jpg";
import about from "../../Assets/Images/logo.svg";
import data from "../../Assets/Images/logo.svg";
import code from "../../Assets/Images/logo.svg";
// import Sponsors from "./Sponsors/Sponsors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
// import ThemeButtton from "../Button/button";
import { getBuildUpEvents } from '../Config/api/User';
import { useState, useEffect } from "react";
import Loader from '../Loader/Loader';
import { failedToLoad } from "../Notifications/Notification";


const About = () => {

  const [buildUpEvents, setBuildUpEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await getBuildUpEvents();

      if (res.data.ok) {
        setBuildUpEvents(res.data.data);
        setLoading(false);
      }
      else {
        console.log('Failed To load');
      }
    }
    catch (error) {
      failedToLoad();
    }
  }

  return (
    loading
      ?
      <Loader />
      : <div className="section side-events">
        <header className="page-headers">
          <h1 className="header-name"> Build Up Events </h1>
        </header>

        {buildUpEvents.map((eve, i) => {
          return (

            <div className="row mx-sm-auto eventContent py-0 d-flex flex-row justify-content-center align-items-center my-5" key={i}>

              <div className="col-lg-6">
                <Reveal effect="fadeInDown" duration={1000}>
                  <div className="event-info">
                    <h3 className="font-weight-bold display-5">{eve.name}</h3>
                    <p>
                      {eve.details}
                    </p>
                    {/* <ThemeButtton value="Register" /> */}
                  </div>
                </Reveal>
              </div>

              <div className="col-lg-6 text-center  d-lg-block">
                <Fade up duration={1000}>
                  <img
                    alt="img"
                    src={eve.logo}
<<<<<<< HEAD
                    className="img-fluid ml-5"
=======
                    className="img-fluid"
>>>>>>> origin/amit
                    height="220px"
                    width="220px"
                    style={{
                      objectFit: "contain",
                      // boxShadow: "2px 2px 30px  #131313",
                      borderRadius: "18px",
                    }}
                  />
                </Fade>
              </div>
            </div>

          )
        })}
        {/* 
      <div className="row mx-auto eventContent py-0">
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
            </div>
          </Reveal>
        </div>

        <div className="col-lg-6 d-none d-lg-block">
          <Fade up duration={1000}>
            <img
              alt="img"
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

      <div className="row mx-auto mb-5 eventContent py-0">
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
            </div>
          </Reveal>
        </div>
        <div className="col-lg-6 text-center d-none d-lg-block">
          <Fade up duration={1000}>
            <img
              alt="img"
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
      </div> */}

      </div>
  );
};

export default About;
