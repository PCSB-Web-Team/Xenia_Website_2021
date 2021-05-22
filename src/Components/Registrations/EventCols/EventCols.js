import React from "react";
import "./EventCols.css";
import Grid from "@material-ui/core/Grid";

const Event = props => {
  return (
    <div className="Event">
      <p>
        <img width="50" alt=''></img>
        {props.name}
      </p>
    </div>
    )
}

const eventCols = (props) => {
  const eves = props.eventNames;
  const list = eves.map((eve) => (
    <Grid item xs={12} key={eve}>
      <Event key={eve} name={eve} />
    </Grid>
  ));

  return (
    <Grid container spacing={0} className="EventCols">
      <Grid item xs={12}>
        <h3 className="evedate">{props.date}</h3>
      </Grid>
      {list}
    </Grid>
  );
};

export default eventCols;
