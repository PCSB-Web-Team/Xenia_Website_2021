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

export const payAmount = (details, token) => {
  return axiosInstance.post("/payment", details, {
    headers: { Authorization: token },
  });
};

export const setRegisteredEvents = (details, token) => {
  return axiosInstance.post("/register-events", details, {
    headers: { Authorization: token },
  });
};

export const getAllEvents = () => {
  return axiosInstance.get("/events");
};

export const getEventDetails = (id) => {
  return axiosInstance.get(`/events/${id}`);
};

export const contactus = (data) => {
  return axiosInstance.post("/contact-us", data);
};
