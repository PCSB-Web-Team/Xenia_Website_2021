import React from "react";
import styles from "./App.css";
import "./Navbar/Navbar.css";
import Cards from "./Events/Events.js";
import Registrations from "./Registrations/Registrations/Registrations.js";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/About";
import Contact from "./Contact/Contact";
import BG from './bg1.jpg';
import Store from './Store/Store';
import Dashboard from './Dashboard/DashboardMain'
import LightSpeed from "react-reveal/LightSpeed";
import Domains from './Domains/Domains';
import Planet from './LandingPage2/plane';
// import Contact from './Contact/Contact';
import LoginPage from './Auth/Login';
import SignupPage from './Auth/Register';

class App extends React.Component {


    // fake authentication Promise
    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 1)) // 2 seconds
      }
    
    componentDidMount(){
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
      })
    }



  constructor(props) {
    super(props);
    
    this.state = {

      view: "home",
      popLogin: false,
      popSignUp: false,
      logedin: false,
  
    };
  
  }

  handleLogin   = () => { this.setState({popLogin: true}) }
  handleLogedin = () => { this.setState({logedin: true}) }
  closeLogin    = () => { this.setState({popLogin: false}) }

  handleSignUp  = () => { this.setState({popSignUp: true}) }
  handleSignedUp= () => { this.setState({logedin: true}) }
  closeSignUp   = () => { this.setState({popSignUp: false}) }

  handleLogout= () => {  
    Store.dispatch({
      type: 'logedout'
    })
    this.setState({logedin: Store.getState().login})
    console.log(Store.getState())
  }

  handleView = (e) => { this.setState({ view: e.target.id }) }

  render() {
    return (
      <div className="Xenia" id='Xenia'>
        
        {this.state.view!=='home' ? <div className='bg-div'><img className='main-bg' src={BG}></img></div> : null}
        
        <Navbar 
          changeTab = {this.handleView.bind(this) } 
          activeTab = {this.state.view} handleLogin = {this.handleLogin.bind(this)} 
          handleSignUp = {this.handleSignUp} handleLogout={this.handleLogout} 
          login={this.state.logedin} 
        />
        
        {this.state.view === "home"     ? ( <div> <LandingPage /> {/*<Registrations />*/} </div> ) : null}
        {this.state.view === "events"   ?  <Cards logedin={this.state.logedin} />  : null }
        {this.state.view === "aboutus"  ?  <AboutUs /> : null }
        {this.state.view === "contact"  ?  <Contact/>  : null }
        {this.state.view === 'profile' ?   <Dashboard></Dashboard> : null}
        {this.state.view !== 'home'     ?  <Footer />  : null }
        
        
        <LoginPage 
          openLogin = {this.state.popLogin} 
          handleLogedin = {this.handleLogedin.bind(this)} 
          closeLogin = {this.closeLogin.bind(this)}
        />

        <SignupPage 
          openSignUp = {this.state.popSignUp} 
          handleSignedUp = {this.handleSignedUp.bind(this)} 
          closeSignUp = {this.closeSignUp.bind(this)}
        />
      
            {/* 
            <div className='particles'>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            <div className='circleContainer'>
                <div className='circle'></div>
            </div>
            </div>
            */}

      </div>
    );
  }
}

export default App;
