import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import {
  Icon,
  Header,
  Left,
  Button,
  Container,
  Right,
  Body,
  Title
} from 'native-base'
import HomeInfo from './HomeInfo'
//import HomeInfo from './HomeInfo'

function renderComponent(component) {
  switch (component) {
    case 'HomeInfo':
      return <HomeInfo />

    default:
      break
  }
}

export const HeaderWithDrawer = props => {
  return (
    <Container>
        
      <Header style={styles.header} androidStatusBarColor='#003366'>
        <Left>{props.children}</Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right />
      </Header>
      <ScrollView>
        {renderComponent(props.componentRender)}
        
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003D7B',
    color: '#fff'
  }
})
