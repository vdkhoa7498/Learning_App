import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import SectionCourses from './SectionCourses/SectionCourses'

export default function Home() {

  return (
    <View style={styles.container}>
      <SectionCourses title='Continue learning'/>
      <SectionCourses title='Path'/>
      <SectionCourses title='Channel'/>
      <SectionCourses title='Bookmarks'/>
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
  item:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
});