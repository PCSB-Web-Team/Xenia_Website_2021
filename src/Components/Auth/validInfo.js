export default function validateInfo(values, signup) {
  let errors = { errorFound: false };
  if (signup === false) {
    if (!values.email) {
      errors.email = "Email is Required";
      errors.errorFound = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email Address is Invalid";
      errors.errorFound = true;
    }
    if (!values.password) {
      errors.password = "Password is required";
      errors.errorFound = true;
    } else if (values.password.length < 8) {
      errors.password = "Password Needs to be 8 Characters or More";
      errors.errorFound = true;
    }

    console.log("validinfo: ", errors);
    return errors;
  } else {
    if (!values.name.trim()) {
      errors.name = "Username is Required";
      errors.errorFound = true;
    }

    if (!values.email) {
      errors.email = "Email is Required";
      errors.errorFound = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email Address is Invalid";
      errors.errorFound = true;
    }
    if (!values.password) {
      errors.password = "Password is Required";
      errors.errorFound = true;
    } else if (values.password.length < 8) {
      errors.password = "Password Needs to be 8 Characters or More";
      errors.errorFound = true;
    }

    if (!values.password2) {
      errors.password2 = "Password is Required";
      errors.errorFound = true;
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not Match";
      errors.errorFound = true;
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone No. is Required";
      errors.errorFound = true;
    } else if (
      parseInt(values.phone) < 7000000000 ||
      parseInt(values.phone) > 10000000000
    ) {
      errors.phone = "Invalid Phone Number";
      errors.errorFound = true;
    }
    if (!values.college.trim()) {
      errors.college = "College is Required";
      errors.errorFound = true;
    }

    return errors;
  }
}
