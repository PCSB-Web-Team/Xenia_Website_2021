import React from 'react';
import './RegOpen.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const regOpen = (props) =>{
    return (
        <Box md={12} lg={4} sm={12} xs={12} className="RegOpen">
            <Box m={2}>
                <h5 className="sche">&lt;EVENT SCHEDULE/&gt;</h5>
                <h5  className="sche">&lt;EVENT SCHEDULE/&gt;</h5>
                <h5  className="sche">&lt;EVENT SCHEDULE/&gt;</h5>
            </Box>
            <h6 className="open">REGISTRATIONS OPEN</h6>
            <h4 className="loren">Loren ipsum Lorem ipsum Loren ipsum</h4>
              <Button variant="contained" color="secondary" className="Button">
                  <span style={{fontFamily:'planetns'}}>DOWNLOAD</span>
              </Button>
        </Box>
    );
}

export default regOpen; 