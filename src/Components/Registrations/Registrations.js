import React, { Component } from "react";
import "./Registrations.css";
import RegOpen from "./RegOpen/RegOpen";
import EventCols from "./EventCols/EventCols";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Zoom from "react-reveal/Zoom";

class Registrations extends Component {
  state = {
    noofdays: 3,
    days: {
      day1: {
        date: "14 March",
        noofevents: 6,
        events: ["event1", "event2", "event3", "event4", "event5", "event6"],
      },
      day2: {
        date: "15 March",
        noofevents: 3,
        events: ["event1", "event2", "event3"],
      },
      day3: {
        date: "16 March",
        noofevents: 4,
        events: ["event1", "event2", "event3", "event4"],
      },
    },
  };

  render() {
    return (
      <div>
        <Box
          className="Registrations"
          alignItems="center"
          justifyContent="center"
        >
          <Zoom out>
            <Box md={12} lg={4} sm={12} xs={12} m={10} className="RegopenCont">
              <RegOpen />
            </Box>
          </Zoom>
          {/* <Slide left cascade> */}
          <Grid container spacing={2} lg={6} md={12} sm={12} xs={12}>
            <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
              <Zoom>
                <EventCols
                  date={this.state.days.day1.date}
                  eventNames={this.state.days.day1.events}
                  eventNo={this.state.days.day1.noofevents}
                />
              </Zoom>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
              <Zoom>
                <EventCols
                  date={this.state.days.day2.date}
                  eventNames={this.state.days.day2.events}
                  eventNo={this.state.days.day2.noofevents}
                />
              </Zoom>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
              <Zoom>
                <EventCols
                  date={this.state.days.day3.date}
                  eventNames={this.state.days.day3.events}
                  eventNo={this.state.days.day3.noofevents}
                />
              </Zoom>
            </Grid>
          </Grid>
          {/* </Slide> */}
        </Box>

        {/* <Box>
          <div className="bgcolr">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Box> */}
      </div>
    );
  }
}

export default Registrations;
