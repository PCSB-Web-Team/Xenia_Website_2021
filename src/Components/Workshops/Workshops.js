import React, { useEffect, useState } from "react";
import "./Workshops.css";

// import WorkShop from '../../Assets/Images/Workshops/workshop.jpg';
// import Blockchain from '../../Assets/Images/Workshops/blockchain.jpg';
// import PlaceMent from '../../Assets/Images/Workshops/placement1.jpg';
// import Future from '../../Assets/Images/Workshops/future.jpg';

import Company from '../../Assets/Images/Workshops/company.jpg';
import Airvana from '../../Assets/Images/Workshops/airavana-logo.svg';
import Main from '../../Assets/Images/Workshops/main.png';
import Evolve from '../../Assets/Images/Workshops/evole-logo.png';
import IDBI from '../../Assets/Images/Workshops/idbi.jpg';
import Etherium from '../../Assets/Images/Workshops/etherium.jpg';

import { getWorkshopDetails } from '../Config/api/User';
import { anErrorOccured } from '../Notifications/Notification';
import Loader from '../Loader/Loader';

import { Zoom, Slide, Fade } from 'react-reveal';

import { Link } from 'react-router-dom';

const Workshops = (props) => {

  let imagesArray = [
    { src: Main },
    { src: IDBI },
    { src: Company },
    { src: Etherium },
    { src: Evolve },
    { src: Airvana },
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
      <Loader />
      :
      <div className='sessions'>

        <div>
          <header className="page-headers">
            <h1 className="header-name"> Industry Talks </h1>
          </header>
        </div>

        <div className='date-header-events'>17<sup>th</sup> to 21<sup>th</sup> June 2021</div>


        <h5 className='workshops-tag'>
          All attendees will be provided with an Industry Verified LinkedIn
          Sharable E-Certificate
        </h5>

        {/*       
      <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div> 
      */}

        {/* 
        <div className='container-fluid text-center'>
          {
            details.map((eve, i) => {
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

                  </div>

                </Link>
              )
            })
          } 

        </div>
*/}

        <div className='container'>
          {
            details.map((eve, i) => {
              return (
                <Fade>
                  <div className='workshop-card'>
                    <div className='row'>

                      <Zoom>
                        <div className='col-xs-12 col-md-4 session-logos'>
                          <img src={imagesArray[i].src} />
                        </div>
                      </Zoom>

                      <div className='col-xs-12 col-md-8 session-contents'>
                        <Zoom right>
                          <h3 className='title'>{eve.workshopDetails.name}</h3>
                          <br></br>
                          <h5 className='date'>{eve.workshopDetails.date}</h5>
                          <br></br>
                          <Link to={`/industry-talks/${eve._id}`}> <div className='more-info'
                            onClick={() => {
                              document.documentElement.scrollTop = 0;
                            }} > MoreInfo {'> > >'} </div> </Link>
                        </Zoom>
                      </div>

                    </div>
                  </div>
                </Fade>
              )
            })
          }
        </div>

      </div>
  );
};

export default Workshops;
