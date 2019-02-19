import React, { Component } from "react";
import {ScrollView} from 'react-native'
import {
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Left,
    Right,
    Icon,
} from "native-base";
import Estilo from "../Estilo";

class HomeInfo extends Component {
    
    render() {
        return (
            <Content style={Estilo.container}>
                <Card>
                <CardItem header>
                    <Text style={Estilo.cardTextHeader}>Bem Vindo!</Text>
                </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={Estilo.cardText}>Fabio Assunção</Text>
                            <Text style={Estilo.cardText}>12345678</Text>
                            <Text style={Estilo.cardText}>Poa Transferência</Text>
                            <Text style={Estilo.cardText}>5 Km/l </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>
                            Seu nivel de direção está a baixo da média!
                        </Text>
                    </CardItem>
                </Card>
            </Content>

        )
    }
}

export default HomeInfo