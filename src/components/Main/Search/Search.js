import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function Search(){
    return (
        <View style={styles.container}>
          <TextInput 
            placeholder = 'Search...'
            style = {styles.searchbox}
            />
          <Button 
            onPress = {() => {console.log('search')}}
            title = 'Search'
            style = {styles.btn}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignContent: "flex-start",
      justifyContent: "flex-start",
      margin: 10
    },
    searchbox:{
        borderColor: 'gray', 
        borderWidth: 1,
        height: 40,
    },
    btn: {
      height: 40, 
      margin: 5
    }
})