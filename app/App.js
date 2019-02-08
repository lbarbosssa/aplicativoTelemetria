import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginPage from "./src/pages/Login";

const AppNavigator = createStackNavigator({
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
