import React, { Component } from 'react'

import Splash from './pages/Splash'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation'

class App extends Component {
  render() {
    return <AppContainer />
  }
}
export default App

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage
    },
    Login: {
      screen: LoginPage
    }
  },
  {
    defaultNavigationOptions: {
      title: 'Telemetria',
      drawerLockMode: 'locked-open'
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  Inicio: {
    screen: AppStackNavigator,
  },
  Sair: {
    screen: LoginPage,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Splash },
  Login: { screen: LoginPage },
  Home: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(AppSwitchNavigator)
