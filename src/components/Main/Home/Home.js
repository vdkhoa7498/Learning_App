import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses'
import {getFavoriteCoursesApi, getProcessCoursesApi} from '../../../services/authentication-services'
import * as SecureStore from 'expo-secure-store';
import { useSelector } from "react-redux";
export default function Home(props) {

  const userId = useSelector((state) => state.loginReducer.userInfo.id);

  const [favoriteCourses, setFavoriteCourses] = useState([])
  const [myCourses, setMyCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    // getFavoriteCoursesApi()
    // .then((res) => {
    //   setFavoriteCourses(res.data.payload)
    // })
    // .catch((err) => {
    //   console.log(err.response.data.message);
      
    // });

    // getProcessCoursesApi()
    // .then((res) => {
    //   setMyCourses(res.data.payload)
    // })
    // .catch((err) => {
    //   console.log(err.response.data.message);
      
    // });
  })
  return (
    <ScrollView>
      {/* <SectionCourses navigation={props.navigation} title='Khoá học đang học' userId ={userId} courses = {myCourses}/>
      <SectionCourses navigation={props.navigation} title='Khoá học yêu thích của tôi' userId ={userId} courses = {favoriteCourses} /> */}
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