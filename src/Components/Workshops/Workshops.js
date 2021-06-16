import React, { useEffect, useState } from "react";
import "./Workshops.css";

// import WorkShop from '../../Assets/Images/Workshops/workshop.jpg';
import Airvana from '../../Assets/Images/Workshops/airavana-logo.svg';
// import Blockchain from '../../Assets/Images/Workshops/blockchain.jpg';
// import PlaceMent from '../../Assets/Images/Workshops/placement1.jpg';
import Company from '../../Assets/Images/Workshops/company.jpg';
// import Future from '../../Assets/Images/Workshops/future.jpg';
import Main from '../../Assets/Images/Workshops/main.png';
import Evolve from '../../Assets/Images/Workshops/evole-logo.png';
import IDBI from '../../Assets/Images/Workshops/idbi.png';
import Etherium from '../../Assets/Images/Workshops/etherium.jpg';

import { getWorkshopDetails, getWorkshopMoreInfo } from '../Config/api/User';
import { anErrorOccured } from '../Notifications/Notification';
import Loader from '../Loader/Loader';

import { Link, useParams } from 'react-router-dom';

const Workshops = (props) => {

  let imagesArray = [ 
    {src: Main},
    {src: Etherium}, 
    {src: Evolve}, 
    {src: Airvana}, 
    {src: Company},
    {src: IDBI},
  ]

  const [details, setDetails] = useState({ workshopDetails: {}, })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {
      const res = await getWorkshopDetails();

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

      <h5 className='workshops-tag'>
          All attendees will be provided with an Industry Verified LinkedIn
          Sharable E-Certificates
      </h5>

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
          details.map( (eve,i) => {
            return (
              <Link to={`/industry-talks/${eve._id}`}>

                <div className='session-card'>
                  
                  <div className='image'>
                    <div className='image-inner'>
                      <img src={imagesArray[i].src} />
                    </div>
                  </div>

                  <div className='overlay'></div>
                  <div className='title'> {eve.workshopDetails.name} </div>
                  {/* <div className='workshop-agenda'> { eve.workshopDetails.agenda } </div> */}
               
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
