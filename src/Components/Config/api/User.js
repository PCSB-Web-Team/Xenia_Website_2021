import axiosInstance from "../config";
export const register = (data) => {
  return axiosInstance.post("/user/register", data);
};

export const login = (data) => {
  return axiosInstance.post("/user/login", data);
};

export const getLoggedInUser = (token) => {
  return axiosInstance.get("/user/me", {
    headers: { Authorization: token },
  });
};

export const addToCartBackend = (data, token) => {
  return axiosInstance.post(`user/add-to-cart`, data, {
    headers: { Authorization: token },
  });
};

export const removeFromCartBackend = (data, token) => {
  return axiosInstance.post(
    `user/remove-from-cart`,
    { eventId: data },
    {
      headers: { Authorization: token },
    }
  );
};

export const setRegisteredEvents = (data, token) => {
  return axiosInstance.post(
    `/user/register-event`,
    { eventId: data },
    {
      headers: { Authorization: token },
    }
  );
};

export const getAllEvents = () => {
  return axiosInstance.get("/events");
};

export const getBuildUpEvents = () => {
  return axiosInstance.get("/build-up-events");
};

export const getEventDetails = (id) => {
  return axiosInstance.get(`/events/${id}`);
};

export const contactus = (data) => {
  return axiosInstance.post("/contact-us", data);
};

export const forgotPassword = (data) => {
  return axiosInstance.post("/user/forgot-password", data);
};

export const resetPassword = (id, token, data) => {
  return axiosInstance.post(`/user/reset-password/${id}/${token}`, data);
}