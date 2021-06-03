import React, { useEffect, useState } from "react";
import "./MoreInfo.css";
import back2 from "../../../Assets/Images/arrow-left2.png";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ReactLogo from "../../../Assets/Images/logo.svg";
import DetailsTab from "./DetailTabs/DetailsTabs";
import Suggestion from "./Suggestion/Suggestion";
import { openLogin } from "../../../Store/Actions";
import Loader from "../../Loader/Loader";
import { addToCartBackend, setRegisteredEvents, getEventDetails } from "../../Config/api/User";
import { addToCartSuccess, addToCartFail } from '../../Notifications/Notification';

const MoreInfo = (props) => {

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);

  let { id } = useParams();

  const checkRegistered = () => {
    setRegistered(false);
    props.registeredEvents.forEach(eve => {
      console.log(eve.event._id, id)
      if (eve.event._id === id) setRegistered(true);
    });
  };

  useEffect(() => {
    fetchData();
    checkRegistered();
  }, [id]);

  const fetchData = async () => {
    
    try {
      const response = await getEventDetails(id);
      if (response.data.ok) {
        setDetails(response.data.data);
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false);
  };

  const handleRegister = async () => {

    if (props.isLoggedIn) {

      // if(details.additionalInfo.required){
        // showPopUp
        // fire modal and recieve the details object
      // }

      const res = await addToCartBackend({ eventId: id }, props.token);
      if (res.data.ok) {
        props.addToCart(details);
        addToCartSuccess();
        setRegistered(true);
      }
    } else {
      addToCartFail();
    }
  };

  return (
    <div className="MoreInfo">
      {loading ? (
        <Loader />
      ) : (
        <div className="info1">

          <Link to="/events">
            <div className="back-container">
              <img src={back2} alt='go back' />
            </div>
          </Link>

          <div className="more-info jumbotron text-center py-2" id="main-detail">

            <img className="logo" src={ReactLogo} alt='logo'></img>

            <h3 className="name">{details.name}</h3>
            <span className> {details.date.split('T')[0]} </span>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>

            <hr className="my-1" />

            {!registered ? (
              <div
                onClick={props.isLoggedIn ? handleRegister : props.openLogin}
                className="btn btn-lg bg-success"
                role="button"
              >
                Register Now
              </div>
            )
              : <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>Registered</span>
            }

            <DetailsTab details={details} />
          </div>

          <Suggestion suggestions={details.suggestions}></Suggestion>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isLoggedIn: state.login,
    registeredEvents: state.userData.registeredEvents
  };
};

const mapActionToProps = (dispatch) => {
  return {
    openLogin: () => {
      dispatch(openLogin());
    }
  };
};

export default connect(mapStateToProps, mapActionToProps)(MoreInfo);
