import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';
import { Ionicons } from '@expo/vector-icons'

export default class Trips extends Component {

  static navigationOptions = {
    title: 'Trips',
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
                <Text style={styles.tripName}>Phenergan</Text>
                <Text style={styles.tripDestination}>Promethazine</Text>
              </View>
          </View>
          <View style={styles.trip}>
            <Ionicons
              color='#3499AA'
              name='md-globe'
              size={65}
              />
              <View>
                <Text style={styles.tripName}>Vibramycin</Text>
                <Text style={styles.tripDestination}>Doxycycline</Text>
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
    fontSize: 15,
  },
  button: {
    backgroundColor: '#8BC5C5',
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
