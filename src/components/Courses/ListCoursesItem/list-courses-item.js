import React from'react';
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import Course from '../../Common/course'

export default function ListCoursesItem(props){
    return (
        <TouchableOpacity
            style = {styles.item}
            onPress={() => {
                Alert.alert('Pressed on List Item')
            }}
        >
            <Course item={props.item} />
        </TouchableOpacity>
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