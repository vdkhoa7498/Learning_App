import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import {tokenStore} from '../../../app/store'
import * as RootNavigation from '../../../../RootNavigation';
import { getFreeCourseApi, getCourseInfoApi } from '../../../services/payment-services';

export default function LearnCourse(props) {
  const idCourse = props.route.params.idCourse;
  
  const [title, setTitle] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("")


  useEffect(()=>{
    
    getCourseInfoApi(idCourse)
    .then(response => {
        setTitle(response.data.payload.title)
        setInstructorName(response.data.payload.instructorName)
        setImageUrl(response.data.payload.imageUrl)
    })
    .catch(error => console.log('error', error));
  })

  const register = () =>{
    
    getFreeCourseApi(idCourse)
    .then(response => {
      setStatus("Khoá học đăng ký thành công")
      // props.navigation.
    })
    .catch(error => console.log('error', error));
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: imageUrl,
        }}
      />
      <Text>{title}</Text>
      <Text>{instructorName}</Text>
      <TouchableOpacity 
        onPress={register}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Register Course</Text>
      </TouchableOpacity>
      <Text>{status}</Text>
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