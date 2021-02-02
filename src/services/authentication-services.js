import axios from "../ultis/axios";

export function loginApi(email, password) {
  
  return axios.post("/user/login", {
    email,
    password,
  });
}

export function loginGoogleApi(email, id) {
  
  return axios.post("/user/login-google-mobile", {
    user: {
      email,
      password,
    }
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
  return axios.get("/user/me");
}

export function getUserIdApi() {
  return axios.get(`/user/forget-pass/jwt/${token}`);
}

export function updateProfileApi(name, avatar, phone) {
  return axios.put("/user/update-profile", {
    name, 
    avatar, 
    phone
  });
}

export function changeEmailApi(newEmail) {
  return axios.put("/user/change-user-email", {
    newEmail
  });
}

export function updateFavoriteCategoriesApi(categoryIds) {
  return axios.put("/user/update-favorite-categories", {
    categoryIds
  });
}

export function getRecommendCourseApi(id, limit, offset) {
  return axios.get(`/user/recommend-course/${id}/${limit}/${offset}`);
}

export function likeCourseApi(courseId) {
  return axios.post("/user/like-course", {
    courseId
  });
}

export function getCourseLikeStatusApi(courseId) {
  return axios.get(`/user/get-course-like-status/${courseId}`);
}

export function getProcessCoursesApi() {
  return axios.get(`/user/get-process-courses`);
}

export function getFavoriteCoursesApi() {
  return axios.get(`/user/get-favorite-courses`);
}

export function getIntroPageApi() {
  return axios.get(`/user/intro-page`);
}

export function getCheckOwnCourseApi(courseId) {
  return axios.get(`/user/check-own-course/${courseId}`);
}