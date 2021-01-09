import React, { useState, useEffect, useCallback, useRef } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import {tokenStore, userInfoStore} from '../../../app/store'
import * as RootNavigation from '../../../../RootNavigation'
import { Video } from 'expo-av';
import { ScreenKey } from '../../../globals/constants';


export default function CoursesDetail(props){
  const token = tokenStore.getState();
  const userInfo = userInfoStore.getState();
  const course = props.route.params.item;
  const [love, setLove] = useState();
  const [likeStatus, setLikeStatus] = useState();
  const [isOwnCourse, setIsOwnCourse] = useState();
  const [ownCourseStatus, setOwnCourseStatus] = useState();

  var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"courseId":String(course.id)});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

  useEffect(()=>{
    
    var requestOptionsGet = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/user/check-own-course/" + String(course.id), requestOptionsGet)
      .then(response => response.text())
      .then(result => {
        
        if(JSON.parse(result).payload.isUserOwnCourse){
          setOwnCourseStatus("Vào học");
          setIsOwnCourse(true);
        } else{
          setOwnCourseStatus("Đăng ký")
          setIsOwnCourse(false);
        }
      })
      .catch(error => console.log('error', error));

    fetch("http://api.dev.letstudy.org/user/get-course-like-status/" + String(course.id), requestOptionsGet)
      .then(response => response.text())
      .then(result => {
        if(JSON.parse(result).likeStatus){
          setLikeStatus("Đã thích");
        } else{
          setLikeStatus("Thích")
        }
      })
      .catch(error => console.log('error', error));
  })
  // const [playing, setPlaying] = useState(false);

  // const PlayerRef = useRef();
  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);


  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

  const pressLikeButton =() =>{
    console.log("press")
    fetch("http://api.dev.letstudy.org/user/like-course", requestOptions)
        .then(response => response.text())
        .then(result => {
          if(JSON.parse(result).likeStatus){
            setLikeStatus("Đă thích")
          } else{
            setLikeStatus("Thích")
          }
        })
        .catch(error => console.log('error', error));
  }
  
  const pressLearn =() =>{
    if (isOwnCourse){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      fetch("http://api.dev.letstudy.org/course/get-course-detail/"+course.id+"/"+userInfo.id, requestOptions)
      .then(response => response.text())
      .then(result => {
          RootNavigation.navigate(ScreenKey.LearnCourseScreen, {course: JSON.parse(result).payload})
      })
      .catch(error => console.log('error', error));
    } else{
      RootNavigation.navigate(ScreenKey.RegisterCourseScreen, {idCourse: course.id})
    }
  }
  

    return (
        <View style={styles.container}>
          <Video
            source={{ uri: course.promoVidUrl }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 400, height: 270 }}
          />
          <View style={styles.containerBtn}>
            <TouchableOpacity 
              onPress={pressLikeButton}
              style = {styles.likeStatusBtn}>
              <Text style = {styles.likeStatusTxt}>{likeStatus}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={pressLearn}
              style = {styles.ownCourseStatusBtn}>
              <Text style = {styles.likeStatusTxt}>{ownCourseStatus}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.darkText}>{course.description}</Text>
            <Text style={styles.darkText}>Learn What?</Text>
            
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
    title:{
      color: "#000",
      fontWeight: "bold",
      fontSize: 20
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
    },
    likeStatusBtn:{
      height: 30,
      width: 100,
      backgroundColor: "#ae1923"
    },
    likeStatusTxt:{
      color: "#fff",
      fontWeight: "bold",
      textAlign: 'center'
    },
    ownCourseStatusBtn:{
      height: 30,
      width: 100,
      backgroundColor: "#12374d"
    },
    containerBtn:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  })