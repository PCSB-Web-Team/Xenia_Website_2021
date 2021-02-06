import React,{Component} from 'react';
import styles from './Registrations.css';
import RegOpen from './RegOpen/RegOpen';
import EventCols from './EventCols/EventCols';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


class Registrations extends Component{

    state={
        noofdays:3,
        days: {
            day1 :{
                date: "14 March 2021",
                noofevents: 6,
                events : ["event1","event2","event3","event4","event5","event6"]
            },
            day2 :{
                date: "15 March 2021",
                noofevents: 3,
                events : ["event1","event2","event3"]
            },
            day3 :{
                date: "16 March 2021",
                noofevents: 4,
                events : ["event1","event2","event3","event4"]
            }
        }
    }

    render(){
        // cd Desktop/pict/react/react1
        return (
            <Box className={styles.Registrations} alignItems="center" justifyContent="center" mt={10}>
                <Box md={12} lg={4} sm={12} xs={12} m={10}>
                    <RegOpen />
                </Box>
                <Grid container  spacing={2} lg={6} md={12} sm={12} xs={12}>
                    <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
                        <EventCols date={this.state.days.day1.date}
                        eventNames={this.state.days.day1.events}
                        eventNo={this.state.days.day1.noofevents} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
                        <EventCols date={this.state.days.day2.date}
                        eventNames={this.state.days.day2.events}
                        eventNo={this.state.days.day2.noofevents} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} alignItems="center">
                        <EventCols date={this.state.days.day3.date}
                        eventNames={this.state.days.day3.events}
                        eventNo={this.state.days.day3.noofevents} />
                    </Grid>
                 </Grid>
            </Box>
        );
    }
}

export default Registrations; 