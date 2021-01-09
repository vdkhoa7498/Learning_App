import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'

export default function Download(props){
        
      return (
        <ScrollView>
          {/* <ListCourses navigation={props.navigation} courses= {courses}/> */}
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center'
    },
    searchbox:{
        flex: 1, 
        borderColor: 'gray', 
        borderWidth: 1,
        height: 40,
    }
})