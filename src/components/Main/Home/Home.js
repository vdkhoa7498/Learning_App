import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SectionCourses from './SectionCourses/SectionCourses'
import ImageButton from '../../Common/image-button'

export default function Home() {

  return (
    <ScrollView>
      <ImageButton title='NEW/nREALESE'/>
      <SectionCourses title='Continue learning'/>
      <SectionCourses title='Path'/>
      <SectionCourses title='Channel'/>
      <SectionCourses title='Bookmarks'/>
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