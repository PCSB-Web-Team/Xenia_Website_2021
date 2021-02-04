import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card1 from './Card1';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({props , readmore}) {
  const classes = useStyles();
  return (
    <div className="card" id={props.id}>
      <img src={props.logo}/>
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="bg"></div>
        
      <CardActionArea><Button onClick={readmore} className="register">Register</Button></CardActionArea>
      </div>
    </div>
  );
}
