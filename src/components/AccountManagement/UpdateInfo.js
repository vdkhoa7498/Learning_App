import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {tokenStore} from '../../app/store'
import axios from 'axios'

export default function UpdateInfo(props) {

  const [inputName, setInputName] = useState(props.route.params.name);
  const [inputAvatar, setInputAvatar] = useState(props.route.params.avatar);
  const [inputPhone, setInputPhone] = useState(props.route.params.phone);
  const [status, setStatus] = useState("");

  const token = tokenStore.getState();

  const editInfo = () =>{
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify({"name": String(inputName),"nameInfo":String(inputAvatar),"phone":String(inputPhone)});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/user/update-profile", requestOptions)
        .then(response => response.text())
        .then(result => {
            props.route.params.setName(inputName);
            props.route.params.setPhone(inputPhone);
            props.route.params.setAvatar(inputAvatar);
            // props.navigation.goBack();
            setStatus(JSON.parse(result).message); 
            console.log(JSON.parse(result).message)})
      .catch(error => console.log('error', error));

    
  }

  return (
    
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: inputAvatar,
        }}
      />
      <TextInput
        onChangeText = {text => setInputName(text)}
        style = {styles.textInput}
        placeholder = "Name"
        defaultValue = {inputName}
      />
      <TextInput
        onChangeText = {text => setInputPhone(text)}
        style = {styles.textInput}
        placeholder = "Phone"
        defaultValue = {inputPhone}
      />
      <Text>{status}</Text>
      <TouchableOpacity 
        onPress={editInfo}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Change Profile</Text>
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