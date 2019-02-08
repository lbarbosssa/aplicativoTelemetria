import React, { Component } from "react";

import { View, StyleSheet, Image, Text, Animated, Easing, Dimensions } from "react-native";

const widthScrenn = Dimensions.get('window')

export default class Splash extends Component {
    // componentWillMount(){
    //     
    // }

    componentWillMount() {
        this.barrinhaAnimada = new Animated.Value(0)
        setInterval(() => {
            this.props.navigation.navigate('Login')
        }, 1500)
    }
    componentDidMount() {
        Animated.timing(this.barrinhaAnimada, {
            toValue: widthScrenn.width,
            duration: 1500,
            easing: Easing.bounce
        }).start()
    }

    render() {
        const barrinha = { width: this.barrinhaAnimada }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, barrinha]} />

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
    box: {
        backgroundColor: 'red',
        width: 1,
        height: 10
    }

})