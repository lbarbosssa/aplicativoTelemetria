import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Dimensions
} from "react-native";
import { MyHeader } from "../components/MyHeader";
import { AppConsumer } from "../../context/appContext";
import { View, } from "native-base";

const screenDimesions = Dimensions.get('window')

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      driverCode: '',

    }
  }

  onChangeText(driverCode) {
    this.setState({ driverCode })
  }

  // onPress(){
  //   if (this.state.driverCode === '1234567' || this.state.driverCode === ''){
  //     console.log(this.state.driverCode)
  //     this.props.navigation.navigate('Home')
  //   }
  // }

  render() {
    //const { driverCode } = this.state

    return (
      <AppConsumer>
        {context => (

          <SafeAreaView style={styles.container}>
            <MyHeader transparent />
            <StatusBar barStyle='light-content' />
            <KeyboardAvoidingView behavior="padding" style={styles.safeArea}>
              <View style={styles.textViewer}>
                <Text style={styles.text1nd}>Braspress</Text>
                <Text style={styles.text2nd}>Telemetria</Text>    
              </View>
              
              <TextInput
                style={[styles.input, styles.textGlobal]}
                placeholder="Senha telemetria"
                placeholderTextColor="#dbdbdb"
                keyboardType="numeric"
                secureTextEntry
                maxLength={7}
                onChangeText={(driverCode) => this.onChangeText(driverCode)}
              />
              <TouchableOpacity style={styles.button} onPress={() => context.login(this.state.driverCode, this.props.navigation)}>
                <Text style={[styles.textButton, styles.textGlobal]}> Entrar </Text>
              </TouchableOpacity>
              <Text style={[styles.textButton, styles.textGlobal]}>{context.loginMsg}</Text>

            </KeyboardAvoidingView>
          </SafeAreaView>
        )}
      </AppConsumer>
    );
  }
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#003D7B"
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: screenDimesions.width / 30
  },
  input: {
    textAlign: "center",
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 6
  },
  textViewer: {
    alignSelf: 'center'
  },
  text1nd: {
    fontSize: 55,
    color: "#F1592A",
    paddingLeft: 10,
    fontFamily: "Stencil",
  },
  text2nd: {
    fontSize: 20,
    color: "#F1592A",
    paddingBottom: 5,
    fontFamily: "Bitter-Italic",
    alignSelf: "flex-end",
    paddingRight: 10
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
