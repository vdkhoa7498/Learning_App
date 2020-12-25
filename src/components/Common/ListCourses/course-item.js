import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Course(props){
  const onPress = () =>{
    props.navigation.push("CoursesDetail", {item: props.item})
  }

    return (
        <View style={styles.item}>
          <TouchableOpacity onPress={onPress}>
            <Image style={styles.image} source={{uri: `${props.item.imageUrl}`}}/>
            <View style={styles.viewText}>
              <Text style={styles.darkText}>{props.item.title}</Text>
              <Text style={styles.darkText}>{props.item.subtitle}</Text>
              <Text style={styles.darkText}>{props.item.description}</Text>
              <Text style={styles.darkText}>{`${props.item.level} , ${props.item.released} , ${props.item.duration}`}</Text>
              <Text>{props.item.subtitle}</Text>
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
    },
    viewText:{
      margin: 5
    },
    darkText:{
      color: 'darkgray'
    },
    image: {
      height: 100,
      width: 100
    }
  })