import axios from  'axios'

export const getCourseDetailApi_ = (courseId, userId) =>
{
var config = {
  method: 'get',
  url: `http://api.dev.letstudy.org/course/get-course-detail/${courseId}/${userId}`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlmM2M3OTYyLTg4Y2MtNDY1Zi04OGZjLTNhNDZjMDRjZDUwMSIsImlhdCI6MTYxMTQ3MTA5MiwiZXhwIjoxNjExNDc4MjkyfQ.ZVM_uaXyozhxC8NC0x0-YzRllfv6aZccdrhVC8p02Ws'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.parse(JSON.stringify(response.data.payload)));
})
.catch(function (error) {
  console.log(error);
});
}