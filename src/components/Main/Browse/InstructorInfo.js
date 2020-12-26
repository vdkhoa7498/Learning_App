import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function InstructorInfo(props) {

  const instructInfo = props.route.params.data
  
  const renderSkill = () =>{
    console.log(instructInfo.skills)
    return (instructInfo.skills).map((item, index) => 
      <Text key={index}>{item}, 
      </Text>
    )
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: instructInfo["user.avatar"],
        }}
      />
      <Text>{instructInfo["user.email"]}</Text>
      <Text>{instructInfo["user.name"]}</Text>
      <Text>{instructInfo["user.phone"]}</Text>
      <Text>Skills: {renderSkill()}</Text>
      
      
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
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
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
});