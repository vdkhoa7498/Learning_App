import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { loginServices } from '../../../core/services/authentication-services';
import {ScreenKey} from '../../../globals/constants'

export const AuthenticationContext = React.createContext();

export default function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const [info, setInfo] = useState(null)

  useEffect(()=>{
    if (status && status.status === 200){
      props.navigation.navigate(ScreenKey.MainTabScreen)
      setInfo(loginServices.info)
    }
  })

  const renderLoginStatus = (status) =>{
    if (!status){
      return <View/>
    } 
    else if (status === 200){
        return ( <Text>Login successed</Text> )
      } 
      else{
        return( <Text>{status.errorString}</Text>)
      }
  } 
  return (
    <AuthenticationContext.Provider value= {{info, setInfo}}>
    <View style={styles.container}>
      <Image style ={styles.img} source = {require('../../../../assets/login.png')}/>
      <TextInput
        onChangeText = {text => setUsername(text)}
        style = {styles.textInput}
        placeholder = "User Name"
        defaultValue = {username}
      />
      <TextInput
        onChangeText = {text => setPassword(text)}
        style = {styles.textInput}
        placeholder = "Password"
        secureTextEntry
        defaultValue = {password}
      />
      {renderLoginStatus(status)}
      <TouchableOpacity 
        onPress = {() =>{
          setStatus(loginServices(username,password))
        }}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
    </AuthenticationContext.Provider>
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