import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Course from '../../../Common/course'

export default function SectionCoursesItem(props) {
  return (
    <Course item = {props.item}/>
  );
}
