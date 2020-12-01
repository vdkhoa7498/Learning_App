import React from 'react'
import {ImageBackground, StyleSheet, TouchableOpacity, Text} from 'react-native'

export default function ImageButton(props){
    return(
        <ImageBackground style={styles.button} source={{uri: `${props.image}`}}>
            <TouchableOpacity 
                style={styles.touch}
                onPress = {props.onPress}
            >
                <Text style={styles.title} >{props.title}</Text>
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
    title:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    }
})