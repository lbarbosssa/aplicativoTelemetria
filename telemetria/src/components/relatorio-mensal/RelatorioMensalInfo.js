import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text, Content, Card, CardItem, Body, View, Icon } from 'native-base'

class RelatorioMensalInfo extends Component {
    render() {
        return (
            <ScrollView>
                <Content style={styles.content} padder>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textSize}>Período: Janeiro de 2019</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <View style={styles.items}>
                                    <Icon name='person' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Fabio Assunção</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon name='home' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Poa - Transferência</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='FontAwesome' name='id-badge' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>01234</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='road-variant' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>200 km rodados</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='engine' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>3:48:00</Text>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>

                                <Text style={styles.textSize}>Ociosidade</Text>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='timer-sand-empty' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Atual: 0%</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='timer-sand-empty' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Anterior: 3.03%</Text>
                                </View>

                                <Text style={styles.textSize}>Litros por hora</Text>
                                <View style={styles.items}>
                                    <Icon type='SimpleLineIcons' name='drop' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Atual: 23.18
                                </Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='SimpleLineIcons' name='drop' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Anterior: 20.37</Text>
                                </View>

                            </Body>
                        </CardItem>
                        

                        <CardItem footer bordered>
                            <Text style={styles.textSize}>Você deve melhorar sua condução</Text>
                        </CardItem>
                    </Card>

                </Content >
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,

    },
    textSize: {
        fontSize: 18,
        color: '#000'
    },
    items: {
        flexDirection: 'row'
    },
    icon: {
        width: 40,
        padding: 5,
        fontSize: 28,
        color: '#F1592A'
    },
    cardText: {
        marginTop: 7,

    }
})

export default RelatorioMensalInfo