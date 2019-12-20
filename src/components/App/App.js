import React, { Component } from 'react';
import AppNavigator from '../AppNavigator';


export default class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
      
      <AppNavigator />
      </>
    )
  }
}
