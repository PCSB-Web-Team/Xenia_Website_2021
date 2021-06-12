import React, { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { changedSuccessFully } from '../Notifications/Notification';
import './reset.css';
import ThemeButton from '../Button/button';
import astro from '../../Assets/Images/astronaut.png';
import { resetPassword } from '../Config/api/User';

const Form = () => {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [error, seterror] = useState(null);
	const [success, setSuccess] = useState(false);
	const [view1, setView1] = useState(false);
	const [view2, setView2] = useState(false);

    const params = useParams();

	const ValidatePasswords = () => {
        if(password1.length < 8) {
            seterror('password must be 8 characters long');
            return false;
        }
		else if (password1 !== password2) {
            seterror('both passwords should match');
			return false;
		} else {
            seterror('');
			return true;
		}
	};

	const handleSubmit = async(e) => {
		e.preventDefault();

		if (ValidatePasswords()) {
            const response = await resetPassword(params.id, params.token, {password: password1});
            if(response.data.ok) {
                setSuccess(true);
                changedSuccessFully();
            } else {
                console.log(response);
            }
		}
	};

	return (
		<div className="reset-password">
			<div className="form-box">
				{success ? (
					<div>
						<Redirect to="/" />
					</div>
				) : (
					<div>
						<div className="resetPassHead">
							<img src={astro} alt="astro"/>
							<p>Reset Password</p>
						</div>
						<label>New Password</label>
						<div>
							<input
								type={!view1 ? 'password' : 'text'}
								id="pass1"
								value={password1}
								onChange={(e) => setPassword1(e.target.value)}
							></input>
							<i
								className={!view1 ? 'fa fa-eye' : 'fa fa-eye-slash'}
								onClick={() => setView1(!view1)}
							></i>
						</div>
						<label>Confirm Password</label>
						<div>
							<input
								type={!view2 ? 'password' : 'text'}
								id="pass2"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
							></input>
							<i
								className={!view2 ? 'fa fa-eye' : 'fa fa-eye-slash'}
								onClick={() => setView2(!view2)}
							></i>
						</div>

						<div className="alerts">
							<span className="error">{error}</span>
						</div>

						<div className="button-group">
							<Link to="/">
								<ThemeButton value="Cancel" />
							</Link>
							<ThemeButton
								onClick={handleSubmit}
								value="Submit"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Form;
