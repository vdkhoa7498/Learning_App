import Axios from "axios";
import * as SecureStore from 'expo-secure-store';

const axios = Axios.create({
  
  baseURL: "http://api.dev.letstudy.org",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(async function (config) {
  //get token
  var token
  try {
    token = await SecureStore.getItemAsync('token');
    console.log('get token', token)
  } catch (e) {
    console.log(e);
  }
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axios;
