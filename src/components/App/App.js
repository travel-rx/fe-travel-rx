import React, { Component } from 'react';
import AppNavigator from '../AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}




// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import Home from '../Home/Home';
// // import Login from '../Login/Login';






// const MainNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Login: { screen: Login },
// })

// const App = createAppContainer(MainNavigator);

export default App;