import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { searchApi } from '../../../../services/course-services';
import CourseItem from './course-item';


export default function ListCoursesResult(props) {

  const keyword = props.route.params.keyword;
  const [attribute, setAttribute] = useState("price");
  const [rule, setRule] = useState("ASC");
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(0);
  
  
  const renderListItem = () =>{
    searchApi(keyword, attribute, rule, category)
    .then(function (response) {
      // console.log(response.data.payload.rows);
      setCount(response.data.payload.count)
      return response.data.payload.rows.map( (item, index) => <CourseItem key={index} item={item}/>)
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Kết quả tìm kiếm</Text>
      </View>
      <ScrollView horizontal = {false}>
        <Text>Có {count} kết quả tìm kiếm</Text>
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
  },
  title:{
    marginTop: 50,
    fontSize: 20
  }
});