import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';


export default function SectionCourses(props) {

  const renderListItem = (courses) =>{
    return courses.map( (item, index) => 
      <SectionCoursesItem key ={index} navigation={props.navigation} item={item}/>
    );

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView horizontal = {true}>
          {renderListItem(props.courses) }
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