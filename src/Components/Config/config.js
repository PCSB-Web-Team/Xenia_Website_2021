import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://xeniabackend.herokuapp.com/api",
});

export default axiosInstance;
