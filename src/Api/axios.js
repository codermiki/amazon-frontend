import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-backend-api-71jy.onrender.com/",
});

export { axiosInstance };
