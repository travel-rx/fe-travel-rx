import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dosage: '',
      frequency: 1,
    }
  }

  static navigationOptions = {
    title: 'Add Medication',
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: 30,
    },
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.createAccount}>
        <TextInput
          style={styles.input}
          placeholder='Enter Medication name'
          textAlign='center'
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Dosage'
          textAlign='center'
          onChangeText={(dosage) => this.setState({ dosage })}
          value={this.state.dosage}
        />
        <TextInput 
          style={styles.input}
          placeholder='Enter Frequency'
          textAlign='center'
          keyboardType='numeric'
          onChangeText={(frequency) => this.setState({ frequency })}
          value={this.state.frequency}
        />
        <TextInput 
          style={styles.input}
          placeholder='Inventory'
          textAlign='center'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Add to Medicine Cabinet</Text>
        </TouchableOpacity>
        </View>
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
  text: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    borderColor: '#D7D7D7',
    borderRadius: 12,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
    marginTop: 40,
    width: 250,
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
    marginTop: 50
  },
  createAccount: {
    height: 400,
    flex: 0,
    justifyContent: 'space-between'
  }
});