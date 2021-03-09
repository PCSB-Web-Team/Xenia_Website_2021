import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import './background.css';
import Store from './Store/Store';

import LoginPage from './Auth/Login';
import SignupPage from './Auth/Register';


class App extends React.Component {


    // fake authentication Promise
authenticate() {  
  return new Promise(resolve => setTimeout(resolve, 1)) // 2 seconds
}
    
componentDidMount() {

  this.authenticate().then(() => {
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
    this.checkLogin();
  })

}

  constructor(props) {
    
    super(props);
    
    this.state = {

      popLogin: false,
      popSignUp: false,
      logedin: false,

    };
  }

  handleLogin   = () => { this.setState({popLogin:  true  }) } 
  handleLogedin = () => { this.setState({logedin:   true  }) }  
  closeLogin    = () => { this.setState({popLogin:  false }) }

  handleSignUp  = () => { this.setState({popSignUp: true  }) }    
  handleSignedUp= () => { this.setState({logedin:   true  }) }      
  closeSignUp   = () => { this.setState({popSignUp: false }) }   

  toggleLoginSignup = () => {
    if(this.state.popLogin === true) {  this.setState({popLogin: false, popSignUp: true}) }
    else {  this.setState({popLogin: true, popSignUp: false}) }
  }

  handleLogout= () => {  
    Store.dispatch({
      type: 'logedout'
    })
    this.setState({logedin: Store.getState().login})
  }

  checkLogin = ()  => {
    let username = (localStorage.getItem('xeniausername'));
    let password = (localStorage.getItem('xeniapassword'));

    console.log('username: ',username,'password: ',password);
    console.log('checking Login Status');

    if(username !== undefined && username !== null) {
      this.setState({ logedin: true })
    }
  }

  render() {

    return (
      <div className='Xenia' id='Xenia'>

        <Navbar 
          activeTab = {this.state.view} 
          handleLogin = {this.handleLogin.bind(this)}
          handleSignUp = {this.handleSignUp} 
          handleLogout={this.handleLogout} 
          logedIn={this.state.logedin}
        />

        <LoginPage 
          toggle = {this.toggleLoginSignup.bind(this)}
          openLogin = {this.state.popLogin} 
          handleLogedin = {this.handleLogedin.bind(this)} 
          closeLogin = {this.closeLogin.bind(this)}
        />

        <SignupPage 
          openSignUp = {this.state.popSignUp} 
          handleSignedUp = {this.handleSignedUp.bind(this)} 
          closeSignUp = {this.closeSignUp.bind(this)}
        />

      </div>
    );
  }
}

export default App;
