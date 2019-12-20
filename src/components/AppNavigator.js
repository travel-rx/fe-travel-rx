import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import CreateAccount from '../components/CreateAccount/CreateAccount'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount }
});

export default createAppContainer(AppNavigator);
