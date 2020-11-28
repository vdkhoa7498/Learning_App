import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Course from '../../../Common/course'
import { createStackNavigator } from '@react-navigation/stack';
import CoursesDetail from '../../../CourseDetail/CourseDetail'


export default function SectionCoursesItem(props) {
  return (
    <>
      <MainStackScreen/>
      <Course item = {props.item}/>
    </>
  );
    
}
