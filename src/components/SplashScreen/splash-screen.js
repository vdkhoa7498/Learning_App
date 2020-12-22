import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import { ScreenKey } from '../../globals/constants';

class SplashScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loading:0}
    }

    componentDidMount (){
        this.timer = setInterval(() =>{
            const newLoadingValue = this.state.loading +1;
            this.setState({loading: newLoadingValue})
        }, 100);
    }

   
    componentDidUpdate(){
        if (this.state.loading >= 100){
            clearInterval(this.timer)
            this.props.navigation.navigate(ScreenKey.LoginScreen)
        }
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <View style = {styles.container}>
                <Image style ={styles.img} source = {require('../../../assets/logo.png')}/>
                <Text style= {styles.text}>Loading... {`${this.state.loading}`} </Text>
            </View>
        )
    }
    
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

export default SplashScreen