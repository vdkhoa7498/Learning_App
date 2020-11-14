import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CoursesDetail(props){
    return (
        <View style={styles.container}>
            <Video style = {{height: 300}}></Video>
            <Text>React Native</Text>
            <ScrollView horizontal='true'>
                <Ionicons name={'ios-bookmarks-outline'} color='black' />
                <Ionicons name={'ios-radio-sharp'} color='black' />
                <Ionicons name={'ios-arrow-down'} color='black' />
            </ScrollView>
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