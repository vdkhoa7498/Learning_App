import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {ScreenKey} from '../../../../globals/constants'
import * as RootNavigation from '../../../../../RootNavigation'
import { getCourseDetailApi } from '../../../../services/course-services';
import { useSelector } from "react-redux";

export default function SectionCoursesItem(props) {

  const userId = useSelector((state) => state.loginReducer.userInfo.id);
  const [course, setCourse] = useState()
  
  const onPress = () =>{
    RootNavigation.navigate(ScreenKey.CourseDetail, {item: props.item})
    // console.log(props)
  }

  useEffect(() => {
    getCourseDetailApi(props.item.id, userId)
    .then(response =>{
      setCourse()
      // console.log(response.data.payload)
    })
    .catch(error => console.log(error.response.message))
  })
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        {/* <Image style={styles.image} source={{uri: `${props.item.imageUrl}`}}/>
        <View style={styles.viewText}>
          <Text style={styles.darkText}>Title: {props.item.title}</Text>
          <Text style={styles.darkText}>Instructor: {props.item.instructorName}</Text>
        </View> */}
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