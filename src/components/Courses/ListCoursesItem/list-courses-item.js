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
            <View style={styles.item}>
              <Image source={{uri: `{$props.item.uri}`}} style={styles.image}/>
              <View style={styles.viewText}>
                <Text style={styles.darkText}>{props.item.title}</Text>
                <Text style={styles.darkText}>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} , ${props.item.released} , ${props.item.duration}`}</Text>
              </View>
            </View>
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