import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses'
import CoursesDetail from '../../CourseDetail/CourseDetail'
import ImageButton from '../../Common/image-button'

export default function Browse(props) {

  const onPressNewReleases = () => {
    console.log('Pressed on New Releases')
  }

  return (
    <ScrollView>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='NEW REALESE' onPress={onPressNewReleases()}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
      <ScrollView horizontal = {true}>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='CONFERENCES' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='CERTIFICATIONS' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='<Software> DEVELOPMENT' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='IT' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='Information and CYBER SECURITY' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='DATA PROFESSIONAL' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='BUSINESS PROFESSIONAL' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='Creative PROFESSIONAL' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
      </ScrollView>
      <SectionCourses navigation={props.navigation} title='Continue learning'/>
      <SectionCourses navigation={props.navigation} title='Path'/>
      <SectionCourses navigation={props.navigation} title='Channel'/>
      <SectionCourses navigation={props.navigation} title='Bookmarks'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgaebtnlarge:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
  imagebtnsmall:{
      margin: 2,
      width: 200
  }
});