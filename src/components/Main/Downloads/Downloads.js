import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Search(){
    return (
        <View>
            <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyltXwm2rlPCpbhS-wmQtE41koSxw1pJ9w7Q&usqp=CAU'}}/>
            <Text>Watch your courses on the go!</Text>
            <Text>Download courses so you can continue to skill up-even when you're offline</Text>
            <TouchableOpacity 
                style={styles.touch}
                onPress={() => navigation.navigate('Browse')}
            >
                <Text>'FIND A COURSE TO DOWNLOAD' </Text>
            </TouchableOpacity>
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