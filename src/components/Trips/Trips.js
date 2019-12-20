import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Footer/Footer';

export default class Trips extends Component {
  render() {
    const navigation = this.props;

    return (
      <View style={styles.container}>
        <Text>Trips</Text>
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
