import React, { Component } from "react";

import { View, StyleSheet } from "react-native";
import {
  Icon,
  Button,
  Container,  
} from "native-base";
import { MyHeader } from "../components/MyHeader";
import HomeInfo from "../components/HomeInfo";
import Estilo, { EstiloHeader } from "../Estilo";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
      <MyHeader title="Inicio">
        <Button transparent>
          <Icon name="menu" style={EstiloHeader.btnHeader} onPress={() => this.props.navigation.openDrawer()} />
        </Button>
      </MyHeader>
        <HomeInfo />
      </Container>
    );
  }
}