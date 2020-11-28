import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses'
import CoursesDetail from './src/components/CourseDetail/CourseDetail'
import ImageButton from '../../Common/image-button'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator mode = "modal">
      <MainStack.Screen 
        name="CoursesDetail" 
        component={CoursesDetail} 
        options={{
          title: 'Courses Detail',
          headerShown: false
        }}
      />
    </MainStack.Navigator>
  );
}

export default function Browse() {

  const onPressNewReleases = () => {
    console.log('Pressed on New Releases')
  }

  return (
    <ScrollView>
      <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
      <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
      <ScrollView horizontal = {true}>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
      </ScrollView>
      <SectionCourses title='Continue learning'/>
      <SectionCourses title='Path'/>
      <SectionCourses title='Channel'/>
      <SectionCourses title='Bookmarks'/>
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