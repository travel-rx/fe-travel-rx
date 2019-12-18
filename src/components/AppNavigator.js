import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login}
});

export default AppNavigator;
