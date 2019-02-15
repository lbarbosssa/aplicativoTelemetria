import React, { Component } from 'react'

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
import { EstiloHeader } from '../Estilo';


export const MyHeader = props => {
  return (
        
      <Header style={EstiloHeader.header} androidStatusBarColor='#003366' iosBarStyle='light-content'>
        <Left>{props.children}</Left>
        <Body>
          <Title style={EstiloHeader.title}>{props.title}</Title>
        </Body>
        <Right />
      </Header>
  )
}
