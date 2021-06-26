import React, { useEffect, useState } from "react";
import "./Workshops.css";
import Airvana from '../../Assets/Images/Workshops/airavana-logo.svg';
import Main from '../../Assets/Images/Workshops/main.png';
import Evolve from '../../Assets/Images/Workshops/evole-logo.png';
import IDBI from '../../Assets/Images/Workshops/idbi.jpg';
import Etherium from '../../Assets/Images/Workshops/etherium.jpg';
import SWE from '../../Assets/Images/Workshops/swe.png';
import Viable from '../../Assets/Images/Workshops/viable.jpg';
import Platform9 from '../../Assets/Images/SponsorImages/platform9.jpg'
import { getWorkshopDetails } from '../Config/api/User';
import { anErrorOccured } from '../Notifications/Notification';
import Loader from '../Loader/Loader';
import { Zoom, Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Brochure from '../../Assets/PCSB Xenia Industry Talks Brochure.pdf';

const Workshops = () => {

  let imagesArray = [
    { src: Platform9},
    { src: SWE },
    { src: Airvana },
    { src: Evolve },
    { src: Etherium },
    { src: Viable },
    { src: IDBI },
    { src: Main },
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
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='btn btn-success btn-large'><a className='text-dark' href={Brochure} download>Download Brochure</a></div>
            </div>
          </div>
        <div className='container'>
          {
            details.map((eve, i) => {
              return (
                <Fade>
                  <div className='workshop-card'>
                    <div className='row'>
                      <Zoom>
                        <div className='col-12 col-md-4 session-logos'>
                          <img src={imagesArray[i].src} alt='' />
                        </div>
                      </Zoom>
                      <div className='col-12 col-md-8 session-contents'>
                        <Zoom right>
                          <h3
                            className='title'>
                            {eve.workshopDetails.name}
                          </h3>
                          <br />
                          <h5 className='date'>{eve.workshopDetails.date}</h5>
                          <br />
                          <h5 className='time'>{eve.workshopDetails.time}</h5>
                          <br />
                          <Link
                            to={`/industry-talks/${eve._id}`}>
                            <div
                              className='more-info'
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
