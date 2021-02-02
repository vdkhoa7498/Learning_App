import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';

import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../../../action/authentication-action";

export default function Register(props) {

  // const messageRes = useSelector((state) => state.registerReducer.message);
  const messageRes = useSelector((state) => state.registerReducer.message);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("")

  
  const registerButton = () => {
    // console.log("username: ",username,", email:",email,", phone: ",phone,", password: ",password, "=", passwordConfirm)
    if ((username=="")||(email=="")||(phone=="")||(password=="")){
      setMessage("Vui lòng không để trống ô nhập")
    } else
    if (passwordConfirm!==password){
      setMessage("Mật khẩu và mật khẩu xác thực không khớp")
    } else{
      setMessage("");
      dispatch(registerAction(username, email, phone, password))
      
    }
    
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
      <TextInput
        style = {styles.textInput}
        type="password"
        secureTextEntry
        defaultValue={passwordConfirm}
        onChangeText={(value) => setPasswordConfirm(value)}
        placeholder = "Confirm Password"
      />
      <Text>{message}</Text>
      <Text>{messageRes}</Text>
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