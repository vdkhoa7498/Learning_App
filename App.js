import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/Home'
import ListCourses from './src/components/Courses/ListCourses/list-courses'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <ListCourses/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});