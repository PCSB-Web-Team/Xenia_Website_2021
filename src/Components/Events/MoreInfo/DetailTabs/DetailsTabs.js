import React, { useState } from 'react';
import './DetailsTabs.css';
import { Fade, Zoom } from 'react-reveal';

export default function SimpleTabs(props) {

  const [activeDetail, setactiveDetail] = useState(0);

  const activeTab = "head-items active-item";
  const tab = "head-items";
  const det = "mi-content";
  const activeDet = "mi-content active";

  return (

    <div className='mi-container'>
      <div className='mi-head'>
        <Zoom cascade>
          <div className={activeDetail === 0 ? activeTab : tab} onClick={() => { setactiveDetail(0) }}>Rules</div>
          <div className={activeDetail === 1 ? activeTab : tab} onClick={() => { setactiveDetail(1) }}>Prizes</div>
          <div className={activeDetail === 2 ? activeTab : tab} onClick={() => { setactiveDetail(2) }}>Contact</div>
        </Zoom>
      </div>
      <div className='mi-details'>
        <Fade>
          <div className={activeDetail === 0 ? activeDet : det}>
            {props.details.rules.map((rule) => <p>{rule}</p>)}
          </div>
          <div className={activeDetail === 1 ? activeDet : det}>
            {props.details.prizes.map(prizes => <p>{prizes}</p>)}
          </div>
          <div className={activeDetail === 2 ? activeDet : det}>
            {props.details.contacts.map(contact => <p>{contact}</p>)}
          </div>
        </Fade>
      </div>
    </div>

  );
}
