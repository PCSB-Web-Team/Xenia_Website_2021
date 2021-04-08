import React, { useEffect, useState } from "react";
import "./MoreInfo.css";
import back2 from "../../../Assets/Images/arrow-left2.png";
import axios from "axios";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ReactLogo from "../../../Assets/Images/logo.svg";
import DetailsTab from "./DetailTabs/DetailsTabs";
import Suggestion from "./Suggestion/Suggestion";
import { addToCart, openLogin } from "../../../Store/Actions";
import Loader from "../../Loader/Loader";
import { addToCartBackend } from "../../Config/api/User";
import { addToCartSuccess, addToCartFail } from '../../Notifications/Notification';

const MoreInfo = (props) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [insideCart, setInsideCart] = useState(false);

  let { id } = useParams();

  const checkInsideCart = (eveId) => {
    setInsideCart(false);
    props.cart.forEach((eve) => {
      if (eve._id === id) setInsideCart(true);
    });
  };

  useEffect(() => {
    fetchData();
    checkInsideCart();
  }, [id, props.cart]);

  const fetchData = async () => {

    try {
      const response = await axios.get(
        `https://xenia-backend.herokuapp.com/api/events/${id}`
      );

      if (response.data.ok) {
        setDetails(response.data.data);
      }
    } catch (error) {}

    setLoading(false);
  };

  const handleAddToCart = async () => {
    if (props.isLoggedIn) {
      const res = await addToCartBackend({ eventId: id }, props.token);
      if (res.data.ok) {
        props.addToCart(details);
        addToCartSuccess();
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
            <span className> {details.date} </span>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>

            <hr className="my-1" />
            {!insideCart ? (
              <div
                onClick={ props.isLoggedIn ? handleAddToCart : props.openLogin}
                className="btn btn-lg bg-success"
                role="button"
              >
                Add To Cart
              </div>
            ) 
            : <span style={{color: 'green', fontWeight: 'bold', fontSize: '20px'}}>Added to Your Cart</span> 
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
    cart: state.userData.cart,
    isLoggedIn: state.login,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addToCart: (eventDetails) => {
      dispatch(addToCart(eventDetails));
    },
    openLogin: () => {
      dispatch(openLogin());
    }
  };
};

export default connect(mapStateToProps, mapActionToProps)(MoreInfo);
