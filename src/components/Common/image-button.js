import React from 'react'
import {ImageBackground, StyleSheet, TouchableOpacity, Text} from 'react-native'

export default function ImageButton(props){
    return(
        <ImageBackground style={styles.button} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJky6mI6UQiVIz69ABiaxKvBoqRcZIDxurlw&usqp=CAU'}}>
            <TouchableOpacity 
                style={styles.touch}
                onPress = {props.onPress}
            >
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 5
    },
    touch:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    }
})