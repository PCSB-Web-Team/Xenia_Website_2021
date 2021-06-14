import React, { useState } from "react";
import "./Workshops.css";

import WorkShop from '../../Assets/Images/Workshops/workshop.jpg';
import PlaceMent from '../../Assets/Images/Workshops/placement.jpg';
import Company from '../../Assets/Images/Workshops/company.jpg';
import { Link } from 'react-router-dom';

const Workshops = (props) => {
  return (
    <div className='sessions'>
      
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

{/* 
      <div className='container-fluid text-center'>

        <Link to='/sessions/info'>
          <div className='session-card'>
            <img src={WorkShop}></img>
            <div className='overlay'></div>
            <div className='title'> WorkShops </div>
          </div>
        </Link>


        <Link to='/sessions/info'>
          <div className='session-card'>
            <img src={PlaceMent}></img>
            <div className='overlay'></div>
            <div className='title'> Placement Webinar  </div>
          </div>
        </Link>


        <Link to='/sessions/info'>
          <div className='session-card'>
            <img src={Company}></img>
            <div className='overlay'></div>
            <div className='title'> Company Booth </div>
          </div>
        </Link>

        <Link to='/sessions/info'>
          <div className='session-card'>
            <img src={PlaceMent}></img>
            <div className='overlay'></div>
            <div className='title'> Placement Webinar  </div>
          </div>
        </Link>


        <Link to='/sessions/info'>
          <div className='session-card'>
            <img src={Company}></img>
            <div className='overlay'></div>
            <div className='title'> Company Booth </div>
          </div>
        </Link>

      </div> */}

    </div>
  );
};

export default Workshops;
