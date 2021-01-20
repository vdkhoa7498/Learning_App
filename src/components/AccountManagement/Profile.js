import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../globals/constants'
import {tokenStore} from '../../app/store'
import * as RootNavigation from '../../../RootNavigation';
import { getInfoApi } from '../../services/authentication-services';


export default function Profile() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [avatar, setAvatar] = useState();
  const [type, setType] = useState();
  const token = tokenStore.getState();


  useEffect(()=>{
    getInfoApi()
    .then(function (response) {
      console.log(response)
      setAvatar(response.data.payload.avatar);
      setName(response.data.payload.name);
      setEmail(response.data.payload.email);
      setPhone(response.data.payload.phone);
      setType(response.data.payload.type);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
    });
  })
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: avatar,
        }}
      />
      <Text>{email}</Text>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Text>{type}</Text>
      <TouchableOpacity 
        onPress={()=>{RootNavigation.navigate(ScreenKey.UpdateInfoScreen,{name: name, avatar: avatar, phone: phone, setName: setName, setPhone:setPhone, setAvatar: setAvatar})}}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>{RootNavigation.navigate(ScreenKey.ChangePasswordScreen)}}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>{RootNavigation.navigate(ScreenKey.ChangeEmailScreen)}}
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