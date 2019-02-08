import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content'/>
        <KeyboardAvoidingView behavior="padding" style={styles.safeArea}>
          <Text style={styles.text1nd}>Braspress</Text>
          <Text style={styles.text2nd}>Telemetria</Text>
          <TextInput
            style={[styles.input, styles.textGlobal]}
            placeholder="Senha telemetria"
            placeholderTextColor="#dbdbdb"
            keyboardType="numeric"
            secureTextEntry
            maxLength={6}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textButton, styles.textGlobal]}> Entrar </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#003D7B"
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  input: {
    textAlign: "center",
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 6
  },
  image: {
    // flex: 1,
    // width: screenDimesions.width *0.1000,
    // height: screenDimesions.height *0.33,
  },
  text1nd: {
    fontSize: 60,
    color: "#F1592A",
    paddingLeft: 10,
    fontFamily: "Bitter-Italic"
  },
  text2nd: {
    fontSize: 20,
    color: "#F1592A",
    paddingBottom: 5,
    fontFamily: "Bitter-Italic",
    alignSelf: "flex-end",
    paddingRight: 35
  },
  button: {
    marginTop: 10,
    backgroundColor: "#003366",
    
    borderRadius: 6
  },
  textButton: {
    padding: 17,
    textAlign: "center"
  },
  textGlobal: {
    color: "#dbdbdb",
    fontSize: 18,
    fontFamily: "Bitter-Regular"
  }
});
