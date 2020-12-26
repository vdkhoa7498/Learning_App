import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import {userInfoStore} from '../../../app/store'
import * as RootNavigation from '../../../../RootNavigation';

export default function LearnCourse(props) {

  
  const course = props.route.params.course


    const renderLearnWhat = () =>{
        
        return (course.learnWhat).map((item, index) => 
          <Text key={index}>{item}, 
          </Text>
        )
      }

    const renderListLesson = (lesson) =>{
        return (lesson).map((item) =>
            <View style={styles.itemLesson}>
                <TouchableOpacity >
                <View style={styles.viewText}>
                    <Text style={styles.darkText}>Title: {item.name}</Text>
                    <Text style={styles.darkText}>Content: {item.content}</Text>
                </View>
                </TouchableOpacity>
                
            </View>
        )
    }
    const renderSectionCourse = () =>{
        return (course.section).map((sectionCourse, index) =>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{sectionCourse.name}</Text>
                </View>
                <ScrollView horizontal = {true}>
                    {renderListLesson(sectionCourse.lesson) }
                </ScrollView>
            </View>
        )
    }
  
  return (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={{
            uri: course.imageUrl,
            }}
        />
        <Text>{course.title}</Text>
        <Text>{course.description}</Text>
        <Text>Learn What: {renderLearnWhat()}</Text>
        {/* {renderSectionCourse()} */}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLesson:{
    height: 200
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  textInput:{
    height: 40,
    marginTop: 20,
    width: 300,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1
  },
  btn:{
    height: 40,
    marginTop: 20,
    width: 300,
    backgroundColor: "#0061BD",
    alignItems: "center"
  },
  btnText:{
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
});