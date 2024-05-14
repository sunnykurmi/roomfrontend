import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090/",
  withCredentials: true,
});

export default instance;
