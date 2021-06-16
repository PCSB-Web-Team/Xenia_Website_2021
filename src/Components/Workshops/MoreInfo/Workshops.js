import React, { useEffect, useState } from "react";
import './Workshops.css';
import RegisterButton from '../../Button/button';
import { useParams, useHistory } from 'react-router-dom';
import { getWorkshopMoreInfo } from '../../Config/api/User';
import { anErrorOccured, registrationFail, registrationSuccess } from '../../Notifications/Notification';
import { connect } from 'react-redux';

import Loader from '../../Loader/Loader';

import Modal from './Modal/Modal';

import { registerWorkshop, openLogin } from '../../../Store/Actions';
import { registerWorkshopRequest } from "../../Config/api/User";

const Workshops = (props) => {

  const [currentInfo, setCurrentInfo] = useState('Details')
  const [details, setDetails] = useState({ workshopDetails: {}, companyDetails: {}, speakersDetails: {} })
  const [registered, setRegistered] = useState(false);

  const [loading, setLoading] = useState(true)

  const [showModal, setShowModal] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  const checkRegistered = () => {

    if (!props.registeredEvents) {
      history.push('/industry-talks');
      return;
    }

    setRegistered(false);

    props.registeredEvents.forEach((eve) => {
      if (eve._id === id) {
        setRegistered(true);
        console.log(eve._id, id);
      }
    });

  };

  useEffect(() => {
    fetchData();
    checkRegistered();
  }, [id])

  const fetchData = async () => {

    try {

      const res = await getWorkshopMoreInfo(id);

      if (res.data.ok) {
        // const data = res.data.data.filter(eve => eve._id === id)
        // console.log(res.data.data, "MoreInfo")
        setDetails(res.data.data);

        setLoading(false);
      }
      else {
        anErrorOccured();
      }

    }
    catch (error) {
      history.push("/industry-talks");
    }
  }

  const registerNow = async () => {

    setRegisterLoading(true);

    try {

      const res = await registerWorkshopRequest(details, props.token);

      console.log(res);

      if (res.data.ok) {
        setRegistered(() => true);
        props.register(details);
        setRegisterLoading(false);
        registrationSuccess();
        history.push(`/industry-talks/${id}`);
      }
      else {
        anErrorOccured();
      }

    }
    catch (error) {
      registrationFail();
    }

    closeModal();
  }

  const openModal = () => {
    setShowModal(true);
    setRegisterLoading(false);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (

    loading
      ?
      <Loader />
      :
      <>

        <div>
          <header className="page-headers">
            <div className="header-workshop"> {details.workshopDetails.name} </div>
          </header>
        </div>

        <div className="workshop-register-cont">
          {
            registered
              ?
              <div className='already-registered'>Registered</div>
              :
              <RegisterButton value="Register" onClick={props.logedIn ? openModal : props.openLogin} />}
          <h5>
            All attendees will be provided with an Industry Verified LinkedIn
            Sharable E-Certificates
          </h5>
        </div>

        <Modal showModal={showModal} closeModal={closeModal} load={registerLoading} handleRegister={registerNow} />

        {/* <div className="workshops-coming-soon">
        <div className="workshops-date">
          Starting from 17<sup>th</sup> June
        </div>
        <div className="coming-soon">Schedule Coming Soon...</div>
      </div> */}

        <div className='container workshop-info'>

          <div className='row tab-row'>
            <div className={currentInfo === 'Details' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Details')}> Workshop Details </div>
            <div className={currentInfo === 'Company' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Company')}> Company Details </div>
            <div className={currentInfo === 'Speaker' ? 'col-4 tab active-tab' : 'col-4 tab'} onClick={() => setCurrentInfo('Speaker')}> Speaker's Info </div>
          </div>

          {currentInfo === 'Details' ? <div>
            <div className='row workshop-details text-center'>

              <div className='date col-12'> Date: {details.workshopDetails.date} </div>
              <div className='time col-12'> Time: {details.workshopDetails.time} </div>
              <div className='platform col-12'> Platform: {details.workshopDetails.platform} </div>

              <h3 className='col-12 agenda-head'> Agenda </h3>
              <div className='col-12 agenda-content'> {details.workshopDetails.agenda.map( eve => <p>{eve}</p> )} </div>

            </div>
          </div> : null}

          {currentInfo === 'Speaker' ?

            details.speakersDetails.map(speaker => {
              return (
                <div className='speaker-container'>
                  <div className='row my-3 speaker'>

                    <div className='col-12 photo text-center'>
                      <img src={speaker.img} alt=''></img>
                    </div>

                    <h3 className='col-12 speaker text-center'>
                      {speaker.name}
                    </h3>

                    <div className='col-12 designation text-center'>
                      <div className='speaker-key'>Designation - </div> <div className='speaker-value'>{speaker.designation}</div>
                    </div>

                    <div className='col-12 linkedin text-center'>
                      <a href={speaker.linkedin} target='_blanck'>LinkedIn</a>
                    </div>

                    <div className='col-12 achievements text-center mt-3'>
                      <h5 className='speaker-key'> Achievements </h5>
                      <div className='speaker-value'> {speaker.achievements.map(eve => <div>{eve}</div>)} </div>
                    </div>
                    <div className='col-12 experience text-center mt-3'>
                      <h5 className='speaker-key'>Experience </h5>
                      <div className='speaker-value'> {speaker.experience.map(eve => <div> {eve} </div>)} </div>
                    </div>

                  </div>
                </div>
              )
            })

            : null}

          {currentInfo === "Company" ?
            <div className="company-details">
              {details.companyDetails.map(company => {
                return (
                  (
                    <div className="company">

                      <img src={company.companyLogo} alt="company logo" />
                      <h3 className="company-name"> {company.companyName} </h3>

                      <a href={company.companyWebsite} target="_blank">
                        {" "}
                        Website{""}
                      </a>
                      {/* 
                  <h4 className="company-brand">
                    Brand Name
                  </h4>
                  <p className="company-brand-name">{company.brandName}</p> */}

                      <div className="company-tasks">
                        {
                          company.description.map(desc => {
                            return (
                              <p>
                                {desc}
                              </p>
                            )
                          })
                        }
                      </div>

                      <div className="company-links">
                        <h4> Social Media Links </h4>
                        <div className="company-links-inner text-center">
                          {/*                       
                      <a href="www.google.com" target="_blank">
                        <i className="fa fa-facebook-official" ariaHidden="true"></i>
                      </a>

                      <a href="www.google.com" target="_blank">
                        <i className="fa fa-instagram" ariaHidden="true"></i>
                      </a> */}

                          <a href={company.linkedin} target="_blank">
                            <i className="fa fa-linkedin" ariaHidden="true"></i>
                          </a>

                        </div>
                      </div>
                    </div>

                  )
                )
              }
              )}</div>
            : null}

        </div>

      </>
  );
};



const mapStateToProps = state => {
  return {
    registeredEvents: state.userData.registeredWorkshops,
    logedIn: state.login,
    token: state.token
  }
}

const mapActionToProps = dispatch => {
  return {
    register: (eve) => { dispatch(registerWorkshop(eve)) },
    openLogin: () => { dispatch(openLogin()) }
  }
}


export default connect(mapStateToProps, mapActionToProps)(Workshops);
