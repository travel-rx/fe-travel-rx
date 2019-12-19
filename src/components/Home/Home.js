import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      medName: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TravelRx</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter Medication'
          textAlign='center'
          onChangeText={(medName) => this.setState({ medName })}
          value={this.state.medName}
        />
        <TouchableOpacity 
          style={styles.find}
        >
          <Text style={styles.text}>Find Generic Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Login')}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    color: '#3499AA',
    fontSize: 40
  },
  input: {
    borderColor: 'grey',
    height: 50,
    width: 250,
    fontSize: 15,
    borderRadius: 12,
    borderWidth: 1
  },
  text: {
    color: '#EBEBEB',
    textAlign: 'center',
    fontSize: 18
  },
  find: {
    backgroundColor: '#3499AA',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    width: 250
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
    width: 250
  }
});