import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginPage from "./src/pages/Login";
import Splash from './src/pages/Splash'

const AppNavigator = createStackNavigator({
    // 'Splash': {
    //   screen: Splash,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    'Login': {
    screen: LoginPage,
    navigationOptions: {
      header: null
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
