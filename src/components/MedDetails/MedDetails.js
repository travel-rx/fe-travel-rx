import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import { RFPercentage } from "react-native-responsive-fontsize";

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
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style= {styles.generic} >{genericName}</Text>
            <Text style={styles.text}>{dosage} taken {frequency} {frequency === 1 ? 'time' : 'times'} per day</Text>
            <Text style={styles.text}>{withFood ? 'Take with food' : 'Can take without food'}</Text>
          </View>
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
    justifyContent: 'space-between',
  },
  medDetails: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 20
  },
  name: {
    textAlign: 'center',
    color: '#3499AA',
    fontSize: RFPercentage(5.5),
    fontWeight: 'bold',
    marginBottom: 10
  },
  generic: {
    textAlign: 'center',
    color: '#000',
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    marginBottom: 30
  },
  text: {
    fontSize: RFPercentage(4),
    padding: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginLeft: 9,
    overflow: 'hidden',
    width: width * 0.85,
  },
  buttonText: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: height * 0.03
  }
})