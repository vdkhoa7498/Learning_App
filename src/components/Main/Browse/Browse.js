import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses'
import ListCourses from '../../Common/ListCourses/list-courses'
import ImageButton from '../../Common/image-button'
import axios from 'axios'
import {ScreenKey} from '../../../globals/constants'
import {userInfoStore} from '../../../app/store'

export default function Browse(props) {

  const idUser = userInfoStore.getState().id;
  const onPressRecommend = () => {
    axios.get(`http://api.dev.letstudy.org/user/recommend-course/${idUser}/10/1`)
    .then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      <ListCourses courses = {response.data.payload}/>
      console.log(response.data.payload)
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopSell = () =>{
    axios.post('http://api.dev.letstudy.org/course/top-sell',{
      "limit": 10,
      "page": 1
    }). then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      <ListCourses courses = {response.data.payload}/>
      console.log(response.data.payload)
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopNew = () =>{
    axios.post('http://api.dev.letstudy.org/course/top-new',{
      "limit": 10,
      "page": 1
    }). then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      <ListCourses courses = {response.data.payload}/>
      console.log(response.data.payload)
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onPressTopRate = () =>{
    axios.post('http://api.dev.letstudy.org/course/top-rate',{
      "limit": 10,
      "page": 1
    }). then((response) =>{
      {props.navigation.navigate(ScreenKey.ListCourses, {data: response.data.payload})}
      <ListCourses courses = {response.data.payload}/>
      console.log(response.data.payload)
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <ScrollView>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP NEW' onPress={onPressTopNew}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP SELL' onPress={onPressTopSell}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='TOP RATE' onPress={onPressTopRate}/>
      <ImageButton image="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg" title='RECOMMENDED FOR YOU' onPress={onPressRecommend}/>
      {/* <ScrollView horizontal = {true}>
          <View>
            <ImageButton image="https://guildit.org/wp-content/uploads/2020/04/sell-online-hero.png" title='TOP SELL' onPress={onPressTopSell}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='CERTIFICATIONS' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='<Software> DEVELOPMENT' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='IT' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='Information and CYBER SECURITY' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='DATA PROFESSIONAL' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='BUSINESS PROFESSIONAL' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='Creative PROFESSIONAL' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton image="https://image.shutterstock.com/image-photo/wet-asphalt-reflection-neon-lights-260nw-1356837434.jpg" title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
      </ScrollView> */}
      {/* <SectionCourses navigation={props.navigation} title='Continue learning'/>
      <SectionCourses navigation={props.navigation} title='Path'/>
      <SectionCourses navigation={props.navigation} title='Channel'/>
      <SectionCourses navigation={props.navigation} title='Bookmarks'/> */}
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
  }
});