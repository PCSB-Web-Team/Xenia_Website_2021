import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/LandingPage/LandingPage';
import Schedule from './Components/Registrations/Registrations';
import Events from './Components/Events/Events';
import EventDetail from './Components/Events/MoreInfo/MoreInfo';
import AboutUs from './Components/AboutUs/About';
import ContactUs from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/MainCart';
import Profile from './Components/Profile/Profile';
import WebTeam from './Components/WebTeam/WebTeam';
import Sponsors from './Components/Sponsors/Sponsors';
import { getLoggedInUser } from './Components/Config/api/User';
import './App.css';
import Background from './Components/BackGround/Background';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import axios from 'axios';
import { getEventData, loggedIn, storeToken } from './Store/Actions';
import { connect } from 'react-redux';

const App = (props) => {
	const getUserData = async () => {
		let userToken = localStorage.getItem('xeniaUserToken');

		const res = await getLoggedInUser(userToken);

		props.storeToken(userToken);

		props.loggedIn(res.data.data);
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="Xenia" id="Xenia">
			<Navbar />
			<Background />
			<Switch>
				<Route path="/schedule">
					{' '}
					<Schedule />
					<Footer />{' '}
				</Route>
				<Route path="/events/:id">
					{' '}
					<EventDetail />
					<Footer />{' '}
				</Route>
				<Route path="/events">
					{' '}
					<Events />
					<Footer />{' '}
				</Route>
				<Route path="/about-us">
					{' '}
					<AboutUs />
					<ContactUs />
					<Footer />{' '}
				</Route>
				<Route path="/cart">
					{' '}
					<Cart />
					<Footer />{' '}
				</Route>
				<Route path="/profile">
					{' '}
					<Profile />
					<Footer />{' '}
				</Route>
				<Route path="/sponsors">
					{' '}
					<Sponsors />
					<Footer />{' '}
				</Route>
				<Route path="/webteam">
					{' '}
					<WebTeam />
					<Footer />{' '}
				</Route>
				<Route path="/">
					{' '}
					<Home />{' '}
				</Route>
				
			</Switch>
		</div>
	);
};

const mapStatesToProps = (state) => {
	return {
		state: state,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		getEventData: (data) => {
			dispatch(getEventData(data));
		},
		loggedIn: (userdata) => {
			dispatch(loggedIn(userdata));
		},
		storeToken: (token) => {
			dispatch(storeToken(token));
		},
	};
};

export default connect(mapStatesToProps, mapActionsToProps)(App);
