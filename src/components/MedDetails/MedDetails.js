import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimentions } from 'react-native';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';

// const { height, width } = Dimentions.get('screen');

export default class MedDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: '',
      genericName: '',
      dosage: '',
      frequency: 1,
      withFood: false,
      inventory: null
    }
  }

  componentDidMount() {
    const { medication } = this.props.navigation.state.params;
    const { id, name, genericName, dosage, frequency, withFood, inventory} = medication;
    this.setState({ id, name, genericName, dosage, frequency, withFood, inventory})
  }

  static navigationOptions = {
    title: 'Medicine Details',
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
    console.log('state', this.state)
    return (
      <View style={styles.container}>
        <View style={styles.medDetails}>

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

  }
})