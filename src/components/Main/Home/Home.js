import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

export default function Home(props) {

  return (
    <ScrollView>
      {/* <ListCourses navigation={props.navigation} courses= {courses}/> */}
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