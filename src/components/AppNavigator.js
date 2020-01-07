import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import CreateAccount from '../components/CreateAccount/CreateAccount';
import EmergencyTranslations from '../components/EmergencyTranslations/EmergencyTranslations';
import MedicineCabinet from '../components/MedicineCabinet/MedicineCabinet';
import About from '../components/About/About';
import AddMed from '../components/AddMed/AddMed';
import AddTrip from '../components/AddTrip/AddTrip';
import MedDetails from '../components/MedDetails/MedDetails';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  EmergencyTranslations: { screen: EmergencyTranslations },
  MedicineCabinet: { screen: MedicineCabinet },
  About: { screen: About },
  AddMed: { screen: AddMed },
  AddTrip: { screen: AddTrip},
  MedDetails: { screen: MedDetails }
});

export default createAppContainer(AppNavigator);
