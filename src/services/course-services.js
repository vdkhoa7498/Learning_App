import axios from "../ultis/axios";

export function getTopSellApi(limit, page) {
  return axios.post("/course/top-sell", {
    limit,
    page,
  });
}

export function getTopNewApi(limit, page) {
    return axios.post("/course/top-new", {
      limit,
      page,
    });
  }

  export function getTopRateApi(limit, page) {
    return axios.post("/course/top-rate", {
      limit,
      page,
    });
  }
  
  export function getFavoriteCoursesApi(userId) {
    return axios.post("/course/courses-user-favorite-categories", {
        userId
    });
  }


  export function getDetailWithLessonApi(courseId) {
    return axios.get(`/course/detail-with-lesson/${courseId}`);
  }
  

  export function getProcessCoursesApi(courseId) {
    return axios.get(`/course/process-course/${courseId}`);
  }
  

  export function getLastWatchedLessonApi(courseId) {
    return axios.get("/course/last-watched-lesson/",courseId, {
        courseId
    });
  }

  
  export function ratingCourseApi(courseId, formalityPoint, contentPoint, presentationPoint, content) {
    return axios.post("/course/rating-course", {
        courseId: courseId,
        formalityPoint: formalityPoint,
        contentPoint: contentPoint,
        presentationPoint: presentationPoint,
        content: content
    });
  }

  export function getRatingApi(courseId) {
    return axios.get("/course/get-rating/",courseId, {
        courseId
    });
  }

  export function reportCourseApi(courseId, content, subject) {
    return axios.post("/course/report-course", {
        courseId: courseId,
        content: content,
        subject: subject,
    });
  }

  export function searchApi(keyword, attribute, rule, category) {
    return axios.post("/course/report-course", {
        keyword: keyword,
        opt: {
            sort: {
            attribute: attribute,
            rule: rule
            },
            category: category
            ,
            time: [
            {
                min: 0,
                max: 1
            },
            {
                min: 3,
                max: 6
            }
            ],
            price: [
            {
                max: 0
            },
            {
                min: 0,
                max: 200000
            },
            {
                min: 500000,
                max: 1000000
            }
            ]
        },
        limit: 10,
        offset: 1
    });
  }

  export function getSearchHistory() {
    return axios.get("/course/search-history", {
        
    });
  }

  export function deleteSearchHistory(id) {
    return axios.delete("/course/delete-search-history/",id, {
        id: id
    });
  }