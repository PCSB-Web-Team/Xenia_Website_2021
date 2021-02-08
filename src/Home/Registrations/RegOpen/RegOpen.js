import React from 'react';
import styles from './RegOpen.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const regOpen = (props) =>{
    return (
        <Box md={12} lg={4} sm={12} xs={12} className='RegOpen'>
            <Box m={2}>
                <Typography variant="h5">&lt;EVENT SCHEDULE/&gt;</Typography>
                <Typography variant="h5">&lt;EVENT SCHEDULE/&gt;</Typography>
                <Typography variant="h5">&lt;EVENT SCHEDULE/&gt;</Typography>
            </Box>
            <Typography variant="h6">REGISTRATIONS OPEN</Typography>
            <h4>Loren ipsum Lorem ipsum Loren ipsum</h4>
              <Button variant="contained" color="secondary" className={styles.Button}>
                  <span style={{fontFamily:'planetns'}}>DOWNLOAD</span>
              </Button>
        </Box>
    );
}

export default regOpen; 