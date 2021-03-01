import React,{Component} from 'react';
import classes from './Team.css';
import Grid from '@material-ui/core/Grid';
import Member from './Member/Member';

class Team extends Component{

    state={
        members: [{name:'Amit Purohit',
                   link:'#'},
                   {name:'Vedant Daigavane',
                   link:'#'},
                   {name:'Gaurav Shinde',
                   link:'#'},
                   {name:'Atharva Belekar',
                   link:'#'},
                   {name:'Sourav Borate',
                   link:'#'},
                   {name:'Pratik Dhayghude',
                    link:'#'},
                   {name:'Siddhesh Joshi',
                   link:'#'},
                   {name:'Pranil Bhosale',
                   link:'#'},
                   {name:'Kshitij Deshpande',
                    link:'#'}
                ]
    }

    render(){

        const members= this.state.members
                        .map((member,i)=>
                        (<Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                            <Member name={member.name} link={member.link}/>
                         </Grid>));
        return(
            <div className={classes.Team}>
                <h1 className={classes.meet}>meet our team</h1>
                <Grid container spacing={3}>
                    {members}
                </Grid>
            </div>
        );
    }
}


export default Team;