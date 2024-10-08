import axios from "axios";

export const baseURL = "http://185.159.109.246:8080";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
