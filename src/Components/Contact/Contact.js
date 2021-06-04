import React, { useState } from "react";
import "./Contact.css";
import FAQ from "./FAQ/FAQ";
import Fade from "react-reveal/Fade";
import { contactus } from "../Config/api/User";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    const data = { name, phone, email, message };
    const res = await contactus(data);
    console.log(res.data);
  };

  return (
    <div className="contactUs">
      <div className="contactForm">
        <h1>Send us a message</h1>
        <form onSubmit={Submit}>
          <input
            type="text"
            placeholder="Your Name"
            id="nameInputId"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contactFill"
          ></input>
          <input
            type="email"
            placeholder="Email"
            id="emailInputId"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contactFill"
          ></input>
          <input
            type="number"
            min="7000000000"
            max="9999999999"
            placeholder="Phone"
            id="phoneInputId"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="contactFill"
          ></input>
          <textarea
            placeholder="Message"
            id="messageInputId"
            className="contactFill"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            <i className="fa fa-phone"></i>{" "}
            <span style={{ marginLeft: "5px" }}> 9999999999</span>
          </p>
          <p>
            <i className="fa fa-envelope"></i>{" "}
            <span style={{ marginLeft: "5px" }}> abc@mail.com</span>
          </p>
        </div>
        <div className="socialMedia">
          <h3>Social Links</h3>
          <p class="text-light">
            <a href="/">
              {" "}
              <i className="fa fa-instagram" ariaHidden="true"></i>
            </a>
            <a href="/">
              <i class="fa fa-facebook-official" ariaHidden="true"></i>
            </a>
            <a href="/">
              <i class="fa fa-linkedin" ariaHidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
