import React, { useState, useEffect, useCallback, useRef } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import {tokenStore} from '../../../app/store'
import { Video } from 'expo-av';


export default function CoursesDetail(props){
  const token = tokenStore.getState();
  const course = props.route.params.item;
  const [love, setLove] = useState();
  const [likeStatus, setLikeStatus] = useState();

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
    
    fetch("http://api.dev.letstudy.org/user/like-course", requestOptions)
      .then(response => response.text())
      .then(result => {
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
          <TouchableOpacity 
            onPress={pressLikeButton}
            style = {styles.likeStatusBtn}>
            <Text style = {styles.likeStatusTxt}>{likeStatus}</Text>
          </TouchableOpacity>
          <View style={styles.viewText}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.darkText}>{course.description}</Text>
            <Text style={styles.darkText}>Learn What?</Text>
            {course.learnWhat.map(item =>{<Text>{item}</Text>})}
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
      fontWeight: "bold"
    }
  })