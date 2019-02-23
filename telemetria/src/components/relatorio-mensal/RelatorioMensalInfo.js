import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text, Content, Card, CardItem, Body, View, Icon, Badge } from 'native-base'
import BadgeEvent from './BadgeEvent';

class RelatorioMensalInfo extends Component {
   state= {
       possuiEventos: true,
       eventos: [
            {
               event: 'Arrancadas',
               value: 5,
               icon: 'person',
               key: 0
           },
           {
               event: 'Freadas',
               value: 12,
               icon: 'person',
               key: 1
           },
           {
               event: 'Velocidade',
               value: 8,
               icon: 'person',
               key: 2
           },
           {
               event: 'Sitema de Freios',
               value: 9,
               icon: 'person',
               key: 3
           }]
   }

   renderEvent(){
       if (this.state.possuiEventos){
           return(
               <Card>
                        <CardItem header>
                            <Text style={styles.textSize}>Eventos</Text>
                        </CardItem>
                        <CardItem>
                       <Body>
                           {
                               this.state.eventos.map((data) => {
                                   return <Text key={data.key} style={[styles.cardText, styles.textSize]}>{data.event}</Text>
                               })
                           }
                       </Body>
                        </CardItem>
                    </Card>
           )
       }
   }

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

                                <Text style={styles.textSize}>Consumo de Combustivel</Text>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='fuel' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Janeiro - 2019: 5km/l</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='fuel' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Dezembro - 2018: 3.19km/l</Text>
                                </View>
                                <View style={styles.items}>
                                    <Icon type='MaterialCommunityIcons' name='fuel' style={styles.icon} />
                                    <Text style={[styles.cardText, styles.textSize]}>Novembro - 2018: 2.97km/l</Text>
                                </View>

                            </Body>
                        </CardItem>
                    
                        <CardItem footer bordered>
                            <Text style={styles.textSize}>Você deve melhorar sua condução</Text>
                        </CardItem>
                    </Card>  

                    {this.renderEvent()}              

                </Content>
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
    cardIcon: {
        padding: 5,
        fontSize: 28,
        color: '#F1592A'
    },
    cardText: {
        marginTop: 7,

    }
})

export default RelatorioMensalInfo