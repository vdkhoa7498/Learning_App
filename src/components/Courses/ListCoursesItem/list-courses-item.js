import React from'react';
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { ScreenKey } from "../../../globals/constants";
import Course from '../../Common/ListCourses/course-item'

export default function ListCoursesItem(props){
  const onPress = () =>{
    console.log("click")
    // props.navigation.navigate(ScreenKey.CourseDetail, {item: props.item})
  }


    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{uri: `${props.item.uri}`}} style={styles.image}/>
          <View style={styles.viewText}>
            <Text style={styles.darkText}>{props.item.title}</Text>
            <Text style={styles.darkText}>{props.item.author}</Text>
            <Text style={styles.darkText}>{`${props.item.level} , ${props.item.released} , ${props.item.duration}`}</Text>
          </View>
        </TouchableOpacity>  
    </View>
    );
}

const styles = StyleSheet.create({
    item:{
        margin: 5,
        height: 200,
        backgroundColor: 'lightgray',
        flex:1,
        flexDirection: 'row'
    },
    viewText:{
      margin: 5,
    },
    darkText:{
      color: 'darkgray'
    },
    image: {
      height: 200,
      width: 200
    }
  })