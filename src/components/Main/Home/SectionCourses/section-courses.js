import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';
import {tokenStore} from '../../../../app/store'

export default function SectionCourses(props) {

  const token = tokenStore.getState();
  const [courses, setCourses] = useState([])

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org" + props.route, requestOptions)
      .then(response => response.text())
      .then(result => {setCourses(JSON.parse(result).payload);})
      .catch(error => console.log('error', error));
  })
  
  const renderListItem = () =>{
    
    return courses.map( (item, index) => <SectionCoursesItem key ={index} navigation={props.navigation} item={item}/>);
      // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView horizontal = {true}>
          {renderListItem() }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});