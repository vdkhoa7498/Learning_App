import axios from "../ultis/axios";

export function getFreeCourseApi(courseId) {
  
  return axios.post("/payment/get-free-courses", {
      courseId
  });
}

export function getCourseInfoApi(courseId) {
  
    return axios.get(`/payment/get-course-info/${courseId}`);
  }