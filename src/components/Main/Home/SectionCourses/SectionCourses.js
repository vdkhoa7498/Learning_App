import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/SectionCoursesItem'
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
    }
  ]

  const renderListItem = (courses) =>{
      return courses.map(<SectionCoursesItem item={item}/>)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{this.props.title}</Text>
      </View>
      <ScrollView>
          {renderListItem() }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});