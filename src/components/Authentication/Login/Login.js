import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';
import axios from 'axios'
import {tokenStore, userInfoStore} from '../../../app/store'

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');


  const configLogin = {
    method: 'post',
    url: 'http://api.dev.letstudy.org/user/login',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data: {
      email: email,
      password: password}
  };

  const login = () => {
    axios(configLogin).then((response) =>{
      if (response.status == 200){

        tokenStore.dispatch({ type: 'SET_TOKEN', token: response.data.token })
        userInfoStore.dispatch({ type: 'SET_INFO', info: response.data.userInfo })
        props.navigation.navigate(ScreenKey.MainTabScreen)
      } else{
          console.log(response.message)
      }
    }).catch((error) =>{
      // if ()
      // console.log(error.status);
        setStatus("Login Failed");
    })
  };

  return (
    <>
    <View style={styles.container}>
      <Image style ={styles.img} source = {require('../../../../assets/login.png')}/>
      <TextInput
        onChangeText = {(text) => setEmail(text)}
        style = {styles.textInput}
        placeholder = "Email"
        defaultValue = {email}
      />
      <TextInput
        onChangeText = {(text) => setPassword(text)}
        style = {styles.textInput}
        placeholder = "Password"
        secureTextEntry
        defaultValue = {password}
      />
      <Text>{status}</Text>
      <TouchableOpacity 
        onPress = {login}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>You don't have account? 
      <TouchableOpacity 
          style={styles.linkText}
          onPress = {() =>{
            RootNavigation.navigate(ScreenKey.RegisterScreen)
          }}>
          <Text style={{color: "blue", marginLeft: 10}}>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  linkText: {
    marginTop:10,
  },
  btnText:{
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  img:{
    width:200,
    height: 200
  }
});