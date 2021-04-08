import React from "react";
import "./Suggestion.css";
import ReactLogo from "../../../../Assets/Images/logo.svg";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Suggestion = (props) => {
  return (
    <Slide right cascade>
      <div className="suggestion">
        <Link to={`/events/${props.suggestions[0]._id}`} class="card">
          <img
            class="card-img-top"
            id="1"
            src={ReactLogo}
            alt="Card image cap"
          />
          <div class="card-body" id="1">
            <h3>{props.suggestions[0].name}</h3>
            <p class="card-text" id="2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>

        <Link
          to={`/events/${props.suggestions[1]._id}`}
          class="card"
          href="#main-detail"
        >
          <img class="card-img-top" src={ReactLogo} alt="Card image cap" />
          <div class="card-body">
            <h3>{props.suggestions[1].name}</h3>
            <p class="card-text">
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
