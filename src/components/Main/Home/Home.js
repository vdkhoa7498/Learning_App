import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses'
import {getFavoriteCoursesApi} from '../../../services/course-services'
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from "react-redux";
export default function Home(props) {

  const userId = useSelector((state) => state.loginReducer.userInfo.id);

  const [favoriteCourses, setFavoriteCourses] = useState([])
  const [myCourses, setMyCourses] = useState([])

  // const getCourseId = async () =>{
  //   console.log('get course')
  //   try {
  //     setUserId(await SecureStore.getItemAsync('userId'));
  //     console.log('get id: ', userId)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  useEffect(() =>{
    
    console.log('userid:', userId)
    // getFavoriteCoursesApi(userId)
    //   .then((res) => {
    //     setFavoriteCourses(res.data.payload)
    //   })
    //   .catch((err) => {
    //     // console.log(err.response.data.message);
        
    //   });
  })
  return (
    <ScrollView>
      <SectionCourses navigation={props.navigation} title='Khoá học của tôi' courses = {favoriteCourses}/>
      <SectionCourses navigation={props.navigation} title='Khoá học yêu thích của tôi' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
});