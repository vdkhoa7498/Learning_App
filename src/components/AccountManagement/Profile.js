import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function Profile() {
  const profile = [
      username = 'admin',
      password = '123',
      name = 'Administrator',
      age = 22,
      uriImage = '../../../../assets/login.png'
  ]

  const EditProfile = () =>{
      retrun (
        <View>
          <TextInput
          style = {styles.textInput}
          placeholder = {profile.username}
          />
          <TextInput
          style = {styles.textInput}
          placeholder = {profile.password}
          />
          <TextInput
          style = {styles.textInput}
          placeholder = {profile.name}
          />
          <TextInput
          style = {styles.textInput}
          placeholder = {profile.email}
          />
          <TextInput
          style = {styles.textInput}
          placeholder = {profile.age}
          />
        </View>
      );
  }
  return (
    <View style={styles.container}>
      <Image source = {require(`${profile.uriImage}`)}/>
      <Text>Username: {profile.username}</Text>
      <Text>Password: {profile.password}</Text>
      <Text>Name: {profile.name}</Text>
      <Text>Email: {profile.email}</Text>
      <Text>Age: {profile.age}</Text>
      <TouchableOpacity 
        style = {styles.btn}>
        <Text style = {styles.btnText}>Edit Profile</Text>
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
  }
});