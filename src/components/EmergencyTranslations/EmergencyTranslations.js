import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity, Picker } from 'react-native';
import data from './data'
import Footer from '../Footer/Footer';
import { Ionicons } from '@expo/vector-icons'

export default class EmergencyTranslations extends Component {
  constructor() {
    super();
    this.state = {
      language: 'spanish'
    }
  }

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
    const language = data[this.state.language]

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }
        >
          <Picker.Item label= "Spanish" value= 'spanish'/>
          <Picker.Item label= "French" value= 'french'/>
        </Picker>
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
    marginTop: 125,
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
