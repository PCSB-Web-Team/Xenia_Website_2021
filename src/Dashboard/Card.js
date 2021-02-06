import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({props , readmore}) {
  const classes = useStyles();
  return (
    <div className="card" id={props.id} onClick={readmore}>
      <img src={props.logo}/>
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="bg"></div>
        <span>{props.date}</span>
      </div>
    </div>
  );
}
