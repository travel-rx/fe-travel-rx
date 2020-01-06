import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import data from './data'
import Footer from '../Footer/Footer';
import { Ionicons } from '@expo/vector-icons'

export default class EmergencyTranslations extends Component {

  static navigationOptions = {
    title: 'Emergency Translations',
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
    const language = data['french']
    console.log('what is DATA?', data.spanish)

    return (
      <View style={styles.container}>
        <ScrollView style={styles.translationContainer}>
          <Text>Help</Text>
          <Text>{language.help}</Text>
          <Text>I need a doctor</Text>
          <Text>{language.doctor}</Text>
          <Text>There's been an accident</Text>
          <Text>{language.accident}</Text>
          <Text>I need an ambulance</Text>
          <Text>{language.ambulance}</Text>
          <Text>Medicine</Text>
          <Text>{language.medication}</Text>
        </ScrollView>
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
  translationContainer: {
    margin: 25,
    marginHorizontal: 15
  },
  trip: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20
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
