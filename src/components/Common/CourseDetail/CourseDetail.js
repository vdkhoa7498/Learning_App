import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CoursesDetail(props){
    const item = props.route.params.item
    return (
        <View style={styles.container}>
            <Image source={{uri: `${item.imageUrl}`}} style={styles.image}/>
            <View style={styles.viewText}>
              <Text style={styles.darkText}>{item.title}</Text>
              <Text style={styles.darkText}>{item.subtitle}</Text>
              <Text style={styles.darkText}>{item.price}</Text>
              <Text style={styles.darkText}>{item.description}</Text>
              <Text style={styles.darkText}>{item.learnWhat}</Text>
              <Text style={styles.darkText}>{`${item.level} , ${item.released} , ${item.totalHours}`}</Text>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        backgroundColor: '#fff',
        alignContent: "center",
        justifyContent: "center"
    },
    viewText:{
      margin: 5
    },
    darkText:{
      color: 'darkgray'
    },
    image: {
      width: 300,
      height: 200
    }
  })