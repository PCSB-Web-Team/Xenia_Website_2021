import axiosInstance from "../config";

export const getEvents = () => {
  return axiosInstance.get("/events");
};
