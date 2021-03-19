import React,{useEffect, useState} from "react";
import "./MoreInfo.css";
import back2 from "../../../Assets/Images/arrow-left2.png";
import axios from "axios";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ReactLogo  from '../../../Assets/Images/logo.svg';
import DetailsTab from './DetailTabs/DetailsTabs';
import Suggestion from './Suggestion/Suggestion';
import {addToCart} from '../../../Store/Actions';
import Loader from '../../Loader/Loader';
import {addToCartBackend} from '../../Config/api/User';

const MoreInfo = (props) => {

  const [details,setDetails] = useState(null);
  const [loading,setLoading] = useState(true);

  let {id} = useParams();

  useEffect(() => {fetchData()}, [id]);

  const fetchData = async () => {
    try {

      const response = await axios.get(`https://xenia-backend.herokuapp.com/api/events/${id}`);

      if(response.data.ok) {
        setDetails(response.data.data)
      }

    } catch (error) {
      
    }

    setLoading(false);
  }

  const handleAddToCart = async () => {

    const res = await addToCartBackend({eventId: id}, props.token);

    props.addToCart(details);

  }

  return (
    <div className = 'MoreInfo'>

    {loading ? <Loader/> : 
      <div className="info1">

        <Link to='/events'>
          <div class="back-container">
            <img src={back2} />
          </div>
        </Link>

          <div
            class="more-info jumbotron text-center py-2"
            id="main-detail"
          >
            <img
              className="logo"
              src={ReactLogo}
            ></img>

            <h3 class="name">
              {details.name}
            </h3>
            <span class>
              {" "}
              {details.date}{" "}
            </span>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            
            <hr class="my-1" />
            {props.isLoggedIn ? (
              <div
                onClick={handleAddToCart}
                class="btn btn-lg bg-success"
                role="button"
              >
                Add To Cart
              </div>
            ) : null} 

          <DetailsTab details={details}/>

          </div>
        
          <Suggestion suggestions={details.suggestions}></Suggestion>
        
        </div>
    }
    </div>
     );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    cart: state.cart,
    isLoggedIn: state.login,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addToCart: (eventDetails) => {dispatch(addToCart(eventDetails))}
  };
};

export default connect(mapStateToProps, mapActionToProps)(MoreInfo);
