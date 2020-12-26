import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CourseItem from './course-item';


export default function SectionCourses(props) {
  
  const renderListItem = () =>{
      return props.route.params.data.map( (item, index) => <CourseItem key={index} navigation={props.navigation} item={item}/>);
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