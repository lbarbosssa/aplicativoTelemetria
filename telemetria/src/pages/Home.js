import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";
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
import { HeaderWithDrawer } from "../components/MyHeader";

export default class HomePage extends Component {
  render() {
    return (
      <HeaderWithDrawer title="Home" componentRender='HomeInfo'>
        <Button transparent>
          <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
        </Button>
      </HeaderWithDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
