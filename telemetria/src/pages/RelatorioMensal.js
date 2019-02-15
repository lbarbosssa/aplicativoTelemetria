import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text
} from "react-native";
import {
  Icon,
  Header,
  Left,
  Button,
  Container,
  Right,
  Body,
  Title
} from "native-base";
import MyHeader from "../components/MyHeader";

export default class RelMensal extends Component {
  render() {
    
    return <Text>Rel Mensal</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
