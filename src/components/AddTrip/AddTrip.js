import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Footer from '../Footer/Footer';

export default class AddTrip extends Component {
  constructor() {
    super();
    this.state = {
      tripName: '',
      destination: '',
      departureDate: '',
      departureLocation: '',
      arrivalDate: '',
      duration: 1
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
          <TextInput
            style={styles.input}
            placeholder='Trip Name'
            textAlign='center'
            onChangeText={(tripName) => this.setState({ tripName})}
            value={this.state.tripName}
          />
          <TextInput
            style={styles.input}
            placeholder='Destination'
            textAlign='center'
            onChangeText={(destination) => this.setState({ destination })}
            value={this.state.destination}
          />
          <TextInput
            style={styles.input}
            placeholder='Departure Date'
            textAlign='center'
            onChangeText={(departureDate) => this.setState({ departureDate })}
            value={this.state.departureDate}
          />
          <TextInput
            style={styles.input}
            placeholder='Departure Location'
            textAlign='center'
            onChangeText={(departureLocation) => this.setState({ departureLocation })}
            value={this.state.departureLocation}
          />
          <TextInput
            style={styles.input}
            placeholder='Arrival Date'
            textAlign='center'
            onChangeText={(arrivalDate) => this.setState({ arrivalDate })}
            value={this.state.arrivalDate}
          />
          <TextInput
            style={styles.input}
            placeholder='Duration'
            textAlign='center'
            keyboardType={'numeric'}
            onChangeText={(duration) => this.setState({ duration })}
            value={this.state.duration}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add Trip</Text>
          </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'space-around'
  },
  input: {
    borderColor: '#D7D7D7',
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
    width: 300,
  },
  button: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    fontWeight: 'bold',
    height: 45,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0,
    width: 300,
  },
  text: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: 18
  }
})