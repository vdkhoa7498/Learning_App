
export default function searchApi (keyword, attribute, rule, category ) { 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"keyword":keyword,"opt":{"sort":{"attribute":attribute,"rule":rule},"category":category,"time":[{"min":0,"max":1},{"min":3,"max":6}],"price":[{"max":0},{"min":0,"max":200000},{"min":500000,"max":1000000}]},"limit":10,"offset":1});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch("http://api.dev.letstudy.org/course/search", requestOptions)
}
  