import { createAppContainer, createStackNavigator } from "react-navigation";
import Splash from './src/pages/Splash'
import LoginPage from "./src/pages/Login";
import HomePage from './src/pages/Home'

const AppNavigator = createStackNavigator({
    'Splash': {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    'Login': {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  },
  'Home': {
  screen: HomePage,
  navigationOptions: {
    
  }
}
  },
  {
    defaultNavigationOptions: {
      title: "Braspress",
    }
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
