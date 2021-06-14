// import React, { useState } from "react";
import "./Workshops.css";
import Details from "./DetailsTab";
const Workshops = (props) => {
  return (
    <>
      <div>
        <header className="page-headers">
          <h1 className="header-name"> WORKSHOPS </h1>
        </header>
      </div>

      {/* <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div> */}

      <div>

          <div className="session-detail-container">
            
            <div className="session-detail-left">
              <div className="session-detail-left-inner">
                <h1 className="side-text">KUBERNETES WORKSHOP</h1>
              </div>
            </div>
            
            <div className="session-detail-right">
              <div className="company_portfolio text-center">
                <img
                  src={`https://source.unsplash.com/user/erondu/1600x900`}
                  className="company_image"
                  alt=''
                />
              </div>
              <p className="lead text-light my-3 font-weight-bold text-center">
                Executive Director and CEO, Kirloskar Systems Limited Founder &
                Chairperson at Aditya Birla Education Trust
              </p>
              <div>
                <Details />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
