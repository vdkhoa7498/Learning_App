import React, { useState, useEffect, useCallback, useRef } from 'react'
import {View, TouchableOpacity, Text, StyleSheet, ScrollView, Image} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import * as RootNavigation from '../../../../RootNavigation'
import { Video } from 'expo-av';
import { ScreenKey } from '../../../globals/constants';
import {getCourseDetailApi} from '../../../services/course-services'
import { getCheckOwnCourseApi, getCourseLikeStatusApi, likeCourseApi } from '../../../services/authentication-services';
import { useSelector } from "react-redux";
import { Rating, AirbnbRating } from 'react-native-ratings';

const RatingItem =(props) =>{
    
  return(
    <View style={styles.containerRating}>
      <View style={styles.containerRatingUser}>
        <Image
          style={styles.avatar}
          source={{
            uri: props.item.user.avatar,
          }}
        />
        <Text style={styles.instructorTxt}>{props.item.user.name}</Text>
      </View>
      <View style={styles.containerRatingContent}>
        <AirbnbRating
          showRating={false}
          count={5}
          defaultRating={props.item.averagePoint}
          size={15}
        />
        <Text>{props.item.content}</Text>
      </View>
      
    </View>
  )
  
}

export default function CoursesDetail(props){
  
  const userId = useSelector((state) => state.loginReducer.userInfo.id);
  const courseId = props.route.params.courseId;

  const [likeStatus, setLikeStatus] = useState();
  const [isOwnCourse, setIsOwnCourse] = useState();
  const [ownCourseStatus, setOwnCourseStatus] = useState();
  const [courseDetail, setCourseDetail] = useState(null);
  
  const [title, setTitle] = useState(null)
  const [subtitle, setSubtitle] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [requirement, setRequirement] = useState()
  const [learnWhat, setLearnWhat] = useState()
  const [ratingList, setRatingList] = useState([])
  const [soldNumber, setSoldNumber] = useState(0)
  const [ratedNumber, setRatedNumber] = useState(0)
  const [videoNumber, setVideoNumber] = useState()
  const [totalHours, setTotalHours] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [promoVidUrl, setPromoVidUrl] = useState()
  const [averagePoint, setAveragePoint] = useState()
  const [updatedAt, setUpdatedAt] = useState()
  

  // const contentPoint = (courseDetail.contentPoint === null)? 5: courseDetail.contentPoint;
  // const formalityPoint = (courseDetail.formalityPoint === null)? 5: courseDetail.formalityPoint;
  // const presentationPoint = (courseDetail.presentationPoint === null)? 5: courseDetail.presentationPoint;
  // const ratingPoint = (contentPoint+formalityPoint+presentationPoint)/3
  const ratingPoint = 4
  const getCheckOwnCourse = () =>{
    getCheckOwnCourseApi(courseId)
    .then((response) => {
      
      setIsOwnCourse(response.data.payload.isUserOwnCourse)
      if(isOwnCourse){
        setOwnCourseStatus("Vào học");
      } else{
        setOwnCourseStatus("Đăng ký")
      }
    })
    .catch((err) => {
      console.log(err.response.data.message)
    });
  }

  const getCourseLikeStatus = () =>{
    getCourseLikeStatusApi(courseId)
    .then(response => {
      if(response.likeStatus){
        setLikeStatus("Đã thích");
      } else{
        setLikeStatus("Thích")
      }
    })
    .catch(error => console.log('error', error));
  }

  const getCourseDetail = () =>{
    getCourseDetailApi(courseId, userId)
      .then(response => {
        // setCourseDetail(response.data.payload)
        setRatingList(response.data.payload.ratings.ratingList)
        setTitle(response.data.payload.title)
        // setSubtitle(response.data.payload.subtitle)
        // setPrice(response.data.payload.price)
        // setLearnWhat(response.data.payload.learnWhat)
        // setDescription(response.data.payload.description)
        // setRequirement(response.data.payload.requirement)
        setSoldNumber(response.data.payload.soldNumber) 
        setRatedNumber(response.data.payload.ratedNumber)
        setVideoNumber(response.data.payload.videoNumber)
        setUpdatedAt(response.data.payload.updatedAt)
        // setTotalHours(response.data.payload.totalHours) 
        setImageUrl(response.data.payload.imageUrl)
        setPromoVidUrl(response.data.payload.promoVidUrl) 
        // setAveragePoint(()=>(response.data.payload.averagePoint=="NaN")?4:(response.data.payload.averagePoint))
      })
      .catch(error => console.log('error', error.response.message));
  }
  useEffect(()=>{ 
    
    if(title==null){
      getCheckOwnCourse();
      getCourseLikeStatus();
      getCourseDetail();
    }

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
    // console.log(courseDetail)
    likeCourseApi(courseId)
    .then(response => {
      if(response.data.likeStatus){
        setLikeStatus("Đã thích");
      } else{
        setLikeStatus("Thích")
      }
    })
    .catch(error => console.log('error', error));
  }
  
  const pressLearn =() =>{
    if (isOwnCourse){
      RootNavigation.navigate(ScreenKey.LearnCourseScreen, {courseId: courseId})
      // console.log(courseDetail)
      // getCourseDetailApi(courseId, userId)
      // .then(response => {
      //   console.log(response.data.payload)
      //     RootNavigation.navigate(ScreenKey.LearnCourseScreen, {course: response.data.payload})
      // })
      // .catch(error => console.log('error', error.response.message));
    } else{
      RootNavigation.navigate(ScreenKey.RegisterCourseScreen, {idCourse: courseId})
      getCheckOwnCourse();
    }
  }
  
  const renderListRating = () =>{
    
    return ratingList.map( (rating, index) => 
      <RatingItem key={index} item={rating} />
    );

  }

  const renderPromo = () =>{
    
    return (promoVidUrl!=null)
      ?
        (<Video
        source={{ uri: promoVidUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 400, height: 270 }}
      />)
    :
        (<Image style={{ width: 400, height: 270 }} source={{uri: `${imageUrl}`}}/>)
    
  }
    return (
        <ScrollView style={styles.container}>
          {renderPromo()}
          
          <View style={styles.containerRating}>
            <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={averagePoint}
                size={20}
              />
            <Text style={{fontSize:15}}>({ratedNumber} lượt đánh giá)</Text>
            <Text style={{fontSize:15, fontWeight: 'bold'}}>    {soldNumber} học viên</Text>
          </View>
          <Text style={{marginBottom: 10}}>Ngày cập nhật mới nhất: {Date(updatedAt)}</Text>
          
          
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
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.darkText}>{description}</Text>
            <Text style={styles.darkText}>Learn What?</Text>
            
          </View>
          <Text style={styles.title}> Đánh giá khoá học</Text>
          <ScrollView style={{maxHeight: 300}}>
            {renderListRating()} 
          </ScrollView>
          
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        backgroundColor: '#fff'
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
    },
    containerRating:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 5
    },
    containerRatingUser:{
      display: 'flex',
      alignItems: 'center'

    },
    containerRatingContent: {
      marginLeft: 10
    },
    ratingTxt:{
      fontSize: 10
    },
    instructorTxt:{
      color: "#fff",
      width: 100,
      fontWeight: 'bold',
      backgroundColor: "#252e53",
      borderRadius: 10,
      textAlign: 'center'
    },
    avatar:{
      width: 50,
      height: 50,
      borderRadius: 50,
      marginBottom: 10
    },
  })