import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CourseItem from './course-item';


export default function ListCoursesResult(props) {

  const keyword = props.route.params.keyword;
  const [attribute, setAttribute] = useState("price");
  const [rule, setRule] = useState("ASC");
  const [category, setCategory] = useState([]);
  const [searchList, setSearchList] = useState([]);
  
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"keyword":keyword,"opt":{"sort":{"attribute":attribute,"rule":rule},"category":category,"time":[{"min":0,"max":1},{"min":3,"max":6}],"price":[{"max":0},{"min":0,"max":200000},{"min":500000,"max":1000000}]},"limit":10,"offset":1});

    // var raw = JSON.stringify({"keyword":"test","opt":{"sort":{"attribute":"price","rule":"ASC"},"category":[],"time":[{"min":0,"max":1},{"min":3,"max":6}],"price":[{"max":0},{"min":0,"max":200000},{"min":500000,"max":1000000}]},"limit":10,"offset":1});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    

  const renderListItem = () =>{

    fetch("http://api.dev.letstudy.org/course/search", requestOptions)
    .then(response => response.text())
    .then(result => {
      setSearchList(JSON.parse(result.payload.rows))
      console.log('okela',JSON.parse(result))
      return (searchList==[])? searchList.map( (item, index) => <CourseItem key={index} navigation={props.navigation} item={item}/>)
      : <Text>Không có kết quả tìm kiếm nào</Text>
      // props.navigation.navigate(ScreenKey.ListCourses, {data: searchList})
    })
    .catch(error => console.log('error', error));

      
    // console.log(props.route.params.data)
      // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal = {false}>
          {renderListItem() }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});