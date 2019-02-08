import React, { Component } from "react";

import { View, StyleSheet, Image, Text, Animated, Easing, Dimensions } from "react-native";

export default class Splash extends Component {
    // componentWillMount(){
    //     setInterval(() => {
    //         this.props.navigation.navigate('Login')
    //     }, 2000)
    // }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1)
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 400,
            duration: 1000,
            easing: Easing.bounce
        }).start()
    }

    render() {
        const barrinha = { width: this.animatedValue}
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, barrinha]} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
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
    box: {
        backgroundColor: 'red',
        width: 1,
        height: 10
    }

})