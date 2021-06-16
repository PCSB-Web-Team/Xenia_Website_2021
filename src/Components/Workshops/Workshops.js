import React, { useEffect, useState } from "react";
import "./Workshops.css";

import WorkShop from '../../Assets/Images/Workshops/workshop.jpg';
import PlaceMent from '../../Assets/Images/Workshops/placement1.jpg';
import Company from '../../Assets/Images/Workshops/company.jpg';

import { getWorkshopDetails } from '../Config/api/User';
import { anErrorOccured } from '../Notifications/Notification';
import Loader from '../Loader/Loader';

import { Link } from 'react-router-dom';

const Workshops = (props) => {

  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {
      const res = await getWorkshopDetails();
      console.log(res);

      if (res.data.ok) {
        setDetails(res.data.data);
        setLoading(false);
      }
      else {
        anErrorOccured();
      }

    }
    catch (error) {
      anErrorOccured();
    }

  }

  return (

    loading
    ?
    <Loader/>
    :
    <div className='sessions'>

      <div>
        <header className="page-headers">
          <h1 className="header-name"> Industry Talks </h1>
        </header>
      </div>

      {/*       
      <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div> 
      */}


      <div className='container-fluid text-center'>

        {
          details.map(eve => {
            return (
              <Link to='/industry-talks/info'>
                <div className='session-card'>
                  <img src={WorkShop}></img>
                  <div className='overlay'></div>
                  <div className='title'> {eve.name} </div>
                  <div className='workshop-agenda'> { eve.agenda } </div>
                </div>
              </Link>
            )
          })
        }



        {/* 
        <Link to='/industry-talks/info'>
          <div className='session-card'>
            <img src={PlaceMent}></img>
            <div className='overlay'></div>
            <div className='title'> Placement Webinar  </div>
          </div>
        </Link>

        <Link to='/industry-talks/info'>
          <div className='session-card'>
            <img src={Company}></img>
            <div className='overlay'></div>
            <div className='title'> Company Booth </div>
          </div>
        </Link>

        <Link to='/industry-talks/info'>
          <div className='session-card'>
            <img src={PlaceMent}></img>
            <div className='overlay'></div>
            <div className='title'> Placement Webinar  </div>
          </div>
        </Link> */}


        {/* <Link to='/industry-talks/info'>
          <div className='session-card'>
            <img src={Company}></img>
            <div className='overlay'></div>
            <div className='title'> Company Booth </div>
          </div>
        </Link> */}

      </div>

    </div>
  );
};

export default Workshops;
