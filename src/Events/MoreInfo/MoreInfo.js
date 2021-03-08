import React from "react";
import "./MoreInfo.css";
import Slide from "react-reveal/Slide";
import back from "./arrow-left.svg";
import back2 from "./arrow-left2.png";
import { Zoom } from "@material-ui/core";
import Store from "../../Store/Store";
import axios from "axios";
import {tech,nonTech} from '../../Event Details/AllEvents';

class MoreInfo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      addToCart: Store.getState().login,
      user: Store.getState().userData,
      currEvent: props.details.No-1 
    };
  }

  handleToggle = (e) => {                     //setting the new Event
    console.log(e.target);
    this.setState({currEvent: e.target.id-1})
  }

  setInitial = () => {
    if(true) this.setState({currEvent: this.props.details.No})
  }

  handleAddToCart = () => {
    const { details } = this.props;
    const event = details.name;
    const token = Store.getState().userData.token;

    Store.dispatch({
      type: 'addtocart',
      payload: {
        event: event
      }
    })
    
    axios
    .post("http://localhost:5000/addToCart", { token, event })
    .then((res) => console.log(res.data));
  
  };

  render() {
    
    let e1,e2;

    if(this.props.details.group==='tech'){
      e1=tech[(this.state.currEvent+1)%8]
      e2=tech[(this.state.currEvent+2)%8]
    }
    else{
      e1=nonTech[(this.state.currEvent+1)%8]
      e2=nonTech[(this.state.currEvent+2)%8]
    }
    

    let allEvents=(this.props.eventType==='tech' ? tech : nonTech);

    let techList = tech.map((eve) => {return(
      <div className='toggle-button' id={eve.No} onClick={this.handleToggle}>{eve.name}</div>
    )})
    
    let nonTechList = nonTech.map((eve) => {return(
      <div className='toggle-button' id={eve.No} onClick={this.handleToggle}>{eve.name}</div>  
    )})

    return (
      <div className="MoreInfo">

        <div class="back-container" onClick={this.props.close}>
            <img src={back2} />
        </div>

        <div className="info1" id={allEvents[this.currEvent]}>

          <div class="more-info jumbotron text-center py-2 px-5" id="main-detail">

            <img className='logo' src={allEvents[this.state.currEvent].logo}></img>

            <h3 class="name">{allEvents[this.state.currEvent].name}</h3>
            <span class> {allEvents[this.state.currEvent].date} </span>
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
            <hr class="my-1" />
            {this.props.logedin ? (
              <a
                onClick={this.handleAddToCart}
                class="btn btn-lg bg-success"
                href="#"
                role="button"
              >
                Add To Cart
              </a>
            ) : 
            <a
                class="btn btn-lg bg-dark disable"
                href="#"
                role="button"
              >
                Add To Cart
              </a>
            }
          </div>


        </div>

      <Slide right cascade>
        <div className='suggestion' >
          <a class="card" id={e1.No} onClick={this.handleToggle} href='#main-detail'>
            <img class="card-img-top"  id={e1.No}  src={e1.logo} alt="Card image cap"/>
            <div class="card-body" id={e1.No} >
              <h3  id={e1.No}  >{e1.name}</h3>
              <p class="card-text"  id={e1.No} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
          <a class="card" id={e2.No} onClick={this.handleToggle} href='#main-detail'>
            <img class="card-img-top" id={e2.No} src={e2.logo} alt="Card image cap"/>
            <div class="card-body" id={e2.No}>
              <h3 id={e2.No}>{e2.name}</h3>
              <p class="card-text" id={e2.No}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        </div>
      </Slide>

        
        <div className='toggle-list'> {this.props.eventType === 'tech' ? techList : nonTechList}</div>

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
