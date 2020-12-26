import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../globals/constants'
import {userInfoStore} from '../../app/store'
import * as RootNavigation from '../../../RootNavigation';
import axios from 'axios'

export default function Profile() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const userInfo = userInfoStore.getState();

  const changePassword = () =>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = JSON.stringify({"id":String(userInfo.id),"oldPass":currentPassword,"newPass":newPassword});

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/user/change-password", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  }
  
  return (
    <View style={styles.container}>
      <Image style ={styles.img} source = {require('../../../../assets/login.png')}/>
      
      <TextInput
        onChangeText = {(text) => setPassword(text)}
        style = {styles.textInput}
        placeholder = "Current Password"
        secureTextEntry
        defaultValue = {currentPassword}
      />
      <TextInput
        onChangeText = {(text) => setPassword(text)}
        style = {styles.textInput}
        placeholder = "New Password"
        secureTextEntry
        defaultValue = {newPassword}
      />
      <Text>{status}</Text>
      <TouchableOpacity 
        onPress = {changePassword}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Change Password</Text>
      </TouchableOpacity>
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
  }
});