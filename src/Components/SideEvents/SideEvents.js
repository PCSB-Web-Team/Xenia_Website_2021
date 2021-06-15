// import React, { useEffect } from "react";
import "./SideEvents.css";
// //import main from "../../Assets/Images/main_bg.jpg";
// import about from "../../Assets/Images/logo.svg";
// import data from "../../Assets/Images/logo.svg";
// import code from "../../Assets/Images/logo.svg";
// import Sponsors from "./Sponsors/Sponsors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import ThemeButtton from "../Button/button";
import { getBuildUpEvents } from '../Config/api/User';
import { useState, useEffect } from "react";
import Loader from '../Loader/Loader';
import { failedToLoad, registrationFail, registrationSuccess, anErrorOccured } from "../Notifications/Notification";
import Modal from './Modal/Modal';
import { registerBuildUpEvent } from '../Config/api/User';
import { setRegisteredBuildUpEvents, openLogin } from '../../Store/Actions';
import { connect } from 'react-redux';
// import { propTypes } from "react-bootstrap/esm/Image";
import MoreInfo from './MoreInfo/Modal';
import { useHistory } from "react-router-dom";

const SideEvents = (props) => {

  const [buildUpEvents, setBuildUpEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [registerLoading, setRegisterLoading] = useState(false)

  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState('');

  let history = useHistory();

  // const [registered, setRegistered] = useState([false, false, false])

  useEffect(() => {
    fetchData();
  }, [])

  const checkRegistered = (id) => {

    let found = false;
    const list = props.registeredBuildUpEvents;

    if (!list) {
      history.push('/');
      return;
    }

    list.forEach(eve => {
      if (eve._id == id) {
        found = true;
        return;
      }
    }
    )

    return found;
  }

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

  const handleRegister = async (id) => {

    setRegisterLoading(true);

    try {

      const res = await registerBuildUpEvent(id, props.token);

      if (res.data.ok) {
        props.setRegisterBuildUpEvent(res.data.data.event)
        registrationSuccess();
        setRegisterLoading(false);
      }

      else {
        registrationFail();
      }
    }

    catch (error) {
      anErrorOccured();
      console.log(error)
    }
    setRegisterLoading(false);
    closeModal();
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const showMoreInfo = (info) => {
    setInfo(info);
    setShowInfo(true);
  }

  return (
    loading
      ?
      <Loader />
      : <div className="section side-events">

        <header className="page-headers">
          <h1 className="header-name"> Build Up Events </h1>
        </header>

        {buildUpEvents.map((eve) => {

          return (

            <div className="row mx-sm-auto eventContent py-0 d-flex flex-row justify-content-center align-items-center my-5" key={eve._id}>

              <div className="col-lg-6 order-lg-12 text-center  d-lg-block">
                <Fade up duration={1000}>
                  <img
                    alt="img"
                    src={eve.logo}
                    className="img-fluid"
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

              <div className="col-lg-6 order-lg-1">
                <Reveal effect="fadeInDown" duration={1000}>

                  <div className="event-info">
                    <h3 className="font-weight-bold display-5">{eve.name}</h3>
                    <p>
                      {eve.details}
                    </p>
                    <div className='build-up-moreinfo' onClick={() => showMoreInfo(eve)} > MoreInfo {'>>>'} </div>
                    {checkRegistered(eve._id) ? <div className='build-up-registered'> Registered </div> : <ThemeButtton onClick={props.login ? () => { setSelectedId(eve._id); setShowModal(true) } : props.openLogin} value="Register" />}
                  </div>
                
                </Reveal>
              </div>



            </div>

          )
        })}

        <Modal load={registerLoading} closeModal={closeModal} showModal={showModal} handleRegister={() => handleRegister(selectedId)} />
        <MoreInfo info={info} showInfo={showInfo} closeInfo={() => setShowInfo(false)} />

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

const mapStatesToProps = state => {
  return {
    registeredBuildUpEvents: state.userData.registeredBuildUpEvents,
    token: state.token,
    login: state.login,
  }
}

const mapActionsToProps = dispatch => {
  return {
    setRegisterBuildUpEvent: event => dispatch(setRegisteredBuildUpEvents(event)),
    openLogin: () => dispatch(openLogin()),
  }
}

export default connect(mapStatesToProps, mapActionsToProps)(SideEvents);
