import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import {tokenStore} from '../../../app/store'
import * as RootNavigation from '../../../../RootNavigation';

export default function LearnCourse(props) {

    console.log(props)
  const idCourse = props.route.params.idCourse;
  const token = tokenStore.getState();
  const [title, setTitle] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("")


  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/payment/get-course-info/eb90b9f3-c699-4d09-abc4-2108bd8b87fb", requestOptions)
    .then(response => response.text())
    .then(result => {
        setTitle(JSON.parse(result).payload.title)
        setInstructorName(JSON.parse(result).payload.instructorName)
        setImageUrl(JSON.parse(result).payload.imageUrl)
    })
    .catch(error => console.log('error', error));
  })

  const register = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify({"courseId":String(idCourse)});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/payment/get-free-courses", requestOptions)
    .then(response => response.text())
    .then(result => {setStatus("Khoá học đăng ký thành công")})
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