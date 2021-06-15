import React, { useEffect, useState } from "react";
import "./MoreInfo.css";
import back2 from "../../../Assets/Images/arrow-left2.png";
import { connect } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
// import ReactLogo from "../../../Assets/Images/logo.svg";
import DetailsTab from "./DetailTabs/DetailsTabs";
import Suggestion from "./Suggestion/Suggestion";
import { openLogin, addToRegistered } from "../../../Store/Actions";
import Loader from "../../Loader/Loader";
import { setRegisteredEvents, getEventDetails } from "../../Config/api/User";
import { addToCartFail, registrationFail, registrationSuccess } from "../../Notifications/Notification";
import Modal from "./Modal/Modal";
import Themebutton from "../../Button/button";

const MoreInfo = (props) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  const checkRegistered = () => {

    if(!props.registeredEvents) {
      history.push('/events');
      return;
    }

    setRegistered(false);
    
    props.registeredEvents.forEach((eve) => {
      if (eve._id === id) setRegistered(true);
    });
    
  };

  useEffect(() => {
    fetchData();
    checkRegistered();
  }, [id]);

  const fetchData = async (props) => {
    try {
      const response = await getEventDetails(id);

      // console.log(response.data);

      if (response.data.ok) {
        await setDetails(() => response.data.data);
        // console.log(details);
      }
    } catch (error) {
      // console.log(error);
      history.push("/events");
    }

    setLoading(false);
  };

  const openModal = () => {
    setShowModal(true);
    setRegisterLoading(false);
  };
  const closeModal = () => {
    setShowModal(false);
    setRegisterLoading(false);
  };

  const handleRegister = async () => {
    setRegisterLoading(true);

    try{

    if (props.isLoggedIn) {
      // if(details.additionalInfo.required){
      // showPopUp
      // fire modal and recieve the details object
      // }

      const res = await setRegisteredEvents(id, props.token);

      if (res.data.ok) {
        props.addToRegistered(res.data.data.event);
        // addToCartSuccess();
        setRegistered(true);
        registrationSuccess();
        setRegisterLoading(false);
        setShowModal(false);
      } else {
        closeModal();
        // registrationsClosed();
      }
    } else {
      addToCartFail();
    }
  }
  catch{
    registrationFail();
  }

  };

  return (
    <div className="MoreInfo">
      {loading ? (
        <Loader />
      ) : (
        <div className="more-info">
          <Link to="/events">
            <div className="back-container">
              <img src={back2} alt="go back" />
            </div>
          </Link>

          <div className="jumbotron text-center py-2" id="main-detail">
            <img className="logo" src={details.logo} alt="logo"></img>

            <h3 className="name">{details.name}</h3>

            {/* <h5 className='date'> {details.date.substring(0, 10)} </h5> */}
            {/* <div className='date'> {details.dateDescription} </div> */}
            
            {/* { details.dateDescription.split('&').map( (line,i) => <div className='date'> Round {' ', i+1} - {line} </div>) }          */}
            
            <h5 className='platform'> Platform </h5>
            <div className='platform-details'> {details.platform.split('&').map( eve => <div> {eve} </div> )} </div>

            <p className="lead">{details.details}</p>

            <hr className="my-1" />

            {!registered ? (
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                <Themebutton
                  onClick={props.isLoggedIn ? openModal : props.openLogin}
                  value="Register Now"
                />
              </div>
            ) : (
              <span className="already-registered">Registered</span>
            )}

            <DetailsTab details={details} />
          </div>

          <Suggestion suggestions={details.suggestions}></Suggestion>
        </div>
      )}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        openModal={openModal}
        load={registerLoading}
        handleRegister={handleRegister}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isLoggedIn: state.login,
    registeredEvents: state.userData.registeredEvents,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    openLogin: () => {
      dispatch(openLogin());
    },
    addToRegistered: (details) => {
      dispatch(addToRegistered(details));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(MoreInfo);
