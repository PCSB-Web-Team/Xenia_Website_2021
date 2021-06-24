import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Cards/Card.css";
import "./Events.css";
import Card from "./Cards/Card";
import { getAllEvents } from "../Config/api/User";
import { failedToLoad } from "../Notifications/Notification";

const Events = () => {
  const [eventType, setEventType] = useState("tech");
  const [techEvents, setTech] = useState([]);
  const [nonTechEvents, setNonTech] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllEvents();

      if (response.data.ok) {
        let tech = [];
        let nonTech = [];

        tech = response.data.data.filter((eve) => eve.isTechnical);
        nonTech = response.data.data.filter((eve) => !eve.isTechnical);

        setTech(tech);
        setNonTech(nonTech);
      }

      setLoading(false);
    } catch (err) {
      // console.log(err);
      failedToLoad();
    }
  };

  // const changeEventType = () => {
  //   if (eventType === "tech") setEventType("nonTech");
  //   else setEventType("tech");
  // };

  return (
    <div className="events-dashboard">
      <header className="page-headers">
        <h1 className="header-name"> EVENTS </h1>
      </header>
      <div className="date-header-events">
        25<sup>th</sup> to 27<sup>th</sup> June 2021
      </div>
      <div className="events-reg-closed text-danger">
        All Events Registrations are closed.
      </div>
      <div className="innoveiren-open">
        Innoveiren Registrations are Open till 25 June 11:59 PM -{" "}
        <Link to="/events/6049061af857153edbb383f3">Register Now</Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-container">
          <div className="tabs">
            <button
              className={
                eventType === "tech" ? "tabs-btn active-tab" : "tabs-btn"
              }
              onClick={() => setEventType("tech")}
              id="tech-tab"
            >
              Technical
            </button>
            <button
              className={
                eventType !== "tech" ? "tabs-btn active-tab" : "tabs-btn"
              }
              onClick={() => setEventType("non-tech")}
              id="non-tech-tab"
            >
              Non Technical
            </button>
          </div>

          {eventType === "tech"
            ? techEvents.map((eve) => {
                return (
                  <div key={eve._id} className="card-div">
                    {" "}
                    <Link
                      to={`/events/${eve._id}`}
                      onClick={() => (document.documentElement.scrollTop = 0)}
                    >
                      <Card details={eve}></Card>
                    </Link>{" "}
                  </div>
                );
              })
            : null}
          {eventType !== "tech"
            ? nonTechEvents.map((eve) => {
                return (
                  <div key={eve._id} className="card-div">
                    {" "}
                    <Link
                      to={`/events/${eve._id}`}
                      onClick={() => (document.documentElement.scrollTop = 0)}
                    >
                      <Card details={eve}></Card>
                    </Link>{" "}
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default Events;
