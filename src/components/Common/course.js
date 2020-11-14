import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

export default function Course(props){
    return (
        <View style={styles.item}>
            <Image source={{uri: 'https://miro.medium.com/max/700/1*QDQvlCg420lzRElCK4AYhw.png'}} style={styles.image}/>
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