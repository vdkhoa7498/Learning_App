import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';


export default function SectionCourses(props) {
  
  const renderListItem = () =>{
      // return porps.courses.map( item => <SectionCoursesItem navigation={props.navigation} item={item}/>);
      // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal = {true}>
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