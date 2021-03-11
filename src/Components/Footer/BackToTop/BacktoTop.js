import React from 'react';
import './BacktoTop.css';

const backtoTop = props =>{
    return (
        <div className="backtotop" style={{textAlign:'center',color:'white',fontFamily:'planetn',margin:'30px 0'}}>
            <a href='#Xenia' style={{textDecoration: 'none',color:'white'}}>
                <h4>GET BACK TO THE TOP</h4>
            </a>
        </div>
    );
}

export default backtoTop;