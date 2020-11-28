import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Course from '../../../Common/course'
import { createStackNavigator } from '@react-navigation/stack';
import CoursesDetail from '../../../CourseDetail/CourseDetail'

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator mode = "modal">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen 
        name="CoursesDetail" 
        component={CoursesDetail} 
        options={{
          title: 'Courses Detail',
          headerShown: false
        }}
      />
      <MainStack.Screen name="ListCourses" component={ListCourses} />
    </MainStack.Navigator>
  );
}
export default function SectionCoursesItem(props) {
  return (
    <Course item = {props.item}/>
  );
}
