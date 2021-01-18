import axios from "../ultis/axios";

export function loginApi(email, password) {
  return axios.post("/user/login", {
    email,
    password,
  });
}

export function registerApi(username, email, phone, password) {
  return axios.post("/user/register", {
    username, 
    email, 
    phone, 
    password
  });
}

export function forgetPasswordApi(email) {
  return axios.post("/user/forget-pass/send-email", {
    email
  });
}


export function getInfoApi() {
  return axios.post("/user/me", {
  });
}