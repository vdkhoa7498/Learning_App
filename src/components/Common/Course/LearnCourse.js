import React,{useEffect, useState, useCallback, useRef} from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Image, Button } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';
import { getDetailWithLessonApi, getCourseDetailApi } from '../../../services/course-services';
import YoutubePlayer from "react-native-youtube-iframe";

export default function LearnCourse(props) {

  const [videoYoutubeId, setVideoYoutubeId] = useState("AHLNzv13c2I")
  const courseId = props.route.params.courseId;
  const [sectionList, setSectionList] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  

  useEffect(() => {
    getDetailWithLessonApi(courseId)
    .then((response)=>{
      setSectionList(response.data.payload.section)
      setTitle(response.data.payload.title)
      setDescription(response.data.payload.description)
    })
    .catch((error)=>{
      console.log(error.response.message)
    })
  })
  
  const playLesson = (url) =>{
    if(url!= null){
      let pos = url.indexOf("=", 1)+1;
      setVideoYoutubeId(url.slice(pos))
    }
   
  }
  
  const renderListLesson = (lesson) =>{
    return (lesson).map((item, index) =>
        <View key={index} style={styles.containerLesson}>
            <TouchableOpacity onPress={() =>{playLesson(item.videoUrl)}}>
              <View style={styles.viewText}>
                  <Text style={styles.text}>  Bài {index+1}: {item.name}</Text>
                  <Text style={styles.text}>    Nội dung: {item.content}</Text>
              </View>
            </TouchableOpacity>
            
        </View>
    )
  }
  const renderSectionCourse = () =>{
    return sectionList.map((sectionCourse, index) =>
      <View key={index} style={styles.containerSection}>
          <View>
              <Text style={styles.textSection}>Chương {index+1}: {sectionCourse.name}</Text>
          </View>
          <ScrollView >
              {renderListLesson(sectionCourse.lesson) }
          </ScrollView>
      </View>
    )
  }
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#939faa'}}>
      <YoutubePlayer
        height={260}
        play={playing}
        videoId={videoYoutubeId}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      <View style={styles.viewText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.darkText}>{description}</Text>
      </View>
      <ScrollView style={styles.container}>
        {renderSectionCourse()}
      </ScrollView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 300
  },
  containerLesson: {
    backgroundColor: '#1f2341',
    color: '#fff',
    margin: 10
  },
  containerSection:{
    backgroundColor: '#0c1121'
  },
  itemLesson:{
    
  },
  avatar: {
    width: 200,
    height: 200,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  textSection:{
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 15
  },
  text:{
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  viewText:{
    margin: 5
  },
  darkText:{
    color: '#000'
  },
  title:{
    color: "#000",
    fontWeight: "bold",
    fontSize: 20
  },
});