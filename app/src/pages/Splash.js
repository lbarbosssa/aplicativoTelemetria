import React, { Component } from "react";

import { View, StyleSheet, Image, Text, Animated, Easing, Dimensions } from "react-native";

const screenDimesions = Dimensions.get('window')

export default class Splash extends Component {
    // componentWillMount(){
    //     
    // }

    componentWillMount() {
        this.barrinhaAnimada = new Animated.Value(0)
        this.caminhaoAnimado = new Animated.Value(0)

        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2200)
    }
    componentDidMount() {

        Animated.timing(this.barrinhaAnimada, {
            toValue: screenDimesions.width,
            duration: 1000,
            //easing: Easing.bounce
        }).start()

        setTimeout(() => {
            Animated.timing(this.caminhaoAnimado, {
                toValue: screenDimesions.width - 130,
                duration: 1000,
                easing: Easing.bounce
            }).start()

        }, 900)



    }

    render() {
        const barrinha = { width: this.barrinhaAnimada }
        const caminhao = { marginLeft: this.caminhaoAnimado}


        return (
            <View style={styles.container}>
                <Animated.Image 
                source={require('../../assets/imgs/truck.png')} 
                style={[styles.truck, caminhao]}/>
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
        backgroundColor: '#F1592A',
        height: 4
    },
    truck: {
        alignSelf: 'flex-start',
        width: screenDimesions.width -300,
        height: 100
    }

})