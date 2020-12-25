import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, AsyncStorageStatic } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import axios from 'axios'
import {store} from '../../../app/store'

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [token, setToken] = useState();

  // useEffect(()=>{
  //   console.log('auth Context:',authContext)
  //   if (authContext.state.isAuthenticated){
  //     props.navigation.navigate(ScreenKey.ProfileScreen,{
  //       screen: ScreenKey.HomeStackScreen,
  //       params: authContext.state.userInfo
  //     })
      
  //   } else{
  //     console.log('login failed')
  //   }
  // })

  var configLogin = {
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
    console.log("press login");
    // store.dispatch({ type: 'SET_TOKEN', token: "1234" })
    // console.log(store.getState());

    axios(configLogin).then((response) =>{
      if (response.status == 200){
        store.dispatch({ type: 'SET_TOKEN', token: response.data.token })
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
      <div>{status}</div>
      <TouchableOpacity 
        onPress = {() =>{
          // authContext.login(email, password)
          login()
        }}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress = {() =>{
          props.navigation.navigate(ScreenKey.RegisterScreen)
        }}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Register</Text>
      </TouchableOpacity>
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