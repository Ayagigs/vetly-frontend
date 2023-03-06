import axios from "axios";


export const APIConfig = axios.create({
  baseURL: "https://vetly-backend-production.up.railway.app/api/v1/",
});


