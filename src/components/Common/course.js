import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesDetail from '../CourseDetail/CourseDetail'



export default function Course(props){
  const onPress = () =>{
    props.navigation.navigate('CoursesDetail')
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
        width: 200,
        height: 200,
        backgroundColor: 'lightgray',
    },
    viewText:{
      margin: 5
    },
    darkText:{
      color: 'darkgray'
    },
    image: {
      height: 100
    }
  })