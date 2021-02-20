import React from "react";
import "./MoreInfo.css";
import Slide from "react-reveal/Slide";
import back from "./arrow-left.svg";
import back2 from "./arrow-left2.png";
import { Zoom } from "@material-ui/core";
import Zzoom from "react-reveal/Zoom";
import Store from "../Store/Store";
import axios from "axios";

class MoreInfo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      addToCart: Store.getState().login,
      user: Store.getState().userDate,
    };
  }

  handleAddToCart = () => {
    const { details } = this.props;
    const event = details.name;
    const token = this.state.user.token;
    console.log(event, token);
    // axios
    //   .post("http://localhost:5000/addToCart", { token, event })
    //   .then((res) => console.log(res.data));
  };

  render() {
    console.log(this.props);
    return (
      <div className="MoreInfo">
        <div className="type1">
          <div class="more-info jumbotron text-center py-2 px-5" id="e5">
            <img class="logo" src={this.props.details.logo}></img>
            <h3 class="name">{this.props.details.name}</h3>
            <span class> {this.props.details.date} </span>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <ul
              class="nav nav-tabs justify-content-center border-dark"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#mi-details"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Details
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#mi-prices"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Prices
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  href="#mi-contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="mi-details"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                Complete Details TO be Displayed{this.props.details.info}
              </div>
              <div
                class="tab-pane fade"
                id="mi-prices"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Team Details and Fees{this.props.details.fees}
              </div>
              <div
                class="tab-pane fade"
                id="mi-contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                Contact Details{this.props.details.contact}
              </div>
            </div>
            <hr class="my-4" />
            {this.props.logedin ? (
              <a
                onClick={this.handleAddToCart}
                class="btn btn-lg bg-success"
                href="#"
                role="button"
              >
                Add To Cart
              </a>
            ) : null}
            <div class="back-container" onClick={this.props.close}>
              <img src={back2} />
            </div>
          </div>
        </div>
        {/*
              <div className='type2'>
                <div class="more-info jumbotron text-center py-2 px-5" id='e5'>
                  
                <div class='back-container' onClick={this.props.close}><img src={back2}/></div>
                  <img class='logo' src={this.props.details.logo}></img>
                <h1 class="display-4">{this.props.details.name}</h1>
                <span class> {this.props.details.date} </span>
                <hr></hr>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr></hr>
              </div>
                
                <Slide right>
                <div className='type2-nav'>
                  <ul class="nav nav-tabs justify-content-center border-dark" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#mi-details2" role="tab" aria-controls="home" aria-selected="true">Details</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#mi-prices2" role="tab" aria-controls="profile" aria-selected="false">Prices</a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#mi-contact2" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                      </li>
                    </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="mi-details2" role="tabpanel" aria-labelledby="home-tab">Complete Details TO be Displayed {this.props.details.info}</div>
                        <div class="tab-pane fade" id="mi-prices2" role="tabpanel" aria-labelledby="profile-tab">Team Details and Fees{this.props.details.fees}</div>
                        <div class="tab-pane fade" id="mi-contact2" role="tabpanel" aria-labelledby="contact-tab">Contact Details{this.props.details.contact}</div>
                      </div>
                        <a onClick={this.props.handleRegister} class="btn btn-lg bg-success" href="#" role="button">Register</a>
                  </div>
                </Slide>
              </div>
              */}
      </div>
    );
  }
}

export default MoreInfo;
