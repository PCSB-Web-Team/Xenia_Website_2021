export default function validateInfo(values, signup) {
	if (signup === false) {
		let errors = { isError: false };
		if (!values.email) {
			errors.isError = true;
			errors.email = 'Email is  required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.isError = true;
			errors.email = 'Email address is invalid';
		}
		if (!values.password) {
			errors.isError = true;
			errors.password = 'Password is required';
		} else if (values.password.length < 8) {
			errors.isError = true;
			errors.password = 'Password needs to be 8 characters or more';
		}
		return errors;
	} else {
		let errors = { isError: false };
		if (!values.name.trim()) {
			errors.isError = true;
			errors.name = 'Name is required';
		}
		if (!values.email) {
			errors.isError = true;
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.isError = true;
			errors.email = 'Emailis invalid';
		}
		if (!values.password) {
			errors.isError = true;
			errors.password = 'Password is required';
		} else if (values.password.length < 8) {
			errors.isError = true;
			errors.password = 'Password needs to be 8 characters or more';
		}

		if (!values.password2) {
			errors.isError = true;
			errors.password2 = 'Password is required';
		} else if (values.password2 !== values.password) {
			errors.isError = true;
			errors.password2 = 'Passwords do not match';
		}
		if(!values.phone) {
			errors.isError = true;
			errors.phone = 'Mobile is Required'
		} else if(values.phone.length !== 10) {
			errors.isError = true;
			errors.phone = 'Mobile No. is Invalid';
		}
		if(!values.college) {
			errors.isError = true;
			errors.college = 'College is Required';
		}
		return errors;
	}
}
