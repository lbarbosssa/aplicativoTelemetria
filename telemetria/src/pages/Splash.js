import React, { Component } from "react";

import { View, StyleSheet, Animated, Easing, Dimensions, StatusBar } from "react-native";

const screenDimesions = Dimensions.get('window')

export default class Splash extends Component {

    componentWillMount() {
       
        this.barrinhaAnimada = new Animated.Value(0)
        this.caminhaoAnimado = new Animated.Value(0)
        this.apresentarElementos = new Animated.Value(0)

        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2200)

    }
    componentDidMount() {
        //Barra
        Animated.timing(this.barrinhaAnimada, {
            toValue: screenDimesions.width,
            duration: 900,     
        }).start()

        //Caminhao
        setTimeout(() => {
            Animated.timing(this.caminhaoAnimado, {
                toValue: screenDimesions.width * 2,
                duration: 1200,
                //easing: Easing.bounce
            }).start()
        }, 1000)

        //Apresentando elementos
        setTimeout(() => {
        Animated.timing(this.apresentarElementos, {
            toValue: 1.4,
            duration: 700,   
        }).start()
        }, 700)



    }

    render() {
        const barrinha = { width: this.barrinhaAnimada }
        const caminhao = { marginLeft: this.caminhaoAnimado}
        const apresentarElementos = { opacity: this.apresentarElementos}

        return (
            <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
                <Animated.Image 
                source={require('../../assets/imgs/truck.png')} 
                style={[styles.truck, caminhao, apresentarElementos]}/>
                <Animated.View style={[styles.bar, barrinha]} />
                <Animated.Text style={[styles.textBottom, apresentarElementos]} >Telemetria</Animated.Text>

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
    bar: {
        backgroundColor: '#F1592A',
        height: 4,
    },
    truck: {
        alignSelf: 'flex-start',
        width: 100,
        height: 100
    },
    textBottom: {
    fontSize: 20,
    color: "#F1592A",
    paddingBottom: 5,
    fontFamily: 'Bitter-Italic',
    alignSelf: 'flex-end',
    paddingRight: 35
  },

})