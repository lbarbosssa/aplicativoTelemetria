import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'native-base';

import Splash from './pages/Splash'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import RelMensal from './pages/RelatorioMensal';
import { AppProvider } from '../context/appContext';
import Logoff from './components/Logoff'





const customDrawerComponent = (props) => (
  <SafeAreaView style={styles.drawer}>
    <View style={styles.headerDrawer}>
      <Text style={styles.headerText1}>Braspress</Text>
      <Text style={styles.headerText2}>Telemetria</Text>  
      {/* <View style={styles.headerDrawerImg} /> */}
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>

  </SafeAreaView>
)


class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppSwitchNavigator />
      </AppProvider>
    )

  }
}
export default App


const AppDrawerNavigator = DrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='home' style={{ color: tintColor }} />
      ),
      title: 'Inicio'
    }
  },
  Rel1: {
    screen: RelMensal,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='list' style={{ color: tintColor }} />
      ),
      title: 'Relatório Mensal'
    }
  },
  Logoff: {
    screen: Logoff,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='log-out' style={{ color: tintColor }} />
      ),
      title: 'Sair',
      drawerLockMode: 'locked-closed'
    }
  },
  Splash: {
    screen: Splash,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
}, {
    contentComponent: customDrawerComponent,
    //initialRouteName: 'Splash',
    contentOptions: {
      activeTintColor: '#F1592A'
    }
  })

export const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Splash },
  Home: { screen: AppDrawerNavigator },
  RelatorioMensal: { screen: RelMensal },
  Login: { screen: LoginPage },
})



const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  headerDrawer: {
    height: 100,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F1592A',
    marginBottom: 10
  },
   headerDrawerImg: {
     backgroundColor: '#ddd',
     height: 120,
     width: 250,
     borderRadius: 6,
   },
   headerText1: {
     fontFamily: 'Stencil',
     fontSize: 40,
     color: '#F1592A'
   },
   headerText2: {
    fontFamily: 'Bitter-Italic',
    fontSize: 20,
    alignSelf: 'flex-end',
    paddingRight: 30,
    color: '#F1592A'
  }

});