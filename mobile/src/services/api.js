import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.43:3111"
});

export default api;
