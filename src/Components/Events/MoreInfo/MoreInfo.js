import React,{useEffect, useState} from "react";
import "./MoreInfo.css";
import Slide from "react-reveal/Slide";
//import back from "../../../assets/images/arrow-left.svg";
import back2 from "../../../Assets/images/arrow-left2.png";
import { Zoom } from "@material-ui/core";
import Store from "../../../Store/Store";
import axios from "axios";
import { tech, nonTech } from "../../../Event Details/AllEvents";
import { connect } from "react-redux";
import { NavLink, useParams, Link } from "react-router-dom";
import ReactLogo  from '../../../Assets/images/logo.svg';
import DetailsTab from './DetailTabs/DetailsTabs';
import Suggestion from './Suggestion/Suggestion';
import {addToCart} from '../../../Store/Actions';

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

  return (
    <div className = 'MoreInfo'>

    {loading ? <h1>Loading</h1> : 
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
                onClick={ () => { props.addToCart(details); } }
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

// class MoreInfo extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       allEvents: this.props.eventType === "tech" ? tech : nonTech,
//       currEvent: props.details.No - 1,
//     };
//   }

//   handleToggle = (e) => {
//     this.setState({ currEvent: e.target.id - 1 });
//   };

//   setInitial = () => {
//     if (true) this.setState({ currEvent: this.props.details.No });
//   };

//   handleAddToCart = () => {
//     const details = this.state.allEvents[this.state.currEvent];
//     console.log(details);
//     const event = details.name;
//     const token = Store.getState().userData.token;

//     this.props.addToCart(event);

//     axios
//       .post("http://localhost:5000/addToCart", { token, event })
//       .then((res) => console.log(res.data));
//   };

//   render() {

//     console.log(this.props);
//     return <h1>MoreInfo</h1>
  
//     let suggestion1, suggestion2;

//     if (this.props.details.group === "tech") {
//       suggestion1 = tech[(this.state.currEvent + 1) % 8];
//       suggestion2 = tech[(this.state.currEvent + 2) % 8];
//     } else {
//       suggestion1 = nonTech[(this.state.currEvent + 1) % 8];
//       suggestion2 = nonTech[(this.state.currEvent + 2) % 8];
//     }

//     return (
//       <div className="MoreInfo">
//         <NavLink to='/events'>
//           <div class="back-container">
//             <img src={back2} />
//           </div>
//         </NavLink>

//         <div className="info1" id={this.state.allEvents[this.currEvent]}>
//           <div
//             class="more-info jumbotron text-center py-2 px-5"
//             id="main-detail"
//           >
//             <img
//               className="logo"
//               src={this.state.allEvents[this.state.currEvent].logo}
//             ></img>

//             <h3 class="name">
//               {this.state.allEvents[this.state.currEvent].name}
//             </h3>
//             <span class>
//               {" "}
//               {this.state.allEvents[this.state.currEvent].date}{" "}
//             </span>
//             <p class="lead">
//               This is a simple hero unit, a simple jumbotron-style component for
//               calling extra attention to featured content or information.
//             </p>
//             <ul
//               class="nav nav-tabs justify-content-center border-dark"
//               id="myTab"
//               role="tablist"
//             >
//               <li class="nav-item" role="presentation">
//                 <a
//                   class="nav-link active"
//                   id="home-tab"
//                   data-bs-toggle="tab"
//                   href="#mi-details"
//                   role="tab"
//                   aria-controls="home"
//                   aria-selected="true"
//                 >
//                   Details
//                 </a>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <a
//                   class="nav-link"
//                   id="profile-tab"
//                   data-bs-toggle="tab"
//                   href="#mi-prices"
//                   role="tab"
//                   aria-controls="profile"
//                   aria-selected="false"
//                 >
//                   Prices
//                 </a>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <a
//                   class="nav-link"
//                   id="contact-tab"
//                   data-bs-toggle="tab"
//                   href="#mi-contact"
//                   role="tab"
//                   aria-controls="contact"
//                   aria-selected="false"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <div class="tab-content" id="myTabContent">
//               <div
//                 class="tab-pane fade show active"
//                 id="mi-details"
//                 role="tabpanel"
//                 aria-labelledby="home-tab"
//               >
//                 Complete Details TO be Displayed{this.props.details.info}
//               </div>
//               <div
//                 class="tab-pane fade"
//                 id="mi-prices"
//                 role="tabpanel"
//                 aria-labelledby="profile-tab"
//               >
//                 Team Details and Fees{this.props.details.fees}
//               </div>
//               <div
//                 class="tab-pane fade"
//                 id="mi-contact"
//                 role="tabpanel"
//                 aria-labelledby="contact-tab"
//               >
//                 Contact Details{this.props.details.contact}
//               </div>
//             </div>
//             <hr class="my-1" />
//             {this.props.isLoggedIn ? (
//               <div
//                 onClick={() => {
//                   this.props.addToCart(
//                     this.state.allEvents[this.state.currEvent].name
//                   );
//                 }}
//                 class="btn btn-lg bg-success"
//                 role="button"
//               >
//                 Add To Cart
//               </div>
//             ) : null}
//           </div>
//         </div>

//         <Slide right cascade>
//           <div className="suggestion">
//             <a
//               class="card"
//               id={suggestion1.No}
//               onClick={this.handleToggle}
//               href="#main-detail"
//             >
//               <img
//                 class="card-img-top"
//                 id={suggestion1.No}
//                 src={suggestion1.logo}
//                 alt="Card image cap"
//               />
//               <div class="card-body" id={suggestion1.No}>
//                 <h3 id={suggestion1.No}>{suggestion1.name}</h3>
//                 <p class="card-text" id={suggestion1.No}>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </a>
//             <a
//               class="card"
//               id={suggestion2.No}
//               onClick={this.handleToggle}
//               href="#main-detail"
//             >
//               <img
//                 class="card-img-top"
//                 id={suggestion2.No}
//                 src={suggestion2.logo}
//                 alt="Card image cap"
//               />
//               <div class="card-body" id={suggestion2.No}>
//                 <h3 id={suggestion2.No}>{suggestion2.name}</h3>
//                 <p class="card-text" id={suggestion2.No}>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </a>
//           </div>
//         </Slide>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
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
