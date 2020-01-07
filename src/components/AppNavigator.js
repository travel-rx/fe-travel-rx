import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import EmergencyTranslations from '../components/EmergencyTranslations/EmergencyTranslations';
import MedicineCabinet from '../components/MedicineCabinet/MedicineCabinet';
import About from '../components/About/About';
import AddMed from '../components/AddMed/AddMed';
import MedDetails from '../components/MedDetails/MedDetails';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  EmergencyTranslations: { screen: EmergencyTranslations },
  MedicineCabinet: { screen: MedicineCabinet },
  About: { screen: About },
  AddMed: { screen: AddMed },
  MedDetails: { screen: MedDetails }
});

export default createAppContainer(AppNavigator);
