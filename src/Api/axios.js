import axios from "axios";

const axiosInstance = axios.create({
  // localhost address
  // baseURL: "http://localhost:5000/",
  baseURL: "https://amazon-backend-api-71jy.onrender.com/",
});

export { axiosInstance };
