import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cards from './Cards';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      eventType: 'Non-Tech'
    }
  }

  render(){

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12" onClick={ ()=>{this.setState({eventType: 'Tech'})} }><button>Tech</button></div>
        <div className="col-lg-6 col-md-12" onClick={ ()=>{this.setState({eventType: 'Non-Tech'})} }><button>Non-Tech</button></div>
      </div>
      
      <div>        
        <Cards eventType={this.state.eventType}></Cards>
      </div>
    </div>
  );
  
}
}

export default App;
