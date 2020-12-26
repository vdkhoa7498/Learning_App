import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';
import axios from 'axios'

export default function Register(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("")

  const registerButton = () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":String(username),"email":String(email),"phone":String(phone),"password":String(password)});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/user/register", requestOptions)
      .then(response => response.text())
      .then(result => {
        let message = JSON.parse(result).message;
        if (message=="OK"){
          setStatus("Tài khoản đăng ký thành công!!!")
        } else{
          setStatus(message);
        }})
      .catch(error => console.log('error', error));
    
  }

  return (
    <View style={styles.container}>
      <Image style ={styles.img} source = {require('../../../../assets/login.png')}/>
      <TextInput
        style = {styles.textInput}
        placeholder = "User Name"
        defaultValue={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Email"
        defaultValue={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Phone"
        defaultValue={phone}
        onChangeText={(value) => setPhone(value)}
      />
      <TextInput
        style = {styles.textInput}
        type="password"
        secureTextEntry
        defaultValue={password}
        onChangeText={(value) => setPassword(value)}
        placeholder = "Password"
      />
      {/* <TextInput
        style = {styles.textInput}
        type="password"
        placeholder = "Confirm Password"
      /> */}
      <Text>{status}</Text>
      <TouchableOpacity 
        onPress= {registerButton}
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