import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Picker, Dimensions } from 'react-native';
import data from './data'
import Footer from '../Footer/Footer';

const { height, width } = Dimensions.get('screen');

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
      fontSize: height * .04,
    },
  };

  render() {
    const { navigation } = this.props;
    const language = data[this.state.language]

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={styles.picker}
          onValueChange={(itemValue) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label= "Spanish" value= 'spanish'/>
          <Picker.Item label= "French" value= 'french'/>
          <Picker.Item label= "German" value= 'german'/>
          <Picker.Item label= "Chinese" value= 'chinese'/>
          <Picker.Item label= "Arabic" value= 'arabic'/>
        </Picker>
        <ScrollView style={styles.translationContainer}>
          <View style={styles.translation}>
            <Text style={styles.translatedLanguage}>{language.help}</Text>
            <Text style={styles.english}>"Help"</Text>
          </View>
          <View style={styles.translation}>
            <Text style={styles.translatedLanguage}>{language.doctor}</Text>
            <Text style={styles.english}>"I need a doctor"</Text>
          </View>
          <View style={styles.translation}>
            <Text style={styles.translatedLanguage}>{language.accident}</Text>
            <Text style={styles.english}>"There's been an accident"</Text>
          </View>
          <View style={styles.translation}>
            <Text style={styles.translatedLanguage}>{language.ambulance}</Text>
            <Text style={styles.english}>"I need an ambulance"</Text>
          </View>
          <View style={styles.translation}>
            <Text style={styles.translatedLanguage}>{language.medication}</Text>
            <Text style={styles.english}>"Medicine"</Text>
          </View>
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
  translationContainer: {
    marginTop: 50,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    width: width * .9,
    zIndex: 1
  },
  picker: {
    flex: 0,
    height: height * .02,
    justifyContent: 'space-around',
    marginTop: height * .08,
    width: 150
  },
  translation: {
    marginBottom: height * .05
  },
  english: {
    color: '#000',
    fontSize: height * .04
  },
  translatedLanguage: {
    color: '#3499AA',
    fontSize: height * .05
  }
});
