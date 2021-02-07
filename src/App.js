import React from 'react';
import styles from './App.css';
import Cards from './Events/Dashboard.js';
import Registrations from './Registrations/Registrations.js';

class App extends React.Component {
  render(){
    return(
      <div className="Xenia">
        <Registrations></Registrations>
        <Cards></Cards>
      </div>
    )
  }
}

export default App;
