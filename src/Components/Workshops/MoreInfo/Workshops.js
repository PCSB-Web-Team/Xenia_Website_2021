import React, { useState } from "react";

import './Workshops.css';

import RegisterButton from '../../Button/button';

const Workshops = (props) => {

  const [currentInfo, setCurrentInfo] = useState('Details')

  return (
    <>

      <div>
        <header className="page-headers">
          <h1 className="header-name"> WORKSHOPS Info </h1>
        </header>
      </div>

      <div className='row text-center text-light'>
        <div className='col-12'>
          <RegisterButton value='Register'/>
        </div>
        <h5 className='col-12'>
          All attendees will be provided with a Industry Verified LinkedIn Sharable E-Certificates
        </h5>
      </div>

      {/* <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div> */}

      <div className='container workshop-info'>

        <div className='row tab-row'>
          <h3 className={currentInfo === 'Details' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Details')}> Workshop Details </h3>
          <h3 className={currentInfo === 'Company' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Company')}> Company Details </h3>
          <h3 className={currentInfo === 'Speaker' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Speaker')}> Speaker's Info </h3>
        </div>

        {currentInfo === 'Details' ? <div>

          <div className='info row'>

            <div className='date col-12'> Date: 17th June 2021 </div>
            <div className='time col-12 '> Time: 6:00 pm to 8:00 pm </div>
            <div className='platform col-12'> Platform: Ms Teams </div>
            
            <h3 className='col-12 mt-3 text-left'> Agenda </h3>
            <div className='col-12 text-left'> -> To completely guide the attendees about internships, study pattern, placement, job opportunities and to answer all your questions by exemplary seniors of PICT </div>
            <div className='col-12 text-left'> -> To completely guide the attendees about internships, study pattern, placement, job opportunities and to answer all your questions by exemplary seniors of PICT </div>
            <div className='col-12 text-left'> -> To completely guide the attendees about internships, study pattern, placement, job opportunities and to answer all your questions by exemplary seniors of PICT </div>

          </div>

        </div> : null}

        {currentInfo === 'Speaker' ? <div>

          <div className='row my-3'>
            <div className='col-4'>
              <div className='row'>
                Photo
              </div>
              <div className='row'>
                Name:
              </div>
            </div>
            <div className='col-8'>
              <div className='row'>
                Designation:
              </div>
              <div className='row'>
                Linked In :
              </div>
              <div className='row'>
                Achievements :
              </div>
              <div className='row'>
                Experience :
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-4'>
              <div className='row'>
                Photo
              </div>
              <div className='row'>
                Name:
              </div>
            </div>
            <div className='col-8'>
              <div className='row'>
                Designation:
              </div>
              <div className='row'>
                Linked In :
              </div>
              <div className='row'>
                Achievements :
              </div>
              <div className='row'>
                Experience :
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-4'>
              <div className='row'>
                Photo
              </div>
              <div className='row'>
                Name:
              </div>
            </div>
            <div className='col-8'>
              <div className='row'>
                Designation:
              </div>
              <div className='row'>
                Linked In :
              </div>
              <div className='row'>
                Achievements :
              </div>
              <div className='row'>
                Experience :
              </div>
            </div>
          </div>

        </div> : null}

        {currentInfo === 'Company' ? <div>

          <div className='row my-3'>
            <h1 className='col-12'> Company Logo</h1>
          </div>

          <div className='row my-3'>
            <div className='col-12'> Evolvwise Technologies Pvt. Ltd. </div>
          </div>

          <div className='row my-3'>
            <div className='col-12'> <a href='www.google.com' target='_blank'> www.google.com </a> </div>
          </div>

          <div className='row my-3'>
            <div className='col-12'> Brand Name: Evolve Life Coaching App </div>
          </div>

          <div className='row my-3'>
            <div className='col-12'>
              <p>Evolve is a platform which helps people find clarity and evoke solutions from within. </p>
              <p>In India, when people need help or clarity in professional or personal life they look towards therapy or counselling, when instead coaching would be more effective. Evolve aims to find the right coach for such people while allowing them to maintain their anonymity. </p>
              <p>In India, when people need help or clarity in professional or personal life they look towards therapy or counselling, when instead coaching would be more effective. Evolve aims to find the right coach for such people while allowing them to maintain their anonymity. </p>
            </div>
          </div>

          <div className='row my-3'>
            <div className='col-12'> Social Media Links </div>
            <div className='col-12'>
              <a href='www.google.com' target='_blank'> Facebook </a>|
              <a href='www.google.com' target='_blank'> Instagram </a>|
              <a href='www.google.com' target='_blank'> LinkedIn </a>
            </div>
          </div>

        </div>
          : null}

        {/* 
        <div className='info'>
          <h3> To completely guide the attendees about internships, study pattern, placement, job opportunities and to answer all your questions by exemplary seniors of PICT </h3>
          <div className='date'> 17th June 2021 </div>
          <div className='time'> 6:00 pm to 8:00 pm </div>
          <div className='platform'> Platform: Ms Teams </div>
        </div>

        <div className='persons'>
          <div className='row'>
            <div className='col-4 image'>Image</div>
            <div className='col-8 details'>Details and Position</div>
          </div>
        </div>
          <div className='row'>
            <div className='col-4 image'>Image</div>
            <div className='col-8 details'>Details and Position</div>
          </div>
          <div className='row'>
            <div className='col-4 image'>Image</div>
            <div className='col-8 details'>Details and Position</div>
          </div>
          <div className='row'>
            <div className='col-4 image'>Image</div>
            <div className='col-8 details'>Details and Position</div>
          </div>

        <div className='contact'> Satyajit : +91 70289 29568 </div> */}

      </div>

    </>
  );
};

export default Workshops;
