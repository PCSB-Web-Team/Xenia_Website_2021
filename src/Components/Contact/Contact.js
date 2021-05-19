import React from "react";
import "./Contact.css";
import FAQ from "./FAQ/FAQ";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contactUs">
      <div className="contactForm">
        <h1>Send us a message</h1>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            id="nameInputId"
            className="contactFill"
          ></input>
          <input
            type="text"
            placeholder="Email"
            id="emailInputId"
            className="contactFill"
          ></input>
          <input
            type="text"
            placeholder="Phone"
            id="phoneInputId"
            className="contactFill"
          ></input>
          <textarea
            placeholder="Message"
            id="messageInputId"
            className="contactFill"
          ></textarea>
          <button id="contactSubmit">SUBMIT</button>
        </form>
      </div>
      <div className="contactInfo">
        <h1>Contact info</h1>
        <div className="address">
          <h3>Where to find us</h3>
          <p>Survey no. 27,</p>
          <p>Near Trimurti Chowk,</p>
          <p>Bharati Vidyapeeth Campus,</p>
          <p>Dhankawadi,Pune-411043</p>
        </div>
        <div className="phoneAndMail">
          <h3>Phone and Mail</h3>
          <p>
            Phone <span>9999999999</span>
          </p>
          <p>
            Mail <span>abc@mail.com</span>
          </p>
        </div>
        <div className="socialMedia">
          <h3>Social Links</h3>
          <p class="text-light">
            <a href="/">
              {" "}
              <i
                className="fa fa-instagram"
                ariaHidden="true"
              ></i>
            </a>
            <a href="/">
              <i
                class="fa fa-facebook-official"
                ariaHidden="true"
              ></i>
            </a>
            <a href="/">
              <i
                class="fa fa-linkedin"
                ariaHidden="true"
              ></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
