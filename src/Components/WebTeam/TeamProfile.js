import React from 'react';
import { Profiler } from 'react';
import logo from '../../Assets/images/logo.svg';

const TeamProfile = ({details}) => {
    return (
        <div className="profile">
            
          <div className='picNLink'>
            <img src={details.pic} className="memberPic"></img>
            <a className=" memberLink" href={details.linkedIn} target='_blank'>
              <i className="footerIcon fa fa-3x fa-linkedin-square text-primary" aria-hidden="true" /> </a>
          </div>

          <p className='memberName'>{details.name}</p>

        </div>
    )
}

export default TeamProfile;