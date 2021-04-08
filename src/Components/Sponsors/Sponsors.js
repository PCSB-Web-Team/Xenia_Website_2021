import React from "react";
// import Logo from "../../Assets/Images/logo.svg";
import "./Sponsors.css";
import Amazon from "../../Assets/Images/SponsorImages/Amazon.jpg";
import Codechef from "../../Assets/Images/SponsorImages/Codechef.jpg";
import Facebook from "../../Assets/Images/SponsorImages/Facebook.jpg";
import Google from "../../Assets/Images/SponsorImages/Google.jpg";
import Lg from "../../Assets/Images/SponsorImages/Lg.jpg";
import Microsoft from "../../Assets/Images/SponsorImages/Microsoft.jpg";
import Netflix from "../../Assets/Images/SponsorImages/Netflix.jpg";
// import Tata from "../../Assets/Images/SponsorImages/Tata.jpg";
// import Vodafone from "../../Assets/Images/SponsorImages/Vodafone.jpg";

const Sponsors = () => {
  return (
    <div className="maincontainer">
      <h1 className="headingmain">Sponsors</h1>

      <div className="mainboxtitle">
        <div className="mainboxItemtitle">
          <img
            className="mainboxImagetitle"
            src={Netflix}
            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
          ></img>
        </div>
      </div>
      <div className="mainbox">
        <div className="mainboxItem">
          <img
            className="mainboxImage1"
            src={Amazon}
            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
          ></img>
        </div>

        <div className="mainboxItem">
          <img
            className="mainboxImage2"
            src={Codechef}
            alt="sunset behind San Francisco city skyline"
          ></img>
        </div>

        <div className="mainboxItem">
          <img
            className="mainboxImage3"
            src={Facebook}
            alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
          ></img>
        </div>

        <div className="mainboxItem">
          <img
            className="mainboxImage4"
            src={Google}
            alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
          ></img>
        </div>

        <div className="mainboxItem">
          <img
            className="mainboxImage5"
            src={Lg}
            alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
          ></img>
        </div>

        <div className="mainboxItem">
          <img
            className="mainboxImage6"
            src={Microsoft}
            alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
