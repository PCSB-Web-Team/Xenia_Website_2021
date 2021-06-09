import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Cards/Card.css";
import "./Events.css";
import Card from "./Cards/Card";
import { getAllEvents } from "../Config/api/User";

const Events = () => {
  const [eventType, setEventType] = useState("tech");
  const [techEvents, setTech] = useState([]);
  const [nonTechEvents, setNonTech] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    console.log('loaded');
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
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
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
                    <Link to={`/events/${eve._id}`} onClick={ () => document.documentElement.scrollTop = 0 }>
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
                    <Link to={`/events/${eve._id}`} onClick={ () => document.documentElement.scrollTop = 0 }>
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
