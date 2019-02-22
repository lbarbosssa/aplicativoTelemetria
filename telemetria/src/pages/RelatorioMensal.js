import React, { Component } from "react";

import {
  Icon,
  Button,
  Container
} from "native-base";
import { MyHeader } from "../components/MyHeader";
import { EstiloHeader } from "../Estilo";
import RelatorioMensalInfo from "../components/relatorio-mensal/RelatorioMensalInfo";



export default class RelMensal extends Component {
  render() {
    return (
        <Container>
          <MyHeader title="Relatório Mensal">
            <Button transparent>
              <Icon name="arrow-back" style={EstiloHeader.btnHeader} onPress={() => this.props.navigation.goBack()} />
            </Button>
          </MyHeader>

          <RelatorioMensalInfo />
        </Container>
      
    );
  }
}
