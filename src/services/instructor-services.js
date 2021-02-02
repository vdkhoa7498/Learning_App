import axios from "../ultis/axios";

export function getAllInstructorApi() {
  
  return axios.get("/instructor");
}

export function getInstructorApi(id) {
  
    return axios.get(`/instructor/detail/${id}`);
  }