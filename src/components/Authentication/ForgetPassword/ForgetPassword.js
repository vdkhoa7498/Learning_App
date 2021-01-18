import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';
import { useSelector, useDispatch } from "react-redux";
import { forgetPasswordAction } from "../../../action/authentication-action";

export default function ForgetPassword(props) {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const messageRes = useSelector((state) => state.forgetPasswordReducer.message);
  const dispatch = useDispatch();


  const resetPassword = () =>{
    if (email==""){
      setMessage("Vui lòng nhập email")
    } else{
      setMessage("")
      dispatch(forgetPasswordAction(email));
      
      // props.navigation.navigate(ScreenKey.MainTabScreen)
      // tokenStore.dispatch({ type: 'SET_TOKEN', token: localStorage.getItem("token") })
    
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source = {require('../../../../assets/login.png')}/>
      <TextInput
        style = {styles.textInput}
        placeholder = "Email"
        onChangeText = {value => setEmail(value)}
      />
      <Text>{message}</Text>
      <Text>{messageRes}</Text>
      <TouchableOpacity 
        onPress={resetPassword}
        style = {styles.btn}>
        <Text style={styles.btnText} style = {styles.btnText}>Reset Password</Text>
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
    marginTop: 8,
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