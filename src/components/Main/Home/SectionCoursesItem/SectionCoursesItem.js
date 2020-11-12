import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function SectionCoursesItem(props) {
  return (
    <View style={styles.item}>
      <Image source={require('../../../../../assets/icon.png')} style={styles.image}/>
      <View style={styles.viewText}>
        <Text style={styles.darkText}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text style={styles.darkText}>{`${props.item.level} , ${props.item.released} , ${props.item.duration}`}</Text>
      </View>
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