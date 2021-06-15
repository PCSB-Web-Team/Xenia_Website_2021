import React, { Component } from "react";
import "./Registrations.css";
import Themebutton from '../Button/button';
// import RegOpen from "./RegOpen/RegOpen";
// import EventCols from "./EventCols/EventCols";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import Zoom from "react-reveal/Zoom";
import SchedulePDF from '../../Assets/PCSB Xenia 2021 All Events Rulebook.pdf';

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
      <>
        <header className="page-headers">
          <h1 className="header-name"> SCHEDULE </h1>
        </header>

        <div className="schedule-container">
          <div className="schedule-left">
            <div className="schedule-left-inner">
              <h1>XENIA'21</h1>
              <h1>SCHEDULE</h1>
            </div>
          </div>
          <div className="schedule-right">
            <h1>2021 June</h1>
            <div className="main-schedule">
              {/* <div className="schedule-date">
                <h1>17 Thu</h1>
                <hr></hr>
                <div className="date-content">
                    <h2>You're Hired! Ultimate Guide to Placements</h2>
                    <p>18:00 to 20:00</p>
                </div>
              </div> */}
              <div className="schedule-date">
                <h1>18 Fri</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Dream Team</h2>
                  <p>10:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>Technical Workshop 1</h2>
                  <p>18:00 to 20:00</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>19 Sat</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Dream Team</h2>
                  <p>10:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>Technical Workshop 2</h2>
                  <p>18:00 to 20:00</p>
                </div>
                <div className="date-content">
                  <h2>Shutter Speed - Day 1</h2>
                  <p>Full Day</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>20 Sun</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Dream Team</h2>
                  <p>10:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>Technical Workshop 3</h2>
                  <p>18:00 to 20:00</p>
                </div>
                <div className="date-content">
                  <h2>Shutter Speed - Day 2</h2>
                  <p>Full Day</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>21 Mon</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Dream Team</h2>
                  <p>10:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>22 Tue</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Dream Team</h2>
                  <p>10:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Code Strike: Wild Card (Exclusively for FEs)</h2>
                  <p>19:00 to 21:00</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>23 Wed</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Gift of Gab: Wild Card (A Tale to Tell)</h2>
                  <p>19:00 to 21:00</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>24 Thu</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Game Zone</h2>
                  <p>18:00 onwards</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>25 Fri</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Design Maestro (Round 1)</h2>
                  <p>8:00 to 12:00</p>
                </div>
                <div className="date-content">
                  <h2>Design Maestro (Round 2)</h2>
                  <p>25th 16:00 to 26th 19:00</p>
                </div>
                <div className="date-content">
                  <h2>Shark Tank (Registration Closed)</h2>
                  <p>12:00</p>
                </div>
                <div className="date-content">
                  <h2>Couch Potato (Round 1)</h2>
                  <p>12:15 to 13:00</p>
                </div>
                <div className="date-content">
                  <h2>Circuitron (SE + TE/BE) - (Round 1)</h2>
                  <p>13:15 to 14:00</p>
                </div>
                <div className="date-content">
                  <h2>Inauguration Ceremony</h2>
                  <p>16:00 to 17:30</p>
                </div>
                <div className="date-content">
                  <h2>Gift of Gab (Round 1)</h2>
                  <p>17:30 to 18:30</p>
                </div>
                <div className="date-content">
                  <h2>Campus to Corporate (Round 1)</h2>
                  <p>18:30 to 19:00</p>
                </div>
                <div className="date-content">
                  <h2>Minecraft (Round 1)</h2>
                  <p>19:00 to 21:00</p>
                </div>
                <div className="date-content">
                  <h2>Ninja Coding (Round 1)</h2>
                  <p>21:00 to 22:00</p>
                </div>
                <div className="date-content">
                  <h2>Xe-Natus (Round 1)</h2>
                  <p>21:00 to 22:00</p>
                </div>
                <div className="date-content">
                  <h2>Xe-Natus (Round 2)</h2>
                  <p>22:30 to 23:00</p>
                </div>
                <div className="date-content">
                  <h2>Game Zone</h2>
                  <p>18:00 onwards</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>26 Sat</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Xenathon (15 hours Mini-Hackathon)</h2>
                  <p>9:00 to 23:59</p>
                </div>
                <div className="date-content">
                  <h2>Gift of Gab (Round 2)</h2>
                  <p>9:00 to 10:00</p>
                </div>
                <div className="date-content">
                  <h2>Shark Tank (Round 1 Results)</h2>
                  <p>10:00</p>
                </div>
                <div className="date-content">
                  <h2>Snaphunt</h2>
                  <p>10:00 to 13:00</p>
                </div>
                <div className="date-content">
                  <h2>Shark Tank (Round 2)</h2>
                  <p>12:00 to 13:00</p>
                </div>
                <div className="date-content">
                  <h2>Codestrike</h2>
                  <p>13:00 to 15:00</p>
                </div>
                <div className="date-content">
                  <h2>Circuitron (SE + TE/BE) (Round 2)</h2>
                  <p>15:00 to 17:00</p>
                </div>
                <div className="date-content">
                  <h2>Dream Team (Round 2)</h2>
                  <p>16:00 to 17:00</p>
                </div>
                <div className="date-content">
                  <h2>Ninja Coding (Round 2)</h2>
                  <p>17:00 to 18:00</p>
                </div>
                <div className="date-content">
                  <h2>Campus to Corporate (Round 2)</h2>
                  <p>18:00 to 19:30</p>
                </div>
                <div className="date-content">
                  <h2>Minecraft - (Round 2 and Round 3)</h2>
                  <p>19:30 to 22:30</p>
                </div>
                <div className="date-content">
                  <h2>Game Zone</h2>
                  <p>18:00 onwards</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>27 Sun</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>DataCup (Both Rounds)</h2>
                  <p>Full Day</p>
                </div>
                <div className="date-content">
                  <h2>Gift of Gab (Round 3)</h2>
                  <p>9:00 to 10:00</p>
                </div>
                <div className="date-content">
                  <h2>Dream Team (Round 3)</h2>
                  <p>10:00 to 14:00</p>
                </div>
                <div className="date-content">
                  <h2>Campus to Corporate (Round 3)</h2>
                  <p>14:00 to 16:00</p>
                </div>
                <div className="date-content">
                  <h2>Innoveiren (Project Presentation)</h2>
                  <p>16:00 to 18:00</p>
                </div>
                <div className="date-content">
                  <h2>Xenathon (Automation Bots) (Round 2)</h2>
                  <p>18:00 to 20:00</p>
                </div>
                <div className="date-content">
                  <h2>Couch Potato (Round 2)</h2>
                  <p>21:00 to 22:00</p>
                </div>
                <div className="date-content">
                  <h2>Game Zone</h2>
                  <p>18:00 onwards</p>
                </div>
              </div>
              <div className="schedule-date">
                <h1>28 Mon</h1>
                <hr></hr>
                <div className="date-content">
                  <h2>Prize Distribution Ceremony (Valedictory)</h2>
                  <p>19:00 to 21:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='row text-center mt-5'>
          <div className='col-12'>
            <div className='btn btn-success download-schedule'><a className='text-dark' href={SchedulePDF} download> Download Schedule </a></div>
          </div>
        </div>

        {/* <div className="schedule-coming-soon">
          <div className="coming-soon">
            Coming Soon...
          </div>
        </div> */}

        {/* 
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
          <Grid container spacing={2} lg={6} md={12} sm={12} xs={12}>
            <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
              <Zoom duration={500}>
                <EventCols
                  date={this.state.days.day1.date}
                  eventNames={this.state.days.day1.events}
                  eventNo={this.state.days.day1.noofevents}
                />
              </Zoom>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Zoom duration={500}>
                <EventCols
                  date={this.state.days.day2.date}
                  eventNames={this.state.days.day2.events}
                  eventNo={this.state.days.day2.noofevents}
                />
              </Zoom>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Zoom duration={500}>
                <EventCols
                  date={this.state.days.day3.date}
                  eventNames={this.state.days.day3.events}
                  eventNo={this.state.days.day3.noofevents}
                />
              </Zoom>
            </Grid>
          </Grid>
        </Box> */}
      </>
    );
  }
}

export default Registrations;
