import React, { Component } from "react";

import { View, StyleSheet, Image, Text, Animated, Easing, Dimensions } from "react-native";

const screenDimesions = Dimensions.get('window')

export default class Splash extends Component {
    // componentWillMount(){
    //     
    // }

    componentWillMount() {
        this.barrinhaAnimada = new Animated.Value(0)
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 0)
    }
    componentDidMount() {
        Animated.timing(this.barrinhaAnimada, {
            toValue: screenDimesions.width,
            duration: 1000,
            //easing: Easing.bounce
        }).start()


    }

    render() {
        const barrinha = { width: this.barrinhaAnimada }


        return (
            <View style={styles.container}>
                {/* <Image source={require('../../assets/imgs/truck.png')} /> */}
                <Animated.View style={[styles.barra, barrinha]} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003D7B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    },
    barra: {
        backgroundColor: '#EB8822',
        height: 4
    }

})