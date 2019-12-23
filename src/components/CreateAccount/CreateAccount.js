import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordReEntered: ''
    }
  }

  static navigationOptions = {
    title: 'Create Account',
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
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.createAccount}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          textAlign='center'
          onChangeText={(firstName) => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          textAlign='center'
          onChangeText={(lastName) => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <TextInput 
          style={styles.input}
          placeholder='Email'
          textAlign='center'
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          textAlign='center'
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          style={styles.input}
          placeholder='Re-Enter Password'
          textAlign='center'
          onChangeText={(passwordReEntered) => this.setState({ passwordReEntered })}
          value={this.state.passwordReEntered}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Create Account</Text>
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