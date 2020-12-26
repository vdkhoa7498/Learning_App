import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses'

export default function Home(props) {

  return (
    <ScrollView>
      <SectionCourses route="/user/get-process-courses" navigation={props.navigation} title='Khoá học của tôi'/>
      <SectionCourses route="/user/get-favorite-courses" navigation={props.navigation} title='Khoá học yêu thích của tôi'/>
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