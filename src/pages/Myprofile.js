import React, { Component } from "react";
import Homeprop from "./Myprofileprop";

class Myprofile extends Component {
  state = {
    Profiles: [
      {
        username: "username1",
        name: "Name1",
        college: "college1",
        email: "email1",
        Contact: "contact1",
        id: 1,
      },
    ],
  };

  render() {
    return (
      <div className="myprofile">
        <div>
          {this.state.Profiles.map((profile) => {
            return <Homeprop name={profile.name} college={profile.college} />;
          })}
        </div>
      </div>
    );
  }
}

export default Myprofile;
