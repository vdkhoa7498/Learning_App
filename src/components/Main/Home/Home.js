import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses'

export default function Home(props) {

  return (
    <ScrollView>
      <SectionCourses navigation={props.navigation} title='Continue learning'/>
      <SectionCourses navigation={props.navigation} title='Path'/>
      <SectionCourses navigation={props.navigation} title='Channel'/>
      <SectionCourses navigation={props.navigation} title='Bookmarks'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
});