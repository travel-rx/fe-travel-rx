import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';

export default class About extends Component {

  static navigationOptions = {
    title: 'About',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3499AA'
    },
    headerTintColor: '#EBEBEB',
    headerTitleStyle: {
      fontSize: 30,
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>
            TravelRx is a traveller’s favorite medication-tracking companion! With TravelRx, you don’t need to worry about getting sick while travelling and needing to find the proper medication on your own, losing your everyday medications, or being able to find medical assistance in an area where you don’t speak the language. 
          </Text>
          <Text style={styles.text}>
            Our app provides a traveller with the ability to look up a medication’s generic name from its American brand name, as pharmacies worldwide use the generic medication name rather than brand names. 
          </Text>
          <Text style={styles.text}>
            It also provides you with access to a personalized “medicine cabinet,” where you can store information about the medications you take, including their name (brand and generic), time of day you take the medicine, frequency of dosage, as well as the dosage amount.
          </Text>
          <Text style={styles.text}>
            Lastly, if you are in an area where Spanish, French, Mandarin, German, or Arabic are spoken, TravelRx provides you with popular emergency medical phrases to assist you in getting the help you need.
          </Text>
          <Text style={styles.by}>Created By:</Text>
          <Text style={styles.creator}>Smitha Hosmani</Text>
          <Text style={styles.creator}>Leiya Kenney</Text>
          <Text style={styles.creator}>Jeannie Evans</Text>
          <Text style={styles.creator}>Amy Rippeto</Text>
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
  textContainer: {
    marginHorizontal: 15
  },
  text: {
    color: '#212b31',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  by: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  creator: {
    fontSize: 16,
    textAlign: 'center',
  }
});
