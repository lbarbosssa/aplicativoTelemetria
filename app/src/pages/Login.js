import React, { Component } from "react";

import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.image}
        source={{uri: 'https://www.braspress.com/wp-content/themes/braspress/img/braspress-logo.png'}} 
        />
        <Text style={styles.textBTU} >Telemetria</Text>
        <TextInput
          style={[styles.input, styles.textGlobal]}
          placeholder="Senha telemetria"
          placeholderTextColor="#EB8822"
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
    backgroundColor: "#003D7B"
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
    width: 270,
    height: 40
  },
  textBTU: {
    fontSize: 20,
    color: "#EB8822",
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
    color: "#EB8822",
    fontSize: 18,
    fontFamily: 'Bitter-Regular',
  }
});
