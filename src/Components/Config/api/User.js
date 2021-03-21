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

export const removeFromCart = (data, token) => {
  return axiosInstance.post(`user/remove-from-cart`, data, {
    headers: { Authorization: token },
  });
};
