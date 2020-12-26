import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';
import axios from 'axios'

export default function Register() {

  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPassword, setInputPassword] = useState("");


  var configRegister = {
    method: 'post',
    url: 'http://api.dev.letstudy.org/user/register',
    headers: { 
      'Content-Type': 'application/json', 
    },
    data: {
      username: inputUsername,
      email: inputEmail,
      phone: inputPhone,
      password: inputPassword}
  };

  const register = (props) => {
    
    axios(configRegister).then((response) =>{
      if (response.status == 200){
        // props.navigation.navigate(ScreenKey.LoginScreen)
      } else{
          console.log(response)
      }
    }).catch((error) =>{
        console.log(error)
    })

    
  };

  return (
    <View style={styles.container}>
      <Image style ={styles.img} source = {require('../../../../assets/login.png')}/>
      <TextInput
        style = {styles.textInput}
        placeholder = "User Name"
        defaultValue={inputUsername}
        onChange={value => {
          setInputUsername(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Email"
        defaultValue={inputEmail}
        onChange={value => {
          setInputEmail(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Phone"
        defaultValue={inputPhone}
        onChange={value => {
          setInputPhone(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        type="password"
        secureTextEntry
        defaultValue={inputPassword}
        onChange={value => {setInputPassword}}
        placeholder = "Password"
      />
      {/* <TextInput
        style = {styles.textInput}
        type="password"
        placeholder = "Confirm Password"
      /> */}
      <TouchableOpacity 
        onPress= {()=>{register()}}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>You have account? 
        <TouchableOpacity 
          style={styles.linkText}
          onPress = {() =>{
            RootNavigation.navigate(ScreenKey.LoginScreen)
          }}>
          <Text style={{color: "blue", marginLeft: 10}}>Login</Text>
        </TouchableOpacity>
      </Text>
      
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
  linkText: {
    marginTop:10,
  },
  img:{
    width:200,
    height: 200
  }
});