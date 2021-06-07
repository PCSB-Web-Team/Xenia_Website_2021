import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Notification.css";

toast.configure();

export const loginSuccess = () => {
  toast.success("Login Successfull", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const signUpSuccess = () => {
  toast.success("SignUp Successfull", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const signUpFail = () => {
  toast.error("SignUp Failed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const loginFail = () => {
  toast.error("Login Failed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const registrationSuccess = () => {
  toast.success("Registration Successfull", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const registrationFail = () => {
  toast.error("Registration Failed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const invalidCredentials = () => {
  toast.error("Invalid Credentials", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const registrationsClosed = () => {
  toast.info("Registrations Closed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const addToCartSuccess = () => {
  toast.success("Successfully added to cart", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const addToCartFail = () => {
  toast.error("Failed to add to cart", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const removedFromCart = () => {
  toast.success("Successfully removed from cart", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const removeFromCartFail = () => {
  toast.error("Failed to remove from cart", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const loggedOut = () => {
  toast.success("Logged Out", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const instruction = () => {
  toast.info("Instruction", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 6000,
  });
};

export const changedSuccessFully = () => {
  toast.success("Password Changed Successfully", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};
