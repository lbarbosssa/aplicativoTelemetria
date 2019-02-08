import React, { Component } from "react";

import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity, Dimensions } from "react-native";

const screenDimesions = Dimensions.get('window')

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.image}
        source={require('../../assets/imgs/new_Braspress.png')} 
        />
        <Text style={styles.text2nd} >Telemetria</Text>
        <TextInput
          style={[styles.input, styles.textGlobal]}
          placeholder="Senha telemetria"
          placeholderTextColor="#cecccc"
          keyboardType="numeric"
          secureTextEntry
          maxLength={6}
        />
        <TouchableOpacity
         style={styles.button}
         
       >
         <Text style={[styles.textButton, styles.textGlobal]}> Entrar </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003D7B",
  },
  input: {
    textAlign: "center",
    backgroundColor: "#003366",
    padding: 15,
    width: "90%",
    borderRadius: 6,
  },
  image: {
    //aspectRatio: 1,
    width: screenDimesions.width -30,
    height: screenDimesions.height -715,
  },
  text2nd: {
    fontSize: 20,
    color: "#F1592A",
    paddingBottom: 5,
    fontFamily: 'Bitter-Italic',
    alignSelf: 'flex-end',
    paddingRight: 35
  },
  button: {
    marginTop: 10,
    backgroundColor: "#003366",
    width: "90%",
    borderRadius: 6,
    
  },
  textButton: {
    padding: 17,
    textAlign: "center",   
  },
  textGlobal: {
    color: "#cecccc",
    fontSize: 18,
    fontFamily: 'Bitter-Regular',
  }
});
