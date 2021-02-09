import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({props , readmore}) {
  const classes = useStyles();
  return (
    <div className="event-card" id={props.id} onClick={readmore}>
      <Zoom><img src={props.logo}/></Zoom>
      <div className="card-body">
        <Slide left><h2 className='eve-card-name'>{props.name}</h2></Slide>
        <Slide right><hr></hr></Slide>
        <Fade><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></Fade>
        <span>{props.date}</span>
      </div>
    </div>
  );
}
