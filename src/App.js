import React      from  "react";
import Navbar     from  "./Navbar/Navbar";
import LoginPage  from  './Auth/Login';
import SignupPage from  './Auth/Register';
import Home       from  './LandingPage/LandingPage';
import Schedule   from  './Registrations/Registrations/Registrations';
import Events     from  './Events/Events';
import AboutUs    from  './AboutUs/About';
import ContactUs  from  './Contact/Contact';
import Footer     from  './Footer/Footer';
import Cart       from  './Cart/Cart';
import Profile    from  './Profile/Profile';
import {connect}  from 'react-redux';
//import './background.css';
import "./App.css";
import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";

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

  checkLogin = ()  => {
    let username = (localStorage.getItem('xeniausername'));
    let password = (localStorage.getItem('xeniapassword'));

    console.log('username: ',username,'password: ',password);
    console.log('checking Login Status');
  
    /*
    if(username !== undefined && username !== null) {
      this.setState({ logedin: true })
    } 
    */
  }

  render() {

    return (
      <div className='Xenia' id='Xenia'>

      <Navbar />
      
      <Switch>
        
        <Route path="/schedule">    <Schedule /><Footer/>   </Route>
        <Route path="/events">      <Events/><Footer/>      </Route>
        <Route path="/about-us">    <AboutUs /><Footer/>    </Route>
        <Route path="/contact-us">  <ContactUs /><Footer/>  </Route>
        <Route path='/cart'>        <Cart/><Footer/>        </Route>
        <Route path='/profile'>     <Profile/><Footer/>     </Route>
        <Route path="/">            <Home />                </Route>
      
      </Switch>
      
      <LoginPage />
      <SignupPage/>

      </div>
    );
  }
}

export default App;
