import axios from "../ultis/axios";

export function getAllCategoryApi() {
  
  return axios.get("/category/all");
}

export function getCategoryApi(id) {
  
    return axios.get(`/category/all/${id}`);
  }