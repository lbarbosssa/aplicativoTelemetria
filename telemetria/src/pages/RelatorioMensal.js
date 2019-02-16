import React, { Component } from "react";

import {
  Icon,
  Button,
  Container  
} from "native-base";
import { MyHeader } from "../components/MyHeader";
import HomeInfo from "../components/HomeInfo";
import { EstiloHeader } from "../Estilo";

export default class RelMensal extends Component {
  render() {
    return (
      <Container>
      <MyHeader title="Relatório Mensal">
        <Button transparent>
          <Icon name="arrow-back" style={EstiloHeader.btnHeader} onPress={() => this.props.navigation.goBack()} />
        </Button>
      </MyHeader>
    
      </Container>
    );
  }
}
