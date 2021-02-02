import React,{useEffect, useState} from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses'
import ListCourses from '../../Common/ListCourses/list-courses'
import ImageButton from '../../Common/image-button'
import axios from 'axios'
import {ScreenKey} from '../../../globals/constants'
import {userInfoStore} from '../../../app/store'
import {getAllInstructorApi, getInstructorApi} from '../../../services/instructor-services'
import { getRecommendCourseApi } from '../../../services/authentication-services';
import { getTopNewApi, getTopRateApi, getTopSellApi } from '../../../services/course-services';

export default function Browse(props) {

  const [instructors, setInstructors] = useState([]);
  const idUser = userInfoStore.getState().id;
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(()=>{
    if (isLoaded){
      getAllInstructorApi()
      .then(response => {
        setInstructors(response.data.payload);
        setIsLoaded(false)
      })
      .catch(error => console.log('error', error));
    }
    
  })
  const onPressRecommend = () => {
    // axios.get(`http://api.dev.letstudy.org/user/recommend-course/${idUser}/10/1`)
    getRecommendCourseApi(idUser,10,1)
    .then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      <ListCourses courses = {response.data.payload}/>
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopSell = () =>{
    // axios.post('http://api.dev.letstudy.org/course/top-sell',{
    //   "limit": 10,
    //   "page": 1
    // })
    getTopSellApi(10,1)
    . then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopNew = () =>{
    // axios.post('http://api.dev.letstudy.org/course/top-new',{
    //   "limit": 10,
    //   "page": 1
    // })
    getTopNewApi(10,1)
    . then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopRate = () =>{
    // axios.post('http://api.dev.letstudy.org/course/top-rate',{
    //   "limit": 10,
    //   "page": 1
    // })
    getTopRateApi(10,1)
    . then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      // <ListCourses courses = {response.data.payload}/>
    }).catch((error) =>{
      console.log(error)
    })
  }

  const renderListInstructor = () =>{
    
    return instructors.map( (item, index) => 
      <TouchableOpacity 
        key={index}
        style={styles.instructorBtn}
        onPress = {() =>{
          console.log("press");
          props.navigation.navigate(ScreenKey.InstructorInfoScreen, {data: item});
        }}>
        <Image
          style={styles.avatar}
          source={{
            uri: item["user.avatar"],
          }}
        />
        <Text style={styles.instructorTxt}>{item["user.name"]}</Text>
      </TouchableOpacity>
      // <SectionCoursesItem key ={index} navigation={props.navigation} item={item}/>
      );
      // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
  }

  return (
    <ScrollView>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP NEW' onPress={onPressTopNew}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP SELL' onPress={onPressTopSell}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP RATE' onPress={onPressTopRate}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='RECOMMENDED FOR YOU' onPress={onPressRecommend}/>
      
      <View>
        <Text style={styles.title}>Top Instructor</Text>
        <ScrollView horizontal = {true}>
            {renderListInstructor()}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgaebtnlarge:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
  imagebtnsmall:{
      margin: 2,
      width: 200
  },
  instructorBtn: {
    height:300,
    margin: 20
  },
  instructorTxt:{
    color: "#fff",
    fontWeight: 'bold',
    backgroundColor: "#252e53",
    borderRadius: 10,
    textAlign: 'center'
  },
  avatar:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  title: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000"
  }
});