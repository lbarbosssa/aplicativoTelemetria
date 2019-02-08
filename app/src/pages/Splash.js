import React, { Component } from "react";

import { View, StyleSheet, Image, Text } from "react-native";

export default class Splash extends Component {
    componentWillMount(){
        setInterval(() => {
            this.props.navigation.navigate('Login')
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}></Text>
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
    }

})