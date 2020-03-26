import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4843"
});

export default api;
