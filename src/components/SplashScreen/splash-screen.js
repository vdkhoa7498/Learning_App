import React,{useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import { ScreenKey } from '../../globals/constants';

export default function SplashScreen (props){

    const [loading, setLoanding] = useState(0)

    useEffect(() => {
       
        // if (loading >= 100){
        //     // clearInterval(this.timer)
        //     props.navigation.navigate(ScreenKey.LoginScreen)
        // } else{
        //     setLoanding(loading+1)
        // }
        // console.log("useEffect");
        setTimeout(() => {
            props.navigation.navigate(ScreenKey.LoginScreen)
        }, 300);
    });

    return (
        <View style = {styles.container}>
            <Image style ={styles.img} source = {require('../../../assets/logo.png')}/>
            <Text style= {styles.text}>Loading...  </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    img:{
        width: 200,
        height: 200
    },
    text:{
        margin: 5,
        alignItems: "center"
    }
})
