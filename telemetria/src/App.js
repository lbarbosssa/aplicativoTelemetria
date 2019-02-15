import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator } from 'react-navigation'
import { Icon } from 'native-base';

import Splash from './pages/Splash'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import RelMensal from './pages/RelatorioMensal';



const customDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.headerDrawer}>
      <View style={styles.headerDrawerImg} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>

  </SafeAreaView>
)


class App extends Component {
  render() {
    return <AppSwitchNavigator /> 
}
}
export default App


const AppDrawerNavigator = createDrawerNavigator({
   Home: {
    screen: HomePage,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='home'/>
        )
    }
  },
  Rel1: {
    screen: RelMensal,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='list'/>
        ),
        title: 'Relatório Mensal'
    }
  },
  Login: {
    screen: LoginPage,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='log-out'/>
        ),
        title: 'Sair',
        drawerLockMode: 'locked-closed'
    }
  }
},{
  contentComponent: customDrawerComponent
})

const AppSwitchNavigator = createSwitchNavigator({
  // Welcome: { screen: Splash },
  // Login: { screen: LoginPage },
  Home: { screen: AppDrawerNavigator },
  RelatorioMensal : {screen: RelMensal}
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDrawer: {
    height: 150,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerDrawerImg: {
    backgroundColor: '#ddd',
    height: 120,
    width: 120,
    borderRadius: 60,
  }
  
});