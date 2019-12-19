import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <View style={styles.login}>

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
        <TouchableOpacity
          style={styles.button}
          >
          <Text style={styles.text}>Login</Text>
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
    borderColor: 'grey',
    height: 50,
    width: 250,
    fontSize: 15,
    borderRadius: 12,
    borderWidth: 1
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
    marginTop: 50
  },
  login: {
    height: 400,
    flex: 0,
    justifyContent: 'space-evenly'
  }
})