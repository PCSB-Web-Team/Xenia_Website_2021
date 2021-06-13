import React, { useState } from "react";
import "./Workshops.css";

const Workshops = (props) => {
  return (
    <>
      <div>
        <header className="page-headers">
          <h1 className="header-name"> WORKSHOPS </h1>
        </header>
      </div>

      <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div>
    </>
  );
};

export default Workshops;
