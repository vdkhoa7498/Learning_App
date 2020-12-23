import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import {ScreenKey} from '../../../globals/constants'
import {AuthenticationContext} from '../../../provider/authentication-provider'

export default function Register() {

  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const authContext = useContext();

  useEffect(()=>{
    if (authContext.isAuthenticated){
      props.navigation.navigate(ScreenKey.MainTabScreen)
      
    } else{
      console.log('login failed')
    }
  })

  return (
    <View style={styles.container}>
      <Image source = {require('../../../../assets/login.png')}/>
      <TextInput
        style = {styles.textInput}
        placeholder = "User Name"
        clear
        autoFocus
        type="text"
        value={inputUsername}
        onChange={value => {
          setInputUsername(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Email"
        clear
        type="email"
        autoCompleteType="email"
        value={inputEmail}
        onChange={value => {
          setInputEmail(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        placeholder = "Phone"
        clear
        type="number"
        autoCompleteType="tel"
        value={inputPhone}
        onChange={value => {
          setInputPhone(value);
        }}
      />
      <TextInput
        style = {styles.textInput}
        type="password"
        value={inputPassword}
        onChange={value => {setInputPassword}}
        placeholder = "New Password"
      />
      {/* <TextInput
        style = {styles.textInput}
        type="password"
        placeholder = "Confirm Password"
      /> */}
      <TouchableOpacity 
        onPress= {()=>{authContext.register(inputUsername,inputEmail, inputPhone, inputPassword)}}
        style = {styles.btn}>
        <Text style = {styles.btnText}>Register</Text>
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
  textInput:{
    height: 40,
    marginTop: 20,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1
  },
  btn:{
    height: 40,
    marginTop: 20,
    width: "98%",
    backgroundColor: "blue",
    alignItems: "center"
  },
  btnText:{
    justifyContent: "center",
    textAlign: "center",
  }
});