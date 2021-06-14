import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.pcsbxenia.com/api",
});

export default axiosInstance;
