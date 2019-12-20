import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import CreateAccount from '../components/CreateAccount/CreateAccount';
import Trips from '../components/Trips/Trips';
import MedicineCabinet from '../components/MedicineCabinet/MedicineCabinet';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Trips: { screen: Trips },
  MedicineCabinet: { screen: MedicineCabinet }
});

export default createAppContainer(AppNavigator);
