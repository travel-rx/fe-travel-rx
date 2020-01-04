import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';

export default class AddTrip extends Component {
  constructor() {
    super();
    this.state = {
      tripName: '',
      desitination: '',
      departureDate: '',
      departureLocation: '',
      arrivalDate: '',
      duration: ''
    }
  }

  static navigationOptions = {
    title: 'Add Trip',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: 30,
    }
  };

  render() {
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.addTrip}>

        </View>
        <Footer navigation={navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'space-between'
 },
 addTrip: {
   flex: 0,
   justifyContent: 'space-around'
 }
})