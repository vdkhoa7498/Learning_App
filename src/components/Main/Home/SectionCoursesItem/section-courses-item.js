import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {ScreenKey} from '../../../../globals/constants'
import * as RootNavigation from '../../../../../RootNavigation'

export default function SectionCoursesItem(props) {
  
  // console.log("section-item")
  const onPress = () =>{
    RootNavigation.navigate(ScreenKey.CourseDetail, {item: props.item.id})
    // console.log(props)
  }
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: `${props.item.courseImage}`}}/>
        <View style={styles.viewText}>
          <Text style={styles.darkText}>Title: {props.item.courseTitle}</Text>
          <Text style={styles.darkText}>Instructor: {props.item.instructorName}</Text>
        </View>
      </TouchableOpacity>
        
    </View>
);
}

const styles = StyleSheet.create({
item:{
    margin: 5,
    height: 200,
    width: 200,
    backgroundColor: 'lightgray',
},
viewText:{
  margin: 5
},
darkText:{
  color: 'darkgray'
},
image: {
  height: 120,
  width: 120
}
})