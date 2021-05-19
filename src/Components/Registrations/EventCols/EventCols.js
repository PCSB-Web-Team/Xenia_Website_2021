import React from "react";
import "./EventCols.css";
import Event from "./Event/Event";
import Grid from "@material-ui/core/Grid";

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
