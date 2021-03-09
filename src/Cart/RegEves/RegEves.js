import React, { Component } from 'react'
import styles from './RegEves.css';

class RegEves extends Component {
    state = {
        techs: [
          {
            name: "CodeStrike",
            logo: "reactLogo",
            Fees: "",
            Slot: "",
            Contact: "",
            group: "tech",
            id: 1,
            date: "00/00/00",
            
          },
          {
            name: "NinjaCoding",
            logo: "reactLogo",
            Fees: "",
            Slot: "",
            Contact: "",
            group: "tech",
            id: 2,
            date: "00/00/00",
             
          },
          {
            name: "Design Maestro",
            logo: "reactLogo",
            Fees: "",
            Slot: "",
            Contact: "",
            group: "tech",
            id: 3,
            date: "00/00/00",
             
          },
        ],
      };
    
      render() {
    
        const temp = "{this.state.techs.map((tech) => {return <Mycartprop name={tech.name} id={tech.id} />;})}";
        const nos = this.state.techs.map((tech,i)=> <div className={styles.noItem}><h4>{i+1}</h4></div>);
        const eves = this.state.techs.map((tech,i) => <div className={styles.eveItem}><h4>{tech.name}</h4></div>);
        const icons = this.state.techs.map((tech,i) => <div className={styles.iconItem}><h4>slot{i+1}</h4></div>)
    
        return (
          <div className={styles.myCart}>
              <div className={styles.mycartContainer}>
                <div className="col-lg-2 col-md-2 col-sm-2 col-sx-2" style={{margin : '0',textAlign:"center"}}>
                  <h3>#</h3>
                </div> 
                <div className="col-lg-6 col-md-6 col-sm-6 col-sx-6" style={{margin : '0',textAlign:"center"}}>
                  <h3>EVENT</h3>
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-4 col-sx-4" style={{margin : '0',textAlign:"center"}}>
                  <h3>SLOT</h3>
                </div>
    
              </div>
              <hr className={styles.cartLine} />
              <div className={styles.cartInfoContainer}>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{display:'flex',flexFlow:'column',textAlign:'center'}}>
                  {nos}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{display:'flex',flexFlow:'column',textAlign:'center'}}>
                  {eves}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{display:'flex',flexFlow:'column',textAlign:'center'}}>
                  {icons}
                </div>
              </div>
          </div>
        );
      }
}

export default RegEves; 