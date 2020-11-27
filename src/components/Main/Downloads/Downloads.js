import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Download(){
    return (
        <View style={styles.container}>
            {/* <Image source ={require('../../../../assets/arrow-cloud-download.png')}/> */}
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