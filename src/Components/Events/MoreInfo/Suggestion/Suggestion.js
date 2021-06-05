import React from "react";
import "./Suggestion.css";
import ReactLogo from "../../../../Assets/Images/logo.svg";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Suggestion = (props) => {
  return (
    <Slide right cascade>
      <div className="suggestion" onClick={ () => document.documentElement.scrollTop = 0 } >
        <Link to={`/events/${props.suggestions[0]._id}`} className="card">
          <img
            className="card-img-top"
            id="1"
            src={ReactLogo}
            alt="Card cap"
          />
          <div className="card-body" id="1">
            <h3>{props.suggestions[0].name}</h3>
            <p className="card-text" id="2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>

        <Link
          to={`/events/${props.suggestions[1]._id}`}
          className="card"
          href="#main-detail"
        >
          <img className="card-img-top" src={ReactLogo} alt="Card cap" />
          <div className="card-body">
            <h3>{props.suggestions[1].name}</h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>
      </div>
    </Slide>
  );
};

export default Suggestion;
