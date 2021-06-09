import React, { useState, useRef } from 'react';
import './Contact.css';
import { contactus } from '../Config/api/User';
import ThemeButton from '../Button/button';
import { formSubmitted } from '../Notifications/Notification';
import ReCaptcha from 'react-google-recaptcha';

const Contact = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const reRef = useRef();

	const Submit = async (e) => {
		e.preventDefault();

		const captchaToken = await reRef.current.executeAsync();
		reRef.current.reset();

		const data = { name, phone, email, message, captchaToken };
		const res = await contactus(data);

		if (res.data.ok) {
			formSubmitted();

			setName('');
			setPhone('');
			setEmail('');
			setMessage('');
		}
	};

	return (
		<div className="contactUs mb-4">
			<ReCaptcha
				sitekey="6LdGoAsbAAAAAOcbfOr4ltW1gx9wrT-ebYRtBd-G"
				size="invisible"
				ref={reRef}
			/>
			<div className="contactForm mb-4">
				<h1>Send us a message</h1>
				<form onSubmit={Submit} id="contactUsForm">
					<input
						type="text"
						placeholder="Your Name"
						id="nameInputId"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="contactFill"
						required={true}
					></input>
					<input
						type="email"
						placeholder="Email"
						id="emailInputId"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="contactFill"
						required={true}
					></input>
					<input
						type="number"
						min="7000000000"
						max="9999999999"
						placeholder="Phone"
						id="phoneInputId"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="contactFill"
					></input>
					<textarea
						placeholder="Message"
						id="messageInputId"
						className="contactFill"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>

					<button type="submit" className="themeButtCont">
						<ThemeButton value="Submit" />
					</button>
				</form>
			</div>

			<div className="contactInfo mb-4">
				<h1>Contact info</h1>
				<div className="address">
					<h3>Where to find us</h3>
					<p>Survey no. 27,</p>
					<p>Near Trimurti Chowk,</p>
					<p>Bharati Vidyapeeth Campus,</p>
					<p>Dhankawadi,Pune-411043</p>
				</div>
				<div className="phoneAndMail">
					<h3>Phone and Mail</h3>
					<p>
						<i className="fa fa-phone"></i>{' '}
						<span style={{ marginLeft: '5px' }}>+91 9922772959 </span>
					</p>
					<p>
						<i className="fa fa-envelope"></i>{' '}
						<span style={{ marginLeft: '5px' }}> abc@mail.com</span>
					</p>
				</div>
				<div className="socialMedia">
					<h3>Social Links</h3>
					<p className="text-light">
						<a
							href="http://www.instagram.com/csipict"
							target="_blank"
							rel="noreferrer"
						>
							{' '}
							<i
								className="fa fa-instagram"
								ariaHidden="true"
							></i>
						</a>
						<a
							href="http://www.facebook.com/csipict"
							target="_blank"
							rel="noreferrer"
						>
							<i
								className="fa fa-facebook-official"
								ariaHidden="true"
							></i>
						</a>
						<a
							href="http://www.linkedin.com/company/pict-csi"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fa fa-linkedin" ariaHidden="true"></i>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
