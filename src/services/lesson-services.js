import axios from "../ultis/axios";

export function getDetailLessonApi(courseId, lessonId) {
  
  return axios.get("/lesson/detail/",courseId,"/",lessonId, {
      courseId,
      lessonId
  });
}

export function getVideoLessonApi(courseId, lessonId) {
  
    return axios.get("/lesson/detail/",courseId,"/",lessonId, {
        courseId,
        lessonId
    });
  }

  export function getSubtitleLessonApi(courseId, lessonId) {
  
    return axios.get("/lesson/detail/",courseId,"/",lessonId, {
        courseId,
        lessonId
    });
  }

  export function updateStatusLessonApi(lessonId) {
  
    return axios.post("/lesson/update-status", {
        lessonId
    });
  }

  export function updateCurrentTimeLessonApi(lessonId, currentTime) {
  
    return axios.put("/lesson/update-current-time-learn-video", {
        lessonId,
        currentTime
    });
  }
  