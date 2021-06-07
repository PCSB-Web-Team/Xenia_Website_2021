import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://xenia-backend.herokuapp.com/api",
});

export default axiosInstance;
