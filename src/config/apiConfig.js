import axios from "axios";
import { getUserToken } from "../utils";

export const APIConfig = axios.create({
  baseURL: "https://vetly-backend-production.up.railway.app/api/v1/",
});

APIConfig.interceptors.request.use(
  (config) => {
    const userToken = getUserToken();
    if (userToken) {
      config.headers["Authorization"] = "Bearer " + userToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
