import React, { Component } from "react";
import { ScrollView } from 'react-native'
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
import { AppConsumer } from "../../context/appContext";

class HomeInfo extends Component {

    render() {
        return (
            <AppConsumer>
                {(context) => (
                    <Content style={Estilo.container}>
                        <Card>
                            <CardItem header>
                                <Text style={Estilo.cardTextHeader}>Bem Vindo!</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={Estilo.cardText} numberOfLines={1}>{context.objHomeInfo.driverName}</Text>
                                    <Text style={Estilo.cardText} numberOfLines={1}>{context.objHomeInfo.idFuncionario}</Text>
                                    <Text style={Estilo.cardText} numberOfLines={1}>{context.objHomeInfo.filial}</Text>
                                    <Text style={Estilo.cardText} numberOfLines={1}>{context.objHomeInfo.totalKmLitros} </Text>
                                    <Text style={Estilo.cardText} numberOfLines={1}>{context.objHomeInfo.totalKmRodados} Rodados</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>
                                    Seu nivel de direção está a baixo da média!
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>
                )}
            </AppConsumer>

        )
    }
}

export default HomeInfo