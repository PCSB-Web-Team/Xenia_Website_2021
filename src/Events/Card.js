import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({props , readmore}) {
  const classes = useStyles();
  return (
    <div className="event-card" id={props.id} onClick={readmore}>
      <img src={props.logo}/>
      <div className="card-body">
        <h2 className='eve-card-name'>{props.name}</h2>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <span>{props.date}</span>
      </div>
    </div>
  );
}
