import React from 'react';
import styles from './App.css';
import Cards from './Events/Dashboard.js';
import Registrations from './Registrations/Registrations.js';
import Navbar from './Navbar/Navbar';

class App extends React.Component {
  render(){
    return(
      <div className="Xenia">
        <Navbar></Navbar>
        <a id="Home"><Registrations></Registrations></a>
        <a id="Events"><Cards></Cards></a>
      </div>
    )
  }
}

export default App;
