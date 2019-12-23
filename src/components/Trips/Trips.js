import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';
import { Ionicons } from '@expo/vector-icons'

export default class Trips extends Component {

  static navigationOptions = {
    title: 'Trips',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: 30,
    },
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
                <View style={styles.tripsContainer}>
          <View style={styles.trip}>
            <Ionicons
              color='#3499AA'
              name='md-globe'
              size={65}
              />
              <View>
                <Text style={styles.tripName}>Meet Itzy!</Text>
                <Text style={styles.tripDestination}>St. Petersbug, FL</Text>
              </View>
          </View>
          <View style={styles.trip}>
            <Ionicons
              color='#3499AA'
              name='md-globe'
              size={65}
              />
              <View>
                <Text style={styles.tripName}>Backpacking Trip</Text>
                <Text style={styles.tripDestination}>Ho Chi Minh, Vietnam</Text>
              </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add Trip
          </Text>
        </TouchableOpacity>
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
  heading: {
    color: '#3499AA',
    fontSize: 40,
    paddingTop: 20,

  },
  buttonText: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tripsContainer: {
    flex: 1,
    margin: 25
  },
  trip: {
    flex: 1,
    flexDirection: 'row'
  },
  tripName: {
    color: '#3499AA',
    fontSize: 35,
    fontWeight: 'bold'
  },
  tripDestination: {
    color: '#212B31',
    fontSize: 15,
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
    width: 250,
    marginBottom: 25
  },
});
