import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AccordionDetails, colors } from '@material-ui/core';
import './DetailsTabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '25%',
    overflowY: 'auto',
    flexGrow: 1,
    backgroundColor: "transparent"
  },
  tabs: {
    backgroundColor: 'black',
    color: 'aqua',
  },
  details: {
    backgroundColor: 'black',
  },
  buttn: {
    width: '30%',
  },
  info: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'justify',
    height: '400px',
    overflow: 'auto',
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabs} indicatorColor='primary' value={value} onChange={handleChange} variant='fullWidth' aria-label="simple tabs example">
          <Tab className={classes.buttn} label="Rules" {...a11yProps(0)} />
          <Tab className={classes.buttn} label="Prizes" {...a11yProps(1)} />
          <Tab className={classes.buttn} label="Contact" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className='mi-details' value={value} index={0}>
        {props.details.rules.map( rule => <p>{rule}</p> )}
      </TabPanel>
      <TabPanel className='mi-details' value={value} index={1}>
        {props.details.prizes.map( prizes => <p>{prizes}</p> )}
      </TabPanel>
      <TabPanel className='mi-details' value={value} index={2}>
        {props.details.contacts.map (contact => <p>{contact}</p>)}
      </TabPanel>
    </div>
  );
}
