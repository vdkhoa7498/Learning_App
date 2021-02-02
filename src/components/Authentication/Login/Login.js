import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {ScreenKey} from '../../../globals/constants'
import * as RootNavigation from '../../../../RootNavigation';

import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../../action/authentication-action";


export default function Login(props) {

  const isLoading = useSelector((state) => state.loginReducer.isLoading);
  const messageRes = useSelector((state) => state.loginReducer.message);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = () => {

    if ((email=="")||(password=="")){
      setMessage("Vui lòng không để trống ô nhập")
    } else{
      setMessage("")
      dispatch(loginAction(email, password));
    }
  };

  useEffect(() => {
    
    if(messageRes=="Đăng nhập thành công"){
      props.navigation.navigate(ScreenKey.MainTabScreen)
    }
  })

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
      <Text>{message}</Text>
      <Text>{messageRes}</Text>
      <TouchableOpacity 
        onPress = {login}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Login</Text>
      </TouchableOpacity>

      {/* <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
        disabled={this.state.isSigninInProgress} /> */}

      <TouchableOpacity style={styles.socialButton}>
        <View style={{display: 'flex', flexDirection:'row'}}>
        <Text style={styles.btnText}>Login with Google</Text>
        
        </View>
      </TouchableOpacity>
      
      <Text style={styles.linkText}>You don't remember Password? 
      <TouchableOpacity 
          style={styles.linkText}
          onPress = {() =>{
            RootNavigation.navigate(ScreenKey.ForgetPasswordScreen)
          }}>
          <Text style={{color: "blue", marginLeft: 10}}>Reset Password</Text>
        </TouchableOpacity>
      </Text>

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
  socialButton:{
    alignItems: 'center',
    width: 300,
    height: 40,
    backgroundColor: '#ac1822',
    marginTop: 20,
  },
  linkText: {
    marginTop:10,
  },
  btnText:{
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  img:{
    width:200,
    height: 200
  }
});