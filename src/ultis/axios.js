import Axios from "axios";
import {tokenStore} from '../app/store'

let axios = Axios.create({
  baseURL: "http://api.dev.letstudy.org",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token

  let token = tokenStore.getState();
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axios;
