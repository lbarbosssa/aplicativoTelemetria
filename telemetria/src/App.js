import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems, createSwitchNavigator } from 'react-navigation'
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
    return <AppDrawerNavigator /> 
}
}
export default App


const AppDrawerNavigator = DrawerNavigator({
  
   Home: {
    screen: HomePage,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='home' style={{color: tintColor}}/>
        )
    }
  },
  Rel1: {
    screen: RelMensal,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='list' style={{color: tintColor}}/>
        ),
        title: 'Relatório Mensal'
    }
  },
  Login: {
    screen: LoginPage,
    navigationOptions: {
        drawerIcon: ({tintColor}) =>  (
            <Icon name='log-out' style={{color: tintColor}}/>
        ),
        title: 'Sair',
        //drawerLockMode: 'locked-closed'
    }
  },
  Splash: {
    screen: Splash,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
},{
  contentComponent: customDrawerComponent,
  initialRouteName: 'Splash',
  contentOptions: {
    activeTintColor: '#F1592A'
  }
})

// const AppSwitchNavigator = createSwitchNavigator({
//   Welcome: { screen: Splash },
//   Home: { screen: HomePage },
//   RelatorioMensal: {screen: RelMensal},
//   Login: { screen: LoginPage },
// },{
//   initialRouteName: 'Home'
// })



const styles = StyleSheet.create({
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