import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem';

export default function SectionCourses(props) {
  const courses = [
      {
          id: 1,
          title: "Android",
          author: "Hai Pham",
          level: "Advance",
          released: "Nov 6, 2020",
          duration: "30 hours"
      },
      {
        id: 2,
        title: "IOS",
        author: "Hai Pham",
        level: "Advance",
        released: "Nov 6, 2020",
        duration: "30 hours"
    },
    {
      id: 3,
      title: "React Native",
      author: "Hai Pham",
      level: "Advance",
      released: "Nov 6, 2020",
      duration: "30 hours"
  }
  ]

  const renderListItem = () =>{
      return courses.map( item => <SectionCoursesItem item={item}/>);
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