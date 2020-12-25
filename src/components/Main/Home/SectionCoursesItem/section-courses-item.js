import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Course from '../../../Common/ListCourses/course-item'
import { createStackNavigator } from '@react-navigation/stack';
import CoursesDetail from '../../../Common/CourseDetail/CourseDetail'


export default function SectionCoursesItem(props) {
  return (
    <Course navigation = {props.navigation} item = {props.item}/>
  );
    
}
