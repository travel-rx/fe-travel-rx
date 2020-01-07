import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';

const { height, width } = Dimensions.get('screen');

export default class MedDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: '',
      genericName: '',
      dosage: '',
      frequency: 1,
      withFood: false
    }
  }

  componentDidMount() {
    const { medication } = this.props.navigation.state.params;
    const { id, name, genericName, dosage, frequency, withFood } = medication;
    this.setState({ id, name, genericName, dosage, frequency, withFood })
  }

  static navigationOptions = {
    title: 'Medication Details',
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
    const { name, genericName, dosage, frequency, withFood } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.medDetails}>
          <Text style={styles.name}>{name}</Text>
          <Text style= {styles.generic} >{genericName}</Text>
          <Text style={styles.text}>{dosage} taken {frequency} {frequency === 1 ? 'time' : 'times'} per day</Text>
          <Text style={styles.text}>{withFood ? 'Take with food' : 'Can take without food'}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Medication</Text>
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
  medDetails: {
    flex: 1,
    justifyContent: 'space-around'
  },
  name: {
    textAlign: 'center',
    color: '#3499AA',
    fontSize: 25
  },
  generic: {
    textAlign: 'center',
    color: '#3499AA',
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    // color: '#3499AA',
  },
  button: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    fontWeight: 'bold',
    height: height * 0.06,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0,
    width: width * 0.85,
  },
  buttonText: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: height * 0.03
  }
})