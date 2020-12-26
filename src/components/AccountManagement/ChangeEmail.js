import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../globals/constants'
import {tokenStore, userInfoStore} from '../../app/store'
import * as RootNavigation from '../../../RootNavigation';

export default function ChangeEmail() {

  const [newEmail, setNewEmail] = useState("");
  const [status, setStatus] = useState("");
  
  const userInfo = userInfoStore.getState();
  const token = tokenStore.getState();

  const changeEmailButton = () =>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"newEmail":String(newEmail)});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://api.dev.letstudy.org/user/change-user-email", requestOptions)
    .then(response => response.text())
    .then(result => {
      let message = JSON.parse(result).message;
      if (message=="OK"){
        setStatus("Email đã được thay đổi!!!")
      } else{
        setStatus(message);
      }})
    .catch(error => console.log('error', error));
        
  }
  
  return (
    <View style={styles.container}>
      <Image style ={styles.avatar} source = {require('../../../assets/login.png')}/>
      
      <TextInput
        onChangeText = {(text) => setNewEmail(text)}
        style = {styles.textInput}
        placeholder = "New Email"
        defaultValue = {newEmail}
      />
      <Text>{status}</Text>
      <TouchableOpacity 
        onPress = {changeEmailButton}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Change Email</Text>
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
  },
  btnText:{
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
});