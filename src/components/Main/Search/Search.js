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
            style = {{width: 60, height: 40, margin: 5}}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container:{

    },
    searchbox:{
        flex: 1, 
        borderColor: 'gray', 
        borderWidth: 1,
        height: 40,
    }
})