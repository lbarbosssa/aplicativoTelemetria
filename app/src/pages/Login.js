import React, { Component } from "react";

import { View, StyleSheet, TextInput, Image } from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.image}
        source={{uri: 'https://www.braspress.com/wp-content/themes/braspress/img/braspress-logo.png'}} 
        />
        <TextInput
          style={styles.input}
          placeholder="Senha telemetria"
          placeholderTextColor="#EB8822"
          keyboardType="numeric"
        />
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
    color: "#EB8822"
  },
  image: {
    //aspectRatio: 1,
    width: 270,
    height: 100
  }
});
