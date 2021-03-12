import React      from  'react';
import Navbar     from  './Components/Navbar/Navbar';
import LoginPage  from  './Auth/Login';
import SignupPage from  './Auth/Register';
import Home       from  './Components/LandingPage/LandingPage';
import Schedule   from  './Components/Registrations/Registrations';
import Events     from  './Components/Events/Events';
import AboutUs    from  './Components/AboutUs/About';
import ContactUs  from  './Components/Contact/Contact';
import Footer     from  './Components/Footer/Footer';
import Cart       from  './Components/Cart/Cart';
import Profile    from  './Components/Profile/Profile';
import styles     from  './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
  
    let eventDetails=[];

    axios
    .get('https://xenia-backend.herokuapp.com/api/events')
    .then(res => {
      
      console.log(res);

      if(res.data.ok) {
        eventDetails = res.data.data;
      }

    })
    .catch(err => {
      console.log(err)
    })

    let username = (localStorage.getItem('xeniausername'));
    let password = (localStorage.getItem('xeniapassword'));
  
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